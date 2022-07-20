import React, { FC } from 'react'
import { IProduct } from '../../../../../types'
import ItemsCard from '../itemsCard/ItemsCard'
import './style.scss'

const ItemsList = ({ currentList, setCurrentList }: any) => {


  return (
    <div className='items_list'>
        {currentList.map((e:IProduct) => {
        return <ItemsCard key={e.productId} typeName={e.typeName} productId={e.productId} productName={e.productName} price={e.price} standart={ e.standart } />
      }) }
    </div>
  )
}

export default ItemsList