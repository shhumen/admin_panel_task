import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
// import ForgotPassword from './ForgotPassword'

const Home = lazy(() => import('./Home'))
const Employee = lazy(() => import('./Employee'))
const Teams = lazy(() => import('./Teams'))
const Projects = lazy(() => import('./Projects'))
const DailyReports = lazy(() => import('./DailyReports'))
const NotFound = lazy(() => import('./NotFound'))
const ForgotPassword = lazy(() => import('./ForgotPassword'))

const PrivateRoute = () => {
  const userRole = useSelector((state) => state.auth.user.role)

  console.log(userRole)

  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/users' element={<Employee />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/reports' element={<DailyReports />} />
      {/* <Route path='/otp' element={<ForgotPassword />} /> */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default PrivateRoute
