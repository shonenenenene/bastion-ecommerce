import React, { useState } from 'react'
import { IProduct } from '../../../../../types'
import './style.scss'

const ItemsCard = ({ productName, price, standart }: IProduct) => {
  const [mouseOn, setMouseOn] = useState(false)

  return (
    <div
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      className={`items_card ${mouseOn && 'mouse'}`}>
          <div className='bonuses'>
              <div className='hit'>хит</div>
              <div className='sale'>скидка</div>
              <div className='stock'>акция</div>
          </div>
          <div className='card-img'>
            <img src='./img/woman.png'/> 
          </div>
          <div className='standart'>{standart}</div>
          <h3>{productName}</h3>
          <p className='item-price'>{price} руб.</p>
    </div>
  )
}

export default ItemsCard