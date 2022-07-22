import React, { FC, useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './style.scss'

const OrderForm: FC = () => {

  const currentCart = useTypedSelector(state => state.cartReducer.products)
  const sum = currentCart.map((e) => { return e.price * e.count }).reduce((prev, curr) => prev + curr, 0)
  
  const [disabled, setDisabled] = useState(true)
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [userName, setUserName] = useState('')
  const [org, setOrg] = useState('')
  const [validMail, setValidMail] = useState(true)
  const valid = 'valid'

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /[-0-9`~!@#$%^&*()_=+\\|\[\]{};:'",.<>\/?]/
    if (!re.test(String(e.target.value))) setUserName(e.target.value) 
  }

  const mailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
   setMail(e.target.value)
  }

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^\d+(-\d+)*$/
    if ((re.test(String(e.target.value)) || e.target.value === '') && (e.target.value).toString().length <= 11) setPhone(e.target.value)
  }

  const orgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrg(e.target.value)
  }

  useEffect(() => {
    if ((/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(mail))) || mail === '') {
      setValidMail(false)
    } else {
      setValidMail(true)
    }
  }, [mail, validMail])

  useEffect(() => {
    if (mail === ('') ||
      !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(mail))) ||
      phone === ('') ||
      userName === ('') ||
      org === ('')) {
      setDisabled(true)
      } else setDisabled(false)

  }, [mail, phone, userName, org])
  
  const order = () => {
    currentCart.forEach((e) => console.log(`Товар: ${e.productName} в количестве: ${e.count} шт. на сумму: ${e.price * e.count} руб.`))
    console.log(`Итого: ${sum} руб.`)
    console.log(`Клиент: ${userName}. Номер телефона клиента: ${phone}, почта клиента: ${mail}, ООО ${org}`)
  } 
  
  return (
    <div className='order-form'>
      <h3>Заказ</h3>
      <form>
        <p className='cont-info'>Контактная информация</p>

        <div className='full-name'><input onChange={(e) => nameHandler(e)} value={userName}  placeholder='ФИО'/></div>
        <div className='phone'><input onChange={(e) => phoneHandler(e)} value={phone} placeholder='Контактный телефон'/></div>
        <div className={`mail ${validMail && valid}`}><input onChange={(e) => mailHandler(e)} value={mail} placeholder='Email'/></div>
        <div className='org'><input onChange={(e) => orgHandler(e)} value={org} placeholder='Организация' /></div>
        
        <div className='order-total'>
          <div className='result'>
            <p>Итого</p>
            <div className='order-total-price'>{sum} руб.</div>
          </div>
          <button disabled={disabled} onClick={() => order()} type='button'>Оформить заказ</button>
          <div className='order-offer'>Коммерческое предложение</div>
        </div>
      </form>
    </div>
  )
}

export default OrderForm