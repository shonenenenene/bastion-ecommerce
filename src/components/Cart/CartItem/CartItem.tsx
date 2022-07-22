import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { TypeActions } from '../../../store/actions'
import './style.scss'

const CartItem = ({ item}: any) => {

  const dispatch = useDispatch()
  const count = item.count
  const productId = item.productId


  const countUp = () => {
    if (count < 99) {
      dispatch({ type: TypeActions.COUNT_CHANGE, payload: { productId, count: count + 1 } })
    }
  }

  const countDown = () => {
    if (count > 1) dispatch({type: TypeActions.COUNT_CHANGE, payload: {productId, count: +count - 1}})

  }

  const deleteItem = () => {
    dispatch({ type: TypeActions.DELETE_FROM_CART, payload: { productId } })
  }

  // useEffect(() => {
  //   setCartItemTotal(item.price * cartCount)
  // }, [cartCount])


  return (
    <div className='cart-item'>
          <div className='cart-item-img'>
            
          </div>   
          <div className='cart-item-info'>
            <div className='cart-item-standart'>{ item.standart }</div>
            <div className='cart-item-name'>{ item.productName }</div>
            <div className='cart-item-price'>{ item.price } руб.</div>
          </div>
          <div className='cart-item-counter'>
              <button onClick={() => countUp()} className='counter-up'>+</button>
                <div className='field'>{ count }</div>
              <button onClick={() => countDown()} className='counter-down'>-</button>
          </div>
          <div className='cart-item-total'>{ item.price * count} руб.</div>
          <button onClick={() => deleteItem()} type='button' className='cart-item-delete-btn'>
            
          </button>
    </div>
  )
}

export default CartItem