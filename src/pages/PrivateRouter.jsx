import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RenderIf from '@/shared/components/RenderIf'

const Home = lazy(() => import('./Home'))
const Employee = lazy(() => import('./Employee'))
const Teams = lazy(() => import('./Teams'))
const Projects = lazy(() => import('./Projects'))
const DailyReports = lazy(() => import('./DailyReports'))
const NotFound = lazy(() => import('./NotFound'))
const Profile = lazy(() => import('./Profile'))

const PrivateRoute = ({ user }) => {
  const roleName = user?.role?.roleEnum
  return (
    <RenderIf conditions={!!roleName}>
      <Routes>
        {roleName === 'EMPLOYEE' ? (
          <>
            <Route path='/profile' element={<Profile user={user} />} />
            <Route path='/' element={<DailyReports role={roleName} />} />
          </>
        ) : (
          <>
            <Route path='/' exact element={<Home />} />
            <Route path='/users' element={<Employee role={roleName} />} />
            <Route path='/teams' element={<Teams role={roleName} />} />
            <Route path='/projects' element={<Projects role={roleName} />} />
            <Route path='/reports' element={<DailyReports role={roleName} />} />
            <Route path='/profile' element={<Profile user={user} />} />
            <Route path='*' element={<NotFound />} />
          </>
        )}
      </Routes>
    </RenderIf>
  )
}

export default PrivateRoute
