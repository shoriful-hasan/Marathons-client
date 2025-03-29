import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Errorpage from '../components/Errorpage'
import Home from '../Home/Home'
import Marathon from '../Marathons/Marathon'
import Dashboard from '../Dashboard/Dashboard'
import Addmarathons from '../components/Addmarathons'
import MymarathonList from '../components/MymarathonList'
import MyApply from '../components/MyApply'
import MarathonDetails from '../components/MarathonDetails'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
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
    path : '/marathons',
    element : <Marathon></Marathon>
  },
  {
    path : '/dashboard',
    element : <Dashboard></Dashboard>,
    children : [
      {
        path : 'Addmarathons',
        element : <Addmarathons></Addmarathons>
      },
      {
        path : 'MymarathonsList',
        element : <MymarathonList></MymarathonList>
      },
      {
        path : 'MyApplyList',
        element : <MyApply></MyApply>
      }
    ]
  },
  {
path : '/Details/:id',
element : <MarathonDetails></MarathonDetails>
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/Register',
    element : <Register></Register> 
  }
    ]
}
])

export default router