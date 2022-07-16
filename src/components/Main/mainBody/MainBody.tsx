import React from 'react'
import Filter from './Filter/Filter'
import Items from './Items/Items'
import './style.scss'

const MainBody = () => {
  return (
    <div className='main__body'>
          <div className='main__body_container container'>
              <Filter />
              <Items />
          </div>  
    </div>
  )
}

export default MainBody