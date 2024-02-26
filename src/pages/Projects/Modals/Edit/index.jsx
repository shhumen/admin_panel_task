import React from 'react'
// import EditModal from '@/shared/components/EditModal'
import { Form, Input, Modal, Select } from 'antd'
import { validateMessages } from '@/validation'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

function Edit({ isOpen, setOpen }) {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <Form
        name='basic'
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
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
          label='Project Name'
          name='projectName'
          rules={[
            {
              required: true,
              message: 'Please input your project name!',
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
    </Modal>
  )
}

export default Edit
