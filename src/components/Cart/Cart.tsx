import React, { useState } from 'react'
import CartList from './CartList/CartList'
import OrderForm from './OrderForm/OrderForm'
import { useTypedSelector } from '../hooks/useTypedSelector'
import './style.scss'

const Cart = () => {
  
  const total = useTypedSelector(state => state.cartReducer.products)


  return (
    <section className='cart'>
      <div className='cart_container container'>
        <CartList />
        <OrderForm/>
      </div>
    </section>
  )
}

export default Cart