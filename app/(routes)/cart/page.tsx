"use client"
import Container from '@/components/ui/container'
import useCart from '@/hooks/use-cart'
import React, { useEffect, useState } from 'react'
import CartItems from './components/cart-items'
import Summary from './components/summary'

const CartPage = () => {
    const cart = useCart()
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
  return (
    <div className='bg-white'>
        <Container>
            <div className='px-4 py-16 sm:px-6 lg:px-8'>
                <h1 className=' font-bold text-3xl text-black'>Shopping cart</h1>
                <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                <div className='lg:col-span-7'>
                    {cart.items.length===0 && <p
                     className=' text-neutral-500'>No item added to cart</p>}
                     <ul>{cart.items.map(item=><CartItems
                     key={item.id}
                     data={item}/>)}
                     </ul>
                     </div>
                     <Summary/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CartPage