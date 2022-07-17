import React from 'react'
import './style.scss'

const AddType = () => {
  return (
    <div className='add-type'>
          <form>
              <input type="text" placeholder='Введите имя типа'/>
              <input type="number" placeholder='Введите id типа'/>
              <button>Добавить тип</button>
          </form>
    </div>
  )
}

export default AddType