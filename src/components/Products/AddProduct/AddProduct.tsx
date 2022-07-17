import React from 'react'
import './style.scss'

const AddProduct = () => {
  return (
    <div className='add-product'>
          <form>
              <input type="number" className='product-id' placeholder='id'/>
              <input className='product-name' placeholder='Название'/>
              <select className='select-type'>
                  <option selected disabled>Выберите тип</option>
                  <option>wer2</option>
                  <option>423qw</option>
                  <option>234tw</option>
              </select>
              <input type="number" className='price' placeholder='Цена'/>
              <input className='standart' placeholder='ГОСТ'/>
              <button className='add-product-btn'>Добавить продукт</button>
          </form>
    </div>
  )
}

export default AddProduct