import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Employee = lazy(() => import('./Employee'))

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/users' element={<Employee />} />
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
