import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TypeActions } from '../../../../../store/actions'
import { IProduct } from '../../../../../types'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import './style.scss'

const ItemsCard = ({ typeId, typeName, productId, productName, price, standart }: IProduct) => {
  const [mouseOn, setMouseOn] = useState(false)
  const cartItems = useTypedSelector(state => state.cartReducer.products)
  const dispatch = useDispatch()

  const [count, setCount] = useState(1)

  const addToCart = () => {
    dispatch({type: TypeActions.ADD_TO_CART, payload: { typeName: typeName, productId: productId, productName: productName, price: price, standart: standart, count: +count }})
  }

  const valueChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+e.target.value)
  }

  const countUp = () => {
    if (count < 99) setCount(count + 1)
    
  }

  const countDown = () => {
    if (count > 1) setCount(count - 1)
  }

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
          {mouseOn &&
          <div className='mouse-on'>
          <button onClick={() => addToCart()} className='add-to-cart' type='button'>В корзину</button>
            <div className='item-counter'>
              <button onClick={() => countUp()} type='button' className='count-btn'>+</button>
            <input onChange={(e) => valueChanger(e)} type='number' value={ +count } min='1' max='99'/>
              <button onClick={() => countDown()} type='button' className='count-btn'>-</button>
            </div>
          </div> 
          }
    </div>
  )
}

export default ItemsCard