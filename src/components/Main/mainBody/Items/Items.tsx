import React from 'react'
import ItemsFilter from './itemsFilter/ItemsFilter'
import ItemsList from './itemsList/ItemsList'
import './style.scss'

const Items = () => {
    return (
        <section>
            <ItemsFilter />
            <ItemsList/>
        </section>
  )
}

export default Items