import React, { FC, useState } from 'react'
import { IProduct, IProductsState } from '../../../../../types'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import './style.scss'

const ItemsFilter:FC = () => {

  const items = useTypedSelector(state => state.currentItemsReducer.products)
  const [checked, setChecked] = useState(
    new Array(items.length).fill(false)
  )

  const checkHandler = ( i:number): void => {
    const updatedCheckedState = checked.map((item, index) =>
      index === i ? !item : item
    )
    setChecked(updatedCheckedState);
  }


  return (
    <div className='items_filter'>
      
      {items.map((e, i) => {
      return <label key={e.standart}>
        <input type='checkbox' onChange={(e) => checkHandler(i)} name={i.toString()}  checked={checked[i]}  />
        <span>{e.standart}</span>
      </label>
      
    })}
          
    </div>
      
  )
}

export default ItemsFilter