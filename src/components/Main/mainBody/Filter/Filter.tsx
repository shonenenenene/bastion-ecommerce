import React, { useState } from 'react'
import './style.scss'
import Slider from '@mui/material/Slider';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IProduct } from '../../../../types';

const Filter = ({items, setItems}: any) => {

  const [minInput, setMinInput] = useState(0)
  const [maxInput, setMaxInput] = useState(99999)
  const [select, setSelect] = useState('default')
  const [value, setValue] = React.useState<number[]>([7777, 70000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setMinInput(value[0])
    setMaxInput(value[1])
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value)
    setItems(items.filter((item: IProduct) => item.typeName === e.target.value))
    
  }

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
              <select onChange={e => selectHandler(e)} className='select-type' value={select}>
              <option selected disabled value='default'>Выберите тип</option>
              {items.map((e: IProduct) => {
                return <option key={e.typeId} value={e.typeName}>{ e.typeName }</option>
              })}
              </select>
           </div>
            <div className='cancel-filters'>
              <button className='cancel-filters-btn' type='button'>Сбросить фильтры</button>
            </div> 
    </div>
  )
}

export default Filter