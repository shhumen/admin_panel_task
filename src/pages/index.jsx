import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'
import PrivateRoute from './PrivateRouter'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Sidebar from '@/shared/layout/Sidebar'
import RenderIf from '@/shared/components/RenderIf'
import Header_ from '@/shared/layout/Header'
import Auxiliary from '@/shared/modules/Auxiliary'

const Router = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [themes, setThemes] = useState('DARK')

  const { user } = useSelector((state) => state.auth)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return (
    <Auxiliary theme={themes}>
      <RenderIf conditions={isAuthenticated}>
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
      </RenderIf>
      <RenderIf conditions={!isAuthenticated}>
        <Routes>
          <Route
            path='/'
            element={
              <Login user={user} themes={themes} setThemes={setThemes} />
            }
          />
          <Route path='/otp' element={<ForgotPassword />} />
        </Routes>
      </RenderIf>
    </Auxiliary>
  )
}

export default Router
