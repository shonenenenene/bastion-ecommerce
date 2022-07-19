import React from 'react'
import { IProductType } from '../../../types'
import './style.scss'


const TypeItem = ({typeId, typeName}: IProductType) => {

  return (
    <div className='type-item'>
        <div className='type-item-name'>{ typeName }</div>  
      <div className='type-item-id'>{typeId}</div>  
    </div>
  )
}

export default TypeItem