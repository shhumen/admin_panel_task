import { Form, Input, Modal, Select } from 'antd'
import React from 'react'
import { validateMessages } from '@/validation'

const Edit = ({ isOpen, setOpen }) => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      title='Edit modal'
      centered
      open={isOpen}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      okButtonProps={{ className: 'edit' }}
      okText='Edit'
    >
      <Form
        name='basic'
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 19,
        }}
        initialvalues={{
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
            initialvalues='admin'
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
          ></Select>
        </Form.Item>
        <Form.Item label='Teams' name='temas' rules={[{ required: true }]}>
          <Select
            initialvalues='Frontend'
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
            initialvalues='active'
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
    </Modal>
  )
}

export default Edit
