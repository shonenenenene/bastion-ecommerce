import React from 'react'
import AddType from './AddType/AddType'
import TypeList from './TypeList/TypeList'
import './style.scss'

const ProductTypes = () => {
  return (
    <div className='product-types'>
          <div className='product-types_container container'>
              <AddType />
              <TypeList />
          </div> 
    </div>
  )
}

export default ProductTypes