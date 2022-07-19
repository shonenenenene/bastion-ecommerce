import React, { FC } from 'react'
import TypeItem from '../TypeItem/TypeItem'
import { typesData } from '../../../data'
import './style.scss'

const TypeList:FC = () => {

  return (
    <div className='type-list'>
      {typesData.productTypes.map((el) => {
        return <TypeItem typeId={el.typeId} typeName={el.typeName} />
      }) }
    </div>
  )
}

export default TypeList