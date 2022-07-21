import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CartItem from '../CartItem/CartItem'
import './style.scss'

const CartList:FC = () => {
  const cartItems = useTypedSelector(state => state.cartReducer.products)
  
  console.log(cartItems)
  return (
    <div>
      <div className='cart-list'>
        {cartItems.map((e) => {
          return <CartItem key={e.productId} item={ e } />
        })}
        
      </div>
      <div className='cart-list-footer'>
        <a className='cart-clear'>
          <div className='clear-btn'>
            <img src='./img/trash.svg'/>
          </div>
          <button>Очистить корзину</button>
        </a>
      </div>
    </div>
  )
}

export default CartList