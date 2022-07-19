import React, { FC } from 'react'
import CartItem from '../CartItem/CartItem'
import './style.scss'

const CartList:FC = () => {
  return (
    <div>
      <div className='cart-list'>
        <CartItem />
        <CartItem />
        <CartItem /> 
        <CartItem />
      </div>
      <div className='cart-list-footer'>
        <a className='cart-clear'>
          <div className='clear-btn'>
            <img src='./img/trash.svg'/>
          </div>
          <span>Очистить корзину</span>
        </a>
      </div>
    </div>
  )
}

export default CartList