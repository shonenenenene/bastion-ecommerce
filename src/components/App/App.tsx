import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './style.scss';
import ProductTypes from '../ProductsTypes/ProductTypes';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      {/* <Main /> */}
      <ProductTypes/>
      <Footer />
    </div>
  );
}

export default App;
