import React from 'react';
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
      {/* <Main /> */}
      {/* <ProductTypes/> */}
      {/* <Products/> */}
      <Cart/>
      <Footer />
    </div>
  );
}

export default App;
