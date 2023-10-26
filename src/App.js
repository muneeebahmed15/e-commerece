import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Screens/Home'
import Products from './Screens/Products'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/category/:name' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
     
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
