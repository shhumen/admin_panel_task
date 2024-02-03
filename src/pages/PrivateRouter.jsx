import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Teams from './Teams'
// import NotFound from './NotFound'
// import Projects from './Projects'

const Home = lazy(() => import('./Home'))
const Employee = lazy(() => import('./Employee'))
const Teams = lazy(() => import('./Teams'))
const Projects = lazy(() => import('./Projects'))
const NotFound = lazy(() => import('./NotFound'))

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/users' element={<Employee />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default PrivateRoute

// // =======================================================================================================

// // const isAuthenticated = /* Your authentication logic goes here */ true
// //  <Routes>
// //         <Route path="/login" element={<Login />} />
// //         <PrivateRoute path="/" element={<Home />} isAuthenticated={isAuthenticated} />
// //         <PrivateRoute path="/reports" element={<Reports />} isAuthenticated={isAuthenticated} />
// //         <PrivateRoute
// //           path="/reports/edit/:id"
// //           element={<EditReport />}
// //           isAuthenticated={isAuthenticated}
// //         />
// //         <PrivateRoute path="/team" element={<TeamPage />} isAuthenticated={isAuthenticated} />
// //         <PrivateRoute path="/projects" element={<Projects />} isAuthenticated={isAuthenticated} />
// //         <PrivateRoute path="/users" element={<Users />} isAuthenticated={isAuthenticated} />
// //         <PrivateRoute path="/admin" element={<Admin />} isAuthenticated={isAuthenticated} />
// //         <PrivateRoute path="/superadmin" element={<SuperAdmin />} isAuthenticated={isAuthenticated} />
// //</Routes>
