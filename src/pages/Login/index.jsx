import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import styles from './style.module.scss'
import { Typography } from 'antd'
const { Title } = Typography

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles.Login}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Form
            name='basic'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={
              {
                // maxWidth: 600,
              }
            }
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Title style={{ color: '#000' }} level={3}>
              Sign in
            </Title>
            <Form.Item
              label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='remember'
              valuePropName='checked'
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type='primary-dark' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={styles.Layout}></div>
        </Col>
      </Row>
    </div>
  )
}

export default Login
