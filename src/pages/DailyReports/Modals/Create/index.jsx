import React, { useState } from 'react'
import { Form, Modal, Select } from 'antd'
import create from '@/shared/media/imgs/create.svg'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Create = ({ modal2Open, setModal2Open }) => {
  const [editorHtml, setEditorHtml] = useState('')

  const handleChange = (html) => {
    setEditorHtml(html)
  }
  return (
    <>
      <button
        className='create'
        type='primary'
        onClick={() => setModal2Open(true)}
      >
        <img src={create} alt='create' />
      </button>
      <Modal
        title='Create modal'
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{ className: 'create' }}
        okText='Create'
      >
        <Form>
          <Form.Item
            label='Projects'
            name='projects'
            rules={[{ required: true }]}
          >
            <Select
              initialvalues='Plast'
              options={[
                {
                  value: 'Furniro',
                  label: 'Furniro',
                },
                {
                  value: 'Plast',
                  label: 'Plast',
                },
                {
                  value: 'Dashboard',
                  label: 'Dashboard',
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item>
            <ReactQuill
              theme='snow'
              value={editorHtml}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Create
