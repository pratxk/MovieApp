import React from 'react'
import Navbar from '../Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from '../../Pages/Home'
import Footer from '../Footer/Footer'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default AllRoutes
