import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './MainLayout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import router from './Router/Router.jsx'
import { ThemeProvider } from './Provider/Themecontext.jsx'
import Authprovider from './Provider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Authprovider
AuthData={
  <ThemeProvider>
  <RouterProvider router={router}/>
  <Toaster position='top-right' reverseOrder={false} />
  </ThemeProvider>
}

>

</Authprovider>
    
   
  </StrictMode>,
)
