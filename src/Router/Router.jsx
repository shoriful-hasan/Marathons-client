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
import Privatecompo from '../Private/Privatecompo'
import MarathonReg from '../components/MarathonReg'
import Updatemarathon from '../components/Updatemarathon'

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
        element : <Privatecompo><Addmarathons></Addmarathons></Privatecompo>
      },
      {
        path : 'MymarathonsList',
        element : <Privatecompo> <MymarathonList></MymarathonList></Privatecompo>
      },
      {
        path : 'MyApplyList',
        element : <Privatecompo><MyApply></MyApply></Privatecompo>
      }
    ]
  },
  {
path : '/Details/:id',
element : <Privatecompo><MarathonDetails></MarathonDetails></Privatecompo>
  },
  {
    path    : '/updatemarathon/:id',
    element : <Privatecompo><Updatemarathon></Updatemarathon></Privatecompo>
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/Register',
    element : <Register></Register> 
  },
  {
    path : '/marathonReg',
    element : <MarathonReg></MarathonReg>
  }
    ]
}
])

export default router