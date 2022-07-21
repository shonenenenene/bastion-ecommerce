import React, { FC, useState } from 'react'
import ItemsFilter from './itemsFilter/ItemsFilter'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import ItemsList from './itemsList/ItemsList'
import './style.scss'

const Items:FC = () => {
    const currItems = useTypedSelector(state => state.productsReducer.products)
    const [items, setItems] = useState(currItems)
    return (
        <section>
            <ItemsFilter  items={items} setItems={setItems}/>
            <ItemsList items={items} setItems={setItems}/>
        </section>
  )
}

export default Items