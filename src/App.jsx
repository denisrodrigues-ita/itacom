import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './public/Header'
import Footer from './public/Footer'
import Home from './Pages/Home'
import Sector from './Pages/Sector'
import Segment from './Pages/Segment'
import Company from './Pages/Company'
import NotFound from './Pages/NotFound'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className='AppBoddy'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sector' element={<Sector />} />
          <Route path='sector/:segment' element={<Segment />} />
          <Route path='sector/:segment/:company' element={<Company />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App