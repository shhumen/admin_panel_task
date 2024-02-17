import React from 'react'
import filter from '@/shared/media/imgs/filter.svg'
import { Drawer, Form, Input } from 'antd'
import { validateMessages } from '@/validation'
function Filter({ modal1Open, setModal1Open }) {
  return (
    <>
      <button
        className='filter_btn'
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
          autoComplete='off'
          validateMessages={validateMessages}
        >
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default Filter
