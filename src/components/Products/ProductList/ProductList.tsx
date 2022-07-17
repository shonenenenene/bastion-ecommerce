import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './style.scss'

const ProductList = () => {
  return (
    <div className='product-list'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem/>
    </div>
  )
}

export default ProductList