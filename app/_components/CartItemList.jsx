import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Header from './Header'


function CartItemList({cartItemList,onDeleteItem}) {
    
    
  return (
    <div>
        <div className='h-[500px] overflow-auto'>
            {cartItemList.map((cart,index)=>(
                <div className='flex justify-normal p-2 mb-5'>
                    <div className='flex gap-6 items-center'>
                    <Image className='border p-2' src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+cart.image} width={90} height={90} alt={cart.name}/>
                    </div>
                    
                    <div className='px-5'>
                        <h2 className='font-bold'>{cart.name}</h2>
                        <h2>Quantity {cart.quantity}</h2>
                        <h2 className='text-md font-bold'>R {cart.amount}</h2>
                    </div>
                    <TrashIcon onClick={()=>onDeleteItem(cart.id)} className='cursor-pointer'/>
                    
                </div>
                

                
            ))}
        </div>
        
    </div>
  )
}

export default CartItemList