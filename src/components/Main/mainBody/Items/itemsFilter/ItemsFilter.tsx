import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TypeActions } from '../../../../../store/actions'
import { IProduct, IProductsState } from '../../../../../types'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import StandartToggle from './StandartToggle'
import './style.scss'

const ItemsFilter = ({ items, setItems }: any) => {
  
  const currItems = useTypedSelector(state => state.productsReducer.products)

  return (
    <div className='items_filter'>
      {currItems.map((e) => {
        return <StandartToggle key={e.standart}  standart= {e.standart} items={items} setItems={setItems}/>
      })} 
    </div>
      
  )
}

export default ItemsFilter