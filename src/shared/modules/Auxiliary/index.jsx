import React, { useEffect } from 'react'
import { Layout } from 'antd'

const Auxiliary = ({ children, theme }) => {
  useEffect(() => {
    document.body.setAttribute('theme', theme)
  }, [theme])
  return <Layout theme={theme}>{children}</Layout>
}
export default Auxiliary
