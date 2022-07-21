import React from 'react'
import { useDispatch } from 'react-redux'
import { TypeActions } from '../../../store/actions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CartItem from '../CartItem/CartItem'
import './style.scss'

const CartList = () => {
  const cartItems = useTypedSelector(state => state.cartReducer.products)
  const dispatch = useDispatch()
  const clearSky = () => {
    dispatch({type: TypeActions.CLEAR_SKY})
  }
  return (
    <div>
      <div className='cart-list'>
        {cartItems.map((e) => {
          return <CartItem key={e.productId} item={ e } />
        })}
        {
          cartItems.length === 0 ?
          <div className='empty'>Пусто :(</div> :
          <div></div>
        }
        
      </div>
      {
        cartItems.length !== 0 ?
        <div className='cart-list-footer'>
          <button onClick={() => clearSky()} className='cart-clear'>
            <div className='clear-btn'>
              <img src='./img/trash.svg'/>
            </div>
            <div>Очистить корзину</div>
          </button>
          </div>
          : <div></div>
        }


    </div>
  )
}

export default CartList