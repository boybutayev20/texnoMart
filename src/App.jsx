import React from 'react'
import Header from './components/header/Header'
import ImageCarousel from './components/hero/Hero'
import AutoScrollingCarousel from './components/hero/HeroBottom'
import HeroCategory from './components/hero/HeroCategory'
import NewProducts from './components/ProductsList/NewProducts/NewProducts'
import {Route, Router, Routes } from 'react-router-dom'
import ProductsList from './components/ProductsList/ProductsList'
import ProductDetails from './components/Cart/Cart'
import Home from './components/Home'
import FooterTop from './components/footer/FooterTop./FooterTop'
import Footer from './components/footer/Footer'
import About from './Pages/About/About'
import News from './Pages/News/News'
import Pages from './Pages/Pages'



const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart/:id' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/pages' element={<Pages/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

