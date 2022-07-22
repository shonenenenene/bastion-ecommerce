import React, { FC } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './style.scss'

const ProductList: FC = () => {
  
  const products = useTypedSelector(state => state.productsReducer.products)
  return (
    <div className='product-list'>
      {products.map((e) => {
        return <ProductItem key={e.productId} typeName={e.typeName} productId={e.productId} productName={e.productName} price={e.price} standart={ e.standart } />
      }) }
    </div>
  )
}

export default ProductList