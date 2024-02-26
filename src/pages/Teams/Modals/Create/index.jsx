import React from 'react'
import { Button, Flex, Form, Input, Modal, Select } from 'antd'
import create from '@/shared/media/imgs/create.svg'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTeamSchema } from '@/validation'
import { useCreateTeamMutation } from '@/redux/api/teams'

export const Create = ({ modalOpen, setModalOpen }) => {
  const [createTeam] = useCreateTeamMutation()

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({ resolver: zodResolver(createTeamSchema) })

  const onSubmit = (formData) => {
    console.log(formData, 'formsdata')
    createTeam(formData)
    setModalOpen(false)
  }

  const handleCancel = () => {
    setModalOpen(false)
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
                name='team_name'
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder='Team Name'
                    variant='filled'
                    className='input'
                    {...field}
                  />
                )}
              />
              {errors.team_name && (
                <span className='error'>{errors.team_name.message}</span>
              )}
            </div>
          </Flex>
          <br />
          <Button htmlType='submit'>Submit</Button>
        </form>
      </Modal>
    </>
  )
}
