import React from 'react'
import { Button, Flex, Input, Modal, Select } from 'antd'
import create from '@/shared/media/imgs/create.svg'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGetUsersQuery } from '@/redux/api/user'
import { createProjectSchema } from '@/validation'
import { useCreateProjectMutation } from '@/redux/api/projects'

function Create({ modalOpen, setModalOpen }) {
  const { data } = useGetUsersQuery()
  const [createProject] = useCreateProjectMutation()
  console.log(data)
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({ resolver: zodResolver(createProjectSchema) })

  const handleCancel = () => {
    setModalOpen(false)
  }
  const onSubmit = (formData) => {
    console.log(formData, 'formsdata')
    console.log(getValues(), 'getvalue')
    createProject(formData)
    // setModalOpen(false)
  }
  return (
    <>
      <button
        className='create'
        type='primary'
        onClick={() => setModalOpen(true)}
      >
        <img src={create} alt='filter' />
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
            <div>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder='Project Name'
                    variant='filled'
                    className='input'
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <span className='error'>{errors.name.message}</span>
              )}
            </div>
            <br />
            <Controller
              name='employeeIds'
              control={control}
              render={({ field }) => (
                <Select
                  mode='multiple'
                  allowClear
                  style={{
                    width: '100%',
                  }}
                  placeholder='Please select'
                  options={data.map((item) => ({
                    value: item.user_id,
                    label: item.fullname,
                  }))}
                  {...field}
                />
              )}
            />
            {errors.employeeIds && (
              <span className='error'>{errors.employeeIds.message}</span>
            )}
          </Flex>
          <br />
          <Button htmlType='submit'>Submit</Button>
        </form>
      </Modal>
    </>
  )
}

export default Create
