import React from 'react'
import './style.scss'

const ItemsCard = () => {
  return (
    <div className='items_card'>
          <div className='bonuses'>
              <div className='hit'>хит</div>
              <div className='sale'>скидка</div>
              <div className='stock'>акция</div>
          </div>
          <div className='card-img'>
            <img src='./img/woman.png'/> 
          </div>
          <div className='standart'>gdf-5343g</div>
          <h3>Опора тавровая хомутовая ТХ</h3>
          <p className='item-price'>777</p>
    </div>
  )
}

export default ItemsCard