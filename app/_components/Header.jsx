import { Button } from '@/components/ui/button';
import { CircleUserRound, LayoutGrid, Search, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState, useContext } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from '../_utils/GlobalApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UpdateCartContext } from '../_context/UpdateCartContext';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItemList from './CartItemList';
import { toast } from 'sonner';

export default function Header() {
  const router = useRouter();
  const { updateCart } = useContext(UpdateCartContext);
  const [categoryList, setCategoryList] = useState([]);
  const [cartItemList, setCartItemList] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  let jwt = null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      jwt = sessionStorage.getItem('jwt');
      setIsLogin(jwt ? true : false);
      setUser(jwt ? JSON.parse(sessionStorage.getItem('user')) : null);
    }
  }, []);

  useEffect(() => {
    getCatergoryList();
  }, []);

  useEffect(() => {
    getCartItems();
  }, [updateCart]);

  const getCatergoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.data.data);
    });
  };

  const getCartItems = async () => {
    if (!jwt || !user) {
      return; // Exit early if JWT token or user data is not available
    }

    try {
      const cartItemList_ = await GlobalApi.getCartItems(user.id, jwt);
      setTotalCartItem(cartItemList_?.length);
      setCartItemList(cartItemList_);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const onDeleteItem = (id) => {
    GlobalApi.deleteCartItem(id, jwt).then(resp => {
      toast('Item removed!');
      getCartItems();
    }).catch(e => {
      toast('Could not delete.');
    });
  };

  useEffect(() => {
    let total = 0;
    cartItemList.forEach(element => {
      total = total + element.amount;
    });
    setSubtotal(total.toFixed(2));
  }, [cartItemList]);

  const onSignOut = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
    }
    router.push('/sign-in');
  };

  return (
    <div className='shadow-sm flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image
          src='/logo2.jpg'
          alt='icon'
          width={150}
          height={100}
        />

        <DropdownMenu className='outline-none'>
          <DropdownMenuTrigger>
            <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer'>
              <LayoutGrid className='h-5 w-5' /> Category
            </h2>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Browser Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <Link key={index} href={`/products-category/${category.attributes.name}`}>
                <DropdownMenuItem className="flex gap-4 items-center cursor-pointer">
                  <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.attributes.icon.data[0]?.attributes?.url}
                    alt='icon'
                    width={30}
                    height={30}
                    unoptimized={true}
                  />
                  <h2 className='text-lg'>{category?.attributes?.name}</h2>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
          <Search />
          <input type="text"
            placeholder='Search'
            className='outline-none'
          />
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <Sheet>
          <SheetTrigger>
            <h2 className='flex gap-2 items-center text-lg'>
              <ShoppingBasket className='h-7 w-7' />
              <span className='bg-primary text-white px-2 rounded-full'>{totalCartItem}</span>
            </h2>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='bg-primary text-white font-bold text-lg'>My Cart</SheetTitle>
              <SheetDescription>
                <CartItemList cartItemList={cartItemList} onDeleteItem={onDeleteItem} />
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild>
              <div className='absolute w-[90%] bottom-6 flex flex-col'>
                <h2 className='text-lg font-bold flex justify-between'>Subtotal <span>R{subtotal}</span></h2>
                <Button onClick={() => router.push(jwt ? '/checkout' : '/sign-in')}>View Cart</Button>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>

        {!isLogin ?
          <Link href={'/sign-in'}>
            <Button>Login</Button>
          </Link>
          :
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CircleUserRound className='cursor-pointer h-7 w-7 bg-white-100 text-black' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Orders</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSignOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      </div>
    </div>
  );
}