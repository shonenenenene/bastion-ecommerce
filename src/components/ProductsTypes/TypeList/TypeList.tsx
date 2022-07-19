import React, { FC } from 'react'
import TypeItem from '../TypeItem/TypeItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './style.scss'

const TypeList: FC = () => {
  
  const productTypes = useTypedSelector(state => state.typesReducer.productTypes)
  console.log(productTypes)

  return (
    <div className='type-list'>
      {productTypes.map((e) => {
        return <TypeItem key={e.typeId} typeId={e.typeId} typeName={e.typeName} />
      }) }
    </div>
  )
}

export default TypeList