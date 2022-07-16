import React from 'react'
import './style.scss'

const MainHead = () => {
  return (
      <div className='main__head'>
          <div className='main__head_contaienr container'>
              <div className='main_nav'>
                    <div className='branch'>
                        <span>Главная</span>
                        <span>Интернет-магазин</span>
                        <span>Продукты</span>
                    </div>
                  <div className='curr'>Продукты</div>
              </div>
                <div className='view_bar'>
                    <div className='main_sort'>Сначала популярные</div>
                    <div className='view'>
                        <div className='view_cards'></div>
                        <div className='view_list'></div>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default MainHead