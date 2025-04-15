import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import './App.css';
import Footer from './Pages/Footer'


const App = () => {
  return (
    <div className="bg-[url('src/assets/image.jpg')] bg-cover bg-center h-screen bg-gray-500">
      <Navbar/>
   
     

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>

    
    <Footer/>
    </div>
  )
}

export default App