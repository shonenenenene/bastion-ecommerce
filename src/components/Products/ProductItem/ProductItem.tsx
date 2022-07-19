import React from 'react'
import { IProduct } from '../../../types'
import './style.scss'

const ProductItem = ({ typeName, productId, productName, price, standart }: IProduct) => {
  return (
    <div className='product-item'>
      <div className='item-id'>{ productId }</div>
      <div className='item-name'>{ productName }</div>
      <div className='item-type'>{ typeName }</div>
      <div className='item-price'>{ price }</div>
      <div className='item-standart'>{ standart }</div>
    </div>
  )
}

export default ProductItem