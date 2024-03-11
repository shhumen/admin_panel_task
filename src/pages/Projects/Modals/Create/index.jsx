import React from 'react'
import { Button, Divider, Flex, Input, Modal, Select } from 'antd'
import { create } from '@/shared/media'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUserFilterQuery } from '@/redux/api/user'
import { createProjectSchema } from '@/validation'
import { useCreateProjectMutation } from '@/redux/api/projects'

function Create({ modalOpen, setModalOpen }) {
  const { data: userFilter } = useUserFilterQuery({
    page: 1,
  })

  const [createProject, { isSuccess }] = useCreateProjectMutation()
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: zodResolver(createProjectSchema) })

  const handleCancel = () => {
    setModalOpen(false)
  }
  const onSubmit = (formData) => {
    createProject(formData)
    reset()
    handleCancel()
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
            <Divider style={{ margin: '7px' }} />
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
                  options={userFilter?.content
                    ?.filter((user) => {
                      return (
                        user?.status !== 'INACTIVE' &&
                        user?.role.id !== 1 &&
                        user?.role.id !== 2
                      )
                    })
                    .map((item) => ({
                      value: item.id,
                      label: (
                        <div className='options'>
                          <span>
                            {item.surname} {item.name}
                          </span>
                          <span className='option_status'>
                            {item?.role?.roleEnum}
                          </span>
                        </div>
                      ),
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
