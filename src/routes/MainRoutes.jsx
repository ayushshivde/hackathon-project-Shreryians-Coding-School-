import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'

import Shop from '../pages/Shop'
import ScrollToTop from '../components/globalComp/ScrollToTop'
import Product from '../pages/Product'
const MainRoutes = () => {
  return (
<>

<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
 
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/productinfo/:id" element={<Product/>}></Route>
    
</Routes>
</>
  )
}

export default MainRoutes