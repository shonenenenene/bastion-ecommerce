import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { productsData } from '../../../../../data'
import { TypeActions } from '../../../../../store/actions'
import { IProduct, IProductsState } from '../../../../../types'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import './style.scss'

const StandartToggle = ({standart, items, setItems}: any) => {

    const [checked, setChecked] = useState(false)
    const currItems = useTypedSelector(state => state.productsReducer.products)

    const checkHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setChecked(e.target.checked)
        if (e.target.checked === true) {
            const filters = items.filter((item: IProduct) => item.standart === e.target.id)
            setItems(filters)
        } else setItems(currItems)
    }

  return (
    <label>
        <input type='checkbox' onChange={(e) => checkHandler(e)} id={standart}  checked={checked}  />
        <span>{standart}</span>
    </label>
    
  )
}

export default StandartToggle