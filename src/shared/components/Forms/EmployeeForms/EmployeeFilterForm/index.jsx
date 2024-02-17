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

const EmployeeFilterForm = () => (
  <Form
    className='filter'
    name='basic'
    labelCol={{
      span: 5,
    }}
    wrapperCol={{
      span: 19,
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
      label='Firstname'
      name='firstname'
      rules={[
        {
          required: true,
          message: 'Please input your firstname!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label='Lastname'
      name='lastname'
      rules={[
        {
          required: true,
          message: 'Please input your lastname!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label='Teams' name='teams' rules={[{ required: true }]}>
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
          { value: 'Mobile', label: 'Mobile' },
          { value: 'Frontend', label: 'Frontend' },
          { value: 'Backend', label: 'Backend' },
        ]}
      />
    </Form.Item>
    <Form.Item label='Projects' name='projects' rules={[{ required: true }]}>
      <Select
        mode='multiple'
        allowClear
        style={{
          width: '100%',
        }}
        placeholder='Please select'
        options={[
          { value: 'Plast', label: 'Plast' },
          { value: 'Furniro', label: 'Furniro' },
          { value: 'Dashboard X', label: 'Dashboard X' },
        ]}
      />
    </Form.Item>
  </Form>
)
export default EmployeeFilterForm
