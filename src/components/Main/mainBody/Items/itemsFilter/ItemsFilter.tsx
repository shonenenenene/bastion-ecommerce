import React from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import './style.scss'

const ItemsFilter = () => {

  const standarts = useTypedSelector(state => state.productsReducer.products)

  return (
    <div className='items_filter'>
      
    {standarts.map((e) => {
      return <div key={e.productId}><a>{ e.standart }</a></div>
    })}
          
    </div>
      
  )
}

export default ItemsFilter