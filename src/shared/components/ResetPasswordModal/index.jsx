import React from 'react'
import { Form, Input, Modal, Select } from 'antd'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const ResetPasswordModal = ({ isOpen, setOpen }) => {
  return (
    <Modal
      title='ResetPassword modal'
      centered
      open={isOpen}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: '100%',
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        validateMessages={validateMessages}
      >
        <Form.Item
          label='New Password'
          name='newPassword'
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
          label='Repeat Password'
          name='repeatedPassword'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ResetPasswordModal
