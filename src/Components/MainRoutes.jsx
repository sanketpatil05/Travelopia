import React from 'react'
import{Routes, Route} from "react-router-dom"
import { Home } from '../Pages/Home'
import Show from '../Pages/Show'
export const MainRoutes = () => {
  return (
    <div>
    
    <Routes>
        

    <Route path='/' element={<Home/>} />

    <Route path='/show' element={<Show/>} />

 

  <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>

    </div>
  )
}
