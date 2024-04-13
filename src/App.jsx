import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Catalog } from "./pages/Catalog/Catalog"
import { About } from "./pages/About/About"
import { Routes, Route } from 'react-router-dom'
import {SPP} from './pages/SPP/SPP'


function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path={'/catalog/catalog-elem/:id'} element={<SPP />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
