import React from 'react'
import ItemsCard from '../itemsCard/ItemsCard'
import './style.scss'

const ItemsList = () => {
  return (
    <div className='items_list'>
          <ItemsCard />
          <ItemsCard /> 
          <ItemsCard /> 
          <ItemsCard /> 
          <ItemsCard/>  
          <ItemsCard/> 
          <ItemsCard /> 
          <ItemsCard /> 
          <ItemsCard />  
    </div>
  )
}

export default ItemsList