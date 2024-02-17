import React from 'react'
import { Form, Input, Modal, Select } from 'antd'
import { validateMessages } from '@/validation'
import create from '@/shared/media/imgs/create.svg'

export const Create = ({ modal2Open, setModal2Open }) => {
  return (
    <>
      <button
        className='create'
        type='primary'
        onClick={() => setModal2Open(true)}
      >
        <img src={create} alt='filter' />
      </button>
      <Modal
        title='Create modal'
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{ className: 'filter' }}
        okText='Create'
      >
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
          autoComplete='off'
          validateMessages={validateMessages}
        >
          <Form.Item
            label='Team Name'
            name='teamName'
            rules={[
              {
                required: true,
                message: 'Please input your project name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Employees'
            name='status'
            rules={[{ required: true }]}
          >
            <Select
              mode='multiple'
              allowClear
              style={{
                width: '100%',
              }}
              placeholder='Please select'
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
    </>
  )
}
