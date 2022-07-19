import React, { FC } from 'react'
import TypeItem from '../TypeItem/TypeItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './style.scss'

const TypeList: FC = () => {
  
  const productTypes = useTypedSelector(state => state.typesReducer.productTypes)
  console.log(productTypes)

  return (
    <div className='type-list'>
      {productTypes.map((el) => {
        return <TypeItem key={el.typeId} typeId={el.typeId} typeName={el.typeName} />
      }) }
    </div>
  )
}

export default TypeList