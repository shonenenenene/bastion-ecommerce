import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TypeActions } from '../../../../../store/actions'
import { IProduct } from '../../../../../types'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import './style.scss'

const ItemsCard = ({ typeId, typeName, productId, productName, price, standart }: IProduct) => {
  const [mouseOn, setMouseOn] = useState(false)
  const cartItems = useTypedSelector(state => state.cartReducer.products)
  const dispatch = useDispatch()

  const [isHit, setIsHit] = useState(false)
  const [isAct, setIsAct] = useState(false)

  const [count, setCount] = useState(1)
  const [alreadyInCart, setAlreadyInCart] = useState(false)

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

  const funcAct = () => {
  if (Array.from(productName).find((e) => 'a')) {
    setIsAct(true)
  }

  }

  useEffect(() => {
    if (cartItems.find(item => item.productId === productId)) {
      setAlreadyInCart(true)
    }
  }, [mouseOn, addToCart])


  return (
    <div
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      className={`items_card ${mouseOn && 'mouse'}`}>
          <div className='bonuses'>
          {((Array.from(productName)).includes('a') || (Array.from(productName)).includes('а'))  && <div className='stock'>акция</div>}
          {((Array.from(productName)).includes('o') || (Array.from(productName)).includes('о'))  &&  <div className='hit'>хит</div>}
          </div>
          <div className='card-img'>
          </div>
          <div className='standart'>{standart}</div>
          <h3>{productName}</h3>
          <p className='item-price'>{price} руб.</p>
          {mouseOn &&
          <div className='mouse-on'>
          <button onClick={() => addToCart()} disabled={alreadyInCart} className='add-to-cart' type='button'>
          { !alreadyInCart ?
              'В корзину' :
              'Добавлено'
          }</button>
            <div className='item-counter'>
              <button onClick={() => countUp()} disabled={alreadyInCart} type='button' className='count-btn'>+</button>
            <input onChange={(e) => valueChanger(e)} disabled={alreadyInCart} type='number' value={ +count } min='1' max='99'/>
              <button onClick={() => countDown()} disabled={alreadyInCart} type='button' className='count-btn'>-</button>
            </div>
          </div> 
          }
    </div>
  )
}

export default ItemsCard