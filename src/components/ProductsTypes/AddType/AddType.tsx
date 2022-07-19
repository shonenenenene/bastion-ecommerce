import React from 'react'
import { typesData } from '../../../data'
import './style.scss'

const AddType = () => {

  const addType = () => {

  }


  return (
    <div className='add-type'>
          <form>
              <input id='name' type="text" placeholder='Введите имя типа'/>
              <input id='id' type="number" placeholder='Введите id типа'/>
              <button onClick={() => addType()} type='button'>Добавить тип</button>
          </form>
    </div>
  )
}

export default AddType