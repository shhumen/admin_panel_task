import { useState } from 'react'
import PrivateRoute from './pages/PrivateRouter'
import Header_ from './shared/layout/Header'
import Sidebar from './shared/layout/Sidebar'
import { Button, ConfigProvider, Layout } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='app'>
      <Layout>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#fff',
                borderRadius: 2,
                colorBgContainer: '#fff',
              },
            }}
          >
            <Header style={{ padding: '0' }}>
              <Button
                type='primary'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  color: '#000',
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
          </ConfigProvider>
          {/* <Header_ collapsed={collapsed} setCollapsed={setCollapsed} /> */}
          <PrivateRoute />
        </Layout>
      </Layout>
    </div>
  )
}

export default App

{
  /* <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout> */
}
