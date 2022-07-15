import React, {FC} from 'react'
import './body.scss'

const Body:FC = () => {
  return (
    <div className='header__body'>
        <div className='header__body_container container'>
              <img className='logo' src='./img/logo.svg'/>
              <div className='h'>Производитель металлических изделий №1</div>
              <div className='catalog'>Каталог</div>
              <div className='input'>
                  <input placeholder='Поиск по названию...'/>
              </div>
              <div className='fav-cart'>
                  <a className='fav'>Избранное</a>
                  <a className='cart'>Корзина</a>
              </div>
        </div>
    </div>
  )
}

export default Body