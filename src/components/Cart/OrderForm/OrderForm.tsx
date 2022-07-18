import React from 'react'
import './style.scss'

const OrderForm = () => {
  return (
    <div className='order-form'>
      <h3>Заказ</h3>
      <form>
        <p className='cont-info'>Контактная информация</p>

        <div className='full-name'><input  placeholder='ФИО'/></div>
        <div className='phone'><input placeholder='Контактный телефон'/></div>
        <div className='mail'><input placeholder='Email'/></div>
        <div className='org'><input placeholder='Организация' /></div>
        
        <div className='order-total'>
          <div className='result'>
            <p>Итого</p>
            <div className='order-total-price'>777000</div>
          </div>
          <button>Оформить заказ</button>
          <div className='order-offer'>Коммерческое предложение</div>
        </div>
      </form>
    </div>
  )
}

export default OrderForm