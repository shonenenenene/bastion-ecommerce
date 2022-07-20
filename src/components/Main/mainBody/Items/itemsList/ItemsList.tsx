import React from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import ItemsCard from '../itemsCard/ItemsCard'
import './style.scss'

const ItemsList = () => {

  const productItem = useTypedSelector(state => state.productsReducer.products)

  return (
    <div className='items_list'>
        {productItem.map((e) => {
        return <ItemsCard key={e.productId} typeName={e.typeName} productId={e.productId} productName={e.productName} price={e.price} standart={ e.standart } />
      }) }
    </div>
  )
}

export default ItemsList