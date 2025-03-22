import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './MainLayout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { ThemeProvider } from './Provider/Themecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
  <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
  </StrictMode>,
)
