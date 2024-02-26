import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RenderIf from '@/shared/components/RenderIf'

const Home = lazy(() => import('./Home'))
const Employee = lazy(() => import('./Employee'))
const Teams = lazy(() => import('./Teams'))
const Projects = lazy(() => import('./Projects'))
const DailyReports = lazy(() => import('./DailyReports'))
const NotFound = lazy(() => import('./NotFound'))
const ForgotPassword = lazy(() => import('./ForgotPassword'))

const PrivateRoute = ({ user }) => {
  const roleName = user?.role?.roleEnum
  return (
    <RenderIf conditions={!!roleName}>
      <Routes>
        {roleName === 'EMPLOYEE' ? (
          <Route path='/' element={<DailyReports />} />
        ) : (
          <>
            <Route path='/' exact element={<Home />} />
            <Route path='/users' element={<Employee />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/reports' element={<DailyReports />} />
            {/* <Route path='/otp' element={<ForgotPassword />} /> */}
            <Route path='*' element={<NotFound />} />
          </>
        )}
      </Routes>
    </RenderIf>
  )
}

export default PrivateRoute
