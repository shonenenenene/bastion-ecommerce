import React from 'react'
import AddProduct from './AddProduct/AddProduct'
import ProductList from './ProductList/ProductList'

import './style.scss'

const Products = () => {
  return (
    <section className='products'>
        <div className='products_container container'>
          <AddProduct />
          <ProductList/>
        </div>
    </section>
  )
}

export default Products