import React from 'react'
import { Link } from 'react-router-dom'
import './top.scss'


const Top = () => {
  return (
    <nav className='header__top'>
        <div className='top_container container'>
            <ul className='top_list'>
                <li className='top_item'><Link to="/">Главная</Link></li>
                <li className='top_item'><Link to="/productstypes">Типы продуктов</Link></li>
                <li className='top_item'><Link to="/products">Продукты</Link></li>
                <li className='top_item'>Гарантии</li>
                <li className='top_item'>Контакты</li>
            </ul>
            <div className='top_contacts'>
            <div className='call'> 
            +7 (499) 380-78-90
            </div>
            <div className='location'>
            Москва
            </div>
            <div className='mail'>
            info@bastion.pro
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Top