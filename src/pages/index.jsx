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

const fake_auth = false

const Router = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const [collapsed, setCollapsed] = useState(false)
  const [themes, setThemes] = useState('DARK')
  return (
    <Auxiliary theme={themes}>
      {isAuthenticated ? (
        <>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout>
            <Header_
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              themes={themes}
              setThemes={setThemes}
            />
            <PrivateRoute />
          </Layout>
        </>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/otp' element={<ForgotPassword />} />
          </Routes>
        </>
      )}
    </Auxiliary>
  )
}

export default Router
