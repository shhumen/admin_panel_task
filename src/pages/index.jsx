import { useState } from 'react'
import { ConfigProvider, Layout } from 'antd'
import Sidebar from '../shared/layout/Sidebar'
import Header_ from '../shared/layout/Header'
import PrivateRoute from './PrivateRouter'
import Login from './Login'

const fake_auth = true

const Router = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    // <ConfigProvider
    // // theme={{
    // //   token: {
    // //     colorBgContainer: 'red',
    // //   },
    // // }}
    // >
    <Layout>
      {fake_auth ? (
        <>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout>
            <Header_ collapsed={collapsed} setCollapsed={setCollapsed} />
            <PrivateRoute />
          </Layout>
        </>
      ) : (
        <Login />
      )}
    </Layout>
    // </ConfigProvider>
  )
}

export default Router
