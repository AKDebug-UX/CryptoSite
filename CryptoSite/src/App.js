import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './routes/Login';

import Home from './routes/Home'
import Product from './routes/Product'
import Pricing from './routes/Pricing'
import Company from './routes/Company';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/company' element={<Company />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
