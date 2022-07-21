import React, { FC } from 'react'
import { IProduct } from '../../../../../types'
import ItemsCard from '../itemsCard/ItemsCard'
import './style.scss'

const ItemsList = ({items, setItems}: any) => {

  

  return (
    <div className='items_list'>
        {items.map((e: IProduct) => {
        return <ItemsCard key={e.productId} typeId={e.typeId} typeName={e.typeName} productId={e.productId} productName={e.productName} price={e.price} standart={ e.standart } />
      }) }
    </div>
  )
}

export default ItemsList