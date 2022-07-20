import React, { FC, useState } from 'react'
import ItemsFilter from './itemsFilter/ItemsFilter'
import ItemsList from './itemsList/ItemsList'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import './style.scss'

const Items:FC = () => {

    const itemsList = useTypedSelector(state => state.productsReducer.products)
    const [currentList, setCurrentList] = useState(itemsList)
    console.log(currentList, setCurrentList)
    return (
        <section>
            <ItemsFilter currentList={ currentList } setCurrentList={ setCurrentList } />
            <ItemsList currentList={ currentList } setCurrentList={ setCurrentList }/>
        </section>
  )
}

export default Items