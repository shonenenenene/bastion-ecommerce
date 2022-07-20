import React from 'react'
import { IProduct, IProductsState} from '../../../../../types'
import './style.scss'

const ItemsFilter = ({ currentList, setCurrentList }: any) => {

  const standartFilter = (e: React.MouseEvent) => {
    e.preventDefault()
    const filtered = currentList.filter((el: IProduct) => el.standart === el.standart)
    setCurrentList(filtered)
    console.log(filtered)
  }

  return (
    <div className='items_filter'>
      
    {currentList.map((e:IProduct) => {
      return <label key={e.productId}>
        <input type='checkbox' id={e.standart} />
        <span>{e.standart}</span>
      </label>
      
    })}
          
    </div>
      
  )
}

export default ItemsFilter