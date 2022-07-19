import React, { FC } from 'react'
import CartList from './CartList/CartList'
import OrderForm from './OrderForm/OrderForm'
import './style.scss'

const Cart:FC = () => {
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