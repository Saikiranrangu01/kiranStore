import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import ExploreMenu from './components/ExpoloreMenu/ExploreMenu'
import AppDownload from './components/AppDownload/AppDownload'
import NoPage from './components/NoPage/NoPage'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return  (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path = '/cart' element={<Cart/>}/>
          <Route path='/order' element = {<PlaceOrder/>}/>

          <Route path='/mobile-app' element = {<AppDownload/>}/>
          <Route path='/contact-us' element = {<Footer/>}/>
          <Route path="*" element={<NoPage/>} />

          
        </Routes>
      </div>
      <Footer/>
    </>
    
  )


  
}

export default App