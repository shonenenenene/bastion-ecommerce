import React, { useState } from 'react'
import './style.scss'
import Slider from '@mui/material/Slider';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IProduct } from '../../../../types';

const Filter = ({items, setItems}: any) => {
  const productList = useTypedSelector(state => state.productsReducer.products)
  const [minInput, setMinInput] = useState(0)
  const [maxInput, setMaxInput] = useState(99999)

  const [currList, setCurrList] = useState(items)

  const [value, setValue] = React.useState<number[]>([7777, 70000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setMinInput(value[0])
    setMaxInput(value[1])
    setItems(currList.filter((item: IProduct) => item.price < maxInput && item.price > minInput))
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItems(items.filter((item: IProduct) => item.typeName === e.target.value))
  }

  const cancelFilters = () => {
    setItems(productList)
  }

  const filtered: IProduct[] = Object.values(items.reduce((acc: IProduct, cur: IProduct) => Object.assign(acc, { [cur.typeName]: cur }), {}))
  
  return (
    <div className='filter'>
          <div className='categ_title'>
            <h5>Категории</h5>
          </div>
          <div className='filter_title'>
            <h5>Фильтры</h5>
          </div>
          <div className='filter_price'>
            <span className='span'>Цена, руб</span>
            <div className='inputs'>
              <span>от </span><input value={minInput} className='min' type='number' />
              <span>до </span><input value={maxInput} className='max' type='number' />
            </div>
            <div className='slider'>
          <Slider
              value={value}
              onChange={handleChange}
              min={0}
              max={99999}
              />
            </div>
          </div>
          <div className='filter_type'>
              <span className='span'>Тип продукта</span>
              <select onChange={e => selectHandler(e)} className='select-type' defaultValue={'default'} >
              <option disabled value='default'>Выберите тип</option>
              {filtered.map((e: IProduct) => {
                return <option key={e.typeId} value={e.typeName}>{ e.typeName }</option>
              })}
              </select>
           </div>
            <div className='cancel-filters'>
              <button onClick={() => cancelFilters()} className='cancel-filters-btn' type='button'>Сбросить фильтры</button>
            </div> 
    </div>
  )
}

export default Filter