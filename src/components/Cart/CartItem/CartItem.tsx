import React, { FC, useState } from 'react'
import { ICartItem, IProduct } from '../../../types'
import './style.scss'

const CartItem = ({ item }: any) => {

  const [cartCount, setCartCount] = useState(item.count)

  const valueChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCartCount(+e.target.value)
  }

  const countUp = () => {
    if (cartCount < 99) setCartCount(cartCount + 1)
    
  }

  const countDown = () => {
    if (cartCount > 1) setCartCount(cartCount - 1)
  }

  return (
    <div className='cart-item'>
          <div className='cart-item-img'>
            <img src='./img/woman.png'/>
          </div>   
          <div className='cart-item-info'>
            <div className='cart-item-standart'>{ item.standart }</div>
            <div className='cart-item-name'>{ item.productName }</div>
            <div className='cart-item-price'>{ item.price } руб.</div>
          </div>
          <div className='cart-item-counter'>
              <button onClick={() => countUp()} className='counter-up'>+</button>
                <input onChange={(e) => valueChanger(e)} type='number' min='1' max='99' value={cartCount } />
              <button onClick={() => countDown()} className='counter-down'>-</button>
          </div>
          <div className='cart-item-total'>{ item.price } руб.</div>
          <button type='button' className='cart-item-delete-btn'>
            <img src='./img/trash.svg'/>
          </button>
    </div>
  )
}

export default CartItem