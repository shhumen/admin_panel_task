import { Button, Flex, Form, Input, Modal, Select } from 'antd'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTeamSchema } from '@/validation'
import { useGetTeamsByIdQuery, useUpdateTeamMutation } from '@/redux/api/teams'

const Edit = ({ isOpen, setOpen, actionType }) => {
  const teamId = actionType.teamId
  const [updateTeam] = useUpdateTeamMutation()
  const { data: teamDetails } = useGetTeamsByIdQuery(actionType.teamId)
  console.log(actionType)
  console.log(teamDetails)
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(createTeamSchema),
  })

  useEffect(() => {
    if (teamDetails) {
      const { name } = teamDetails
      reset({ name })
    }
  }, [teamDetails, reset])

  console.log(errors)

  const onSubmit = () => {
    console.log({
      data: getValues().name,
    })
    // updateTeam(teamId, {
    //   data: getValues().name,
    // })
  }

  console.log(getValues(), 'get')
  return (
    <Modal
      title='Edit Team'
      centered
      open={isOpen}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Input
                variant='filled'
                placeholder='Team Name'
                className='input'
                onChange={(e) => field.onChange(e.target.value)}
                {...field}
              />
            )}
          />
          <br />
          {errors.firstname && (
            <span className='error'>{errors.team_name.message}</span>
          )}
        </Flex>
        <br />
        <Button key='yes' htmlType='submit'>
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default Edit
