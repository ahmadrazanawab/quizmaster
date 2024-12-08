import React from 'react'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ContextProvider from './context/ContextProvider'


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
       <ContextProvider>
        <RouterProvider router={router} />
        </ContextProvider> 
    </div>
  )
}

export default App
