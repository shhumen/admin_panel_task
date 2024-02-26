import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import PrivateRoute from './PrivateRouter'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Sidebar from '@/shared/layout/Sidebar'
import Header_ from '@/shared/layout/Header'
import Auxiliary from '@/shared/modules/Auxiliary'
import { useSelector } from 'react-redux'

const Router = () => {
  const { user } = useSelector((state) => state.auth)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const [collapsed, setCollapsed] = useState(false)
  const [themes, setThemes] = useState('DARK')
  return (
    <Auxiliary theme={themes}>
      {isAuthenticated ? (
        <>
          <Sidebar
            collapsed={collapsed}
            user={user}
            setCollapsed={setCollapsed}
          />
          <Layout>
            <Header_
              user={user}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              themes={themes}
              setThemes={setThemes}
            />
            <PrivateRoute user={user} />
          </Layout>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path='/'
              element={<Login themes={themes} setThemes={setThemes} />}
            />
            <Route path='/otp' element={<ForgotPassword />} />
          </Routes>
        </>
      )}
    </Auxiliary>
  )
}

export default Router
