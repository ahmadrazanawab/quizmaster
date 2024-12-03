import React from 'react'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element:<><Navbar/><Home/></>
        },
        {
            path: '/about',
            element:<><Navbar/><About/></>
        },
        
    ])
  return (
    <div>
          <RouterProvider router={router}/>
    </div>
  )
}

export default App
