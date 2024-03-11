import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGetTeamsByIdQuery, useUpdateTeamMutation } from '@/redux/api/teams'
import { editTeamSchema } from '@/validation'
import { Button, Flex, Input, Modal } from 'antd'

const Edit = ({ isOpen, setOpen, actionType }) => {
  const teamId = actionType?.teamId
  const [updateTeam, { isSuccess }] = useUpdateTeamMutation()
  const { data: teamDetails } = useGetTeamsByIdQuery(actionType.teamId)
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(editTeamSchema),
  })

  useEffect(() => {
    if (teamDetails) {
      const { name } = teamDetails
      reset({ name })
    }
  }, [teamDetails, reset])

  const onSubmit = () => {
    updateTeam({
      team_id: teamId,
      team_name: getValues().name,
    })
    setOpen(false)
  }

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
                {...field}
              />
            )}
          />
          <br />
          {errors.name && <span className='error'>{errors.name.message}</span>}
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
