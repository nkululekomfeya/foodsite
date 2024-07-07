import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ProductItemDetail from './ProductItemDetail'

function ProductItem({product}) { 
  
  return (
    <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 group border rounded-lg hover:scale-105 cursor-pointer hover:shadow-lg transition-all ease-in-out'>
        <Image className='h-[200px] w-[200px] object-contain'src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product.attributes.images.data[0].attributes.url}
        width={500}
        height={200}
        unoptimized = {false}
        alt='icon'/>
        <h2 className='font-bold text-lg'>{product.attributes.name}</h2>
        <div className='flex gap-3'>
            {product.attributes.sellingPrice&&
            <h2 className={'font-bold text-lg'}>R{product.attributes.sellingPrice}</h2>}
            <h2 className={`font-bold ${product.attributes.sellingPrice && 'line-through text-gray-500'}`}>R{product.attributes.mrp}</h2>
        </div>
        <Dialog>
        <DialogTrigger asChild><Button variant="outline"
        className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            
            <DialogDescription>
                <ProductItemDetail product={product}/>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default ProductItem