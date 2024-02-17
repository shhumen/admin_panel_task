import { Button, Drawer, Modal } from 'antd'
import React, { useState } from 'react'
import filter from '@/shared/media/imgs/filter.svg'
import styles from './style.module.scss'
import { Form, Input, Select } from 'antd'
import { validateMessages } from '@/validation'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const Filter = ({ modal1Open, setModal1Open }) => {
  return (
    <>
      <button
        className={styles.filter_btn}
        type='primary'
        onClick={() => setModal1Open(true)}
      >
        <img src={filter} alt='filter' />
      </button>
      <Drawer
        title='Filter modal'
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onClose={() => setModal1Open(false)}
        okButtonProps={{ className: 'filter' }}
        okText='Filter'
      >
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
          <Form.Item
            label='Projects'
            name='projects'
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
                { value: 'Plast', label: 'Plast' },
                { value: 'Furniro', label: 'Furniro' },
                { value: 'Dashboard X', label: 'Dashboard X' },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <button className='filter_btn'>Filter</button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default Filter
