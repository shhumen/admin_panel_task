import React from 'react'
import { Button, Form, Input, Modal } from 'antd'
const ChangePassword = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        title='Change Password'
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        okText='Change'
        okButtonProps={{
          className: 'change-password',
        }}
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
            maxWidth: 600,
          }}
          autoComplete='off'
        >
          <Form.Item
            label='Current Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your current password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label='New Password'
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
            label='Repeate Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please repeate password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default ChangePassword
