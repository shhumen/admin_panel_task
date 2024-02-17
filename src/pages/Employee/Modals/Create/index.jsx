import { Modal } from 'antd'
import { Form, Input, Select } from 'antd'
import create from '@/shared/media/imgs/create.svg'
import { validateMessages } from '@/validation'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const Create = ({ modal2Open, setModal2Open }) => {
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
            ></Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Create
