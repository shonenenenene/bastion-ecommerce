import React, { FC } from 'react'
import { IProduct } from '../../../../../types'
import ItemsCard from '../itemsCard/ItemsCard'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import './style.scss'

const ItemsList:FC = () => {

  const itemCards = useTypedSelector(state => state.currentItemsReducer.products)

  return (
    <div className='items_list'>
        {itemCards.map((e) => {
        return <ItemsCard key={e.productId} typeName={e.typeName} productId={e.productId} productName={e.productName} price={e.price} standart={ e.standart } />
      }) }
    </div>
  )
}

export default ItemsList