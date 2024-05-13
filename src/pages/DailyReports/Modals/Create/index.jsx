import React, { useState } from 'react'
import { Button, Divider, Flex, Form, Modal, Select } from 'antd'
import { create } from '@/shared/media'
import { useGetProjectsQuery } from '@/redux/api/projects'
import { useCreateReportMutation } from '@/redux/api/reports'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Controller, useForm } from 'react-hook-form'
import { createReportSchema } from '@/validation'
import { zodResolver } from '@hookform/resolvers/zod'

const Create = ({ modalOpen, setModalOpen }) => {
  const [createReport, { isSuccess }] = useCreateReportMutation()
  const [editorHtml, setEditorHtml] = useState('')
  const { data: projects } = useGetProjectsQuery({
    page: 1,
  })

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(createReportSchema),
  })

  const handleCancel = () => {
    setModalOpen(false)
  }

  const onSubmit = () => {
    createReport(getValues())
    handleCancel()
    reset()
  }

  return (
    <>
      <button
        className='create'
        type='primary'
        onClick={() => setModalOpen(true)}
      >
        <img src={create} alt='create' />
      </button>
      <Modal
        title='Create modal'
        centered
        open={modalOpen}
        onCancel={handleCancel}
        footer={null}
        okButtonProps={{ className: 'create' }}
        okText='Create'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex vertical>
            <Controller
              name='projectId'
              control={control}
              render={({ field }) => (
                <Select
                  placeholder='Projects'
                  options={projects?.content?.map((project) => ({
                    value: project?.project_id,
                    label: project?.name,
                  }))}
                  {...field}
                />
              )}
            />
            {errors.projectId && (
              <span className='error'> {errors.projectId.message}</span>
            )}
            <Divider style={{ margin: '7px' }} />
            <Controller
              name='description'
              control={control}
              render={({ field }) => <ReactQuill theme='snow' {...field} />}
            />
            {errors.description && (
              <span className='error'> {errors.description.message}</span>
            )}
          </Flex>
          <br />
          <Button key='yes' htmlType='submit'>
            Submit
          </Button>
        </form>
      </Modal>
    </>
  )
}

export default Create
