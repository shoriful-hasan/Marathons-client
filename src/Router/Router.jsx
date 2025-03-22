import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Errorpage from '../components/Errorpage'
import Home from '../Home/Home'
import Marathon from '../Marathons/Marathon'
import Dashboard from '../Dashboard/Dashboard'

const router = createBrowserRouter([
{
    path : '/',
    element : <MainLayout></MainLayout>,
    errorElement : <Errorpage></Errorpage>,
    children : [
  {
    path : '/',
    element : <Home></Home>
  },
  {
    path : 'marathons',
    element : <Marathon></Marathon>
  },
  {
    path : 'dashboard',
    element : <Dashboard></Dashboard>
  }
    ]
}
])

export default router