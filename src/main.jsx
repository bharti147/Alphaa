import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/about',
        element:<About/>
      }
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)