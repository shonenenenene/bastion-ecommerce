import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './body.scss'

const Body: FC = () => {

  const cartCounter = useTypedSelector(state => state.cartReducer.products)

  return (
    <div className='header__body'>
        <div className='header__body_container container'>
              <div className='logo-and-friends'>
                <img className='logo' src='./img/logo.svg'/>
                <div className='h'>Производитель металлических изделий №1</div>
                <div className='catalog'>Каталог</div>
              </div>
              <div className='input'>
                  <input placeholder='Поиск по названию...'/>
              </div>
              <div className='fav-cart'>
                  <button className='fav'>Избранное</button>
                  <Link className='link' to="/cart">
            <button className='cart'><div className='cart-counter'>{ cartCounter.length }</div>Корзина</button>
                </Link>
              </div>
        </div>
    </div>
  )
}

export default Body