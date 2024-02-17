import React from 'react'
import { Form, Input, Select } from 'antd'

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

const TeamsEditForm = () => (
  <Form
    name='basic'
    labelCol={{
      span: 6,
    }}
    wrapperCol={{
      span: 18,
    }}
    // style={{
    //   maxWidth: 600,
    // }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete='off'
    validateMessages={validateMessages}
  >
    <Form.Item
      label='Team Name'
      name='Team Name'
      rules={[
        {
          required: true,
          message: 'Please input your Team name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label='Employees' name='status' rules={[{ required: true }]}>
      <Select
        mode='multiple'
        allowClear
        style={{
          width: '100%',
        }}
        placeholder='Please select'
        // defaultValue={['a10', 'c12']}
        // onChange={handleChange}
        options={[
          { value: 'John', label: 'John' },
          { value: 'Xender', label: 'Xender' },
          { value: 'Denver', label: 'Denver' },
          { value: 'Anakin', label: 'Anakin' },
          { value: 'Alex', label: 'Alex' },
        ]}
      />
    </Form.Item>
  </Form>
)
export default TeamsEditForm
