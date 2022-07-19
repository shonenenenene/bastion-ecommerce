import React, { FC } from 'react'
import './style.scss'

const CartItem:FC = () => {
  return (
    <div className='cart-item'>
          <div className='cart-item-img'>
              <img src='./img/woman.png'/>
          </div>   
          <div className='cart-item-info'>
              <div className='cart-item-standart'>gdh4536f</div>
              <div className='cart-item-name'>Tgxjfgft dfddd yttyrt tr</div>
              <div className='cart-item-price'>777</div>
          </div>
          <div className='cart-item-counter'>
              <div className='counter-up'>+</div>
              <input/>
              <div className='counter-down'>-</div>
          </div>
          <div className='cart-item-total'>777</div>
          <div className='cart-item-delete-btn'>
            <img src='./img/trash.svg'/>
          </div>
    </div>
  )
}

export default CartItem