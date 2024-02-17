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

const ProjectsCreateForm = () => (
  <Form
    name='basic'
    labelCol={{
      span: 5,
    }}
    wrapperCol={{
      span: 19,
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

    <Form.Item
      label='Email'
      name='email'
      rules={[
        {
          required: true,
          type: 'email',
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

    <Form.Item label='Roles' name='roles' rules={[{ required: true }]}>
      <Select
        defaultValue='admin'
        options={[
          {
            value: 'admin',
            label: 'admin',
          },
          {
            value: 'head',
            label: 'head',
          },
          {
            value: 'user',
            label: 'user',
          },
        ]}
      >
        {/* <Select.Option value='demo'>Demo</Select.Option> */}
      </Select>
    </Form.Item>
    <Form.Item label='Teams' name='temas' rules={[{ required: true }]}>
      <Select
        defaultValue='Frontend'
        options={[
          {
            value: 'Mobile',
            label: 'Mobile',
          },
          {
            value: 'Frontend',
            label: 'Frontend',
          },
          {
            value: 'Backend',
            label: 'Backend',
          },
        ]}
      ></Select>
    </Form.Item>
    <Form.Item label='Status' name='status' rules={[{ required: true }]}>
      <Select
        defaultValue='active'
        options={[
          {
            value: 'active',
            label: 'active',
          },
          {
            value: 'deactive',
            label: 'deactive',
          },
        ]}
      ></Select>
    </Form.Item>
  </Form>
)
export default ProjectsCreateForm

/**
  4.Projects
4.1 Tabelde Sadece Proyectlerin namesi gorunecek.
4.2 View -- Hissede Project name ve Proyekte daxil olan iscilerin siyahisi gorunecek
4.3 Create- Project name və Employeeleri multi select formada burdan daxil edilcek.
4.4 Edit- Project name və Employeeleri multi select formada burdan daxil edib sile biler.
4.5 Delete- Olmayacaq.
4.6 Filter - Sadece project nameye göre
 */
