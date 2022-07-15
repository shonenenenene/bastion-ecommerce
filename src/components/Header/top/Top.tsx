import React from 'react'
import './top.scss'


const Top = () => {
  return (
    <nav className='header__top'>
        <div className='top_container container'>
            <ul className='top_list'>
                <li className='top_item'>Типы продуктов</li>
                <li className='top_item'>Продукты</li>
                <li className='top_item'>Выгоды для вас</li>
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