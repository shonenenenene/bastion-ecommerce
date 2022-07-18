import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProductTypes from '../ProductsTypes/ProductTypes';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

import './style.scss';



function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/productstypes' element={<ProductTypes/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
