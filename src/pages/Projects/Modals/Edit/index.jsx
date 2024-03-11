import React, { useEffect } from 'react'
import { Button, Divider, Flex, Form, Input, Modal, Select } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editProjectSchema } from '@/validation'
import {
  useUpdateProjectMutation,
  useGetProjectByIdQuery,
} from '@/redux/api/projects'
import { useUserFilterQuery } from '@/redux/api/user'

function Edit({ isOpen, setOpen, actionType }) {
  const projectId = actionType?.projectId
  const [updateProject, { isSuccess }] = useUpdateProjectMutation()
  const { data: projectDetails } = useGetProjectByIdQuery(actionType?.projectId)

  const { data: userFilter } = useUserFilterQuery({
    page: 1,
  })

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(editProjectSchema),
  })

  useEffect(() => {
    if (projectDetails) {
      const { name, employees } = projectDetails
      reset({ name, employeeIds: employees?.map((employee) => employee.id) })
    }
  }, [projectDetails, reset])

  const onSubmit = (formData) => {
    updateProject({
      project_id: projectId,
      name: getValues().name,
      employeeIds: getValues().employeeIds,
    })
    setOpen(false)
  }

  return (
    <Modal
      title='Edit Project'
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
                placeholder='Project Name'
                className='input'
                {...field}
              />
            )}
          />
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
          <Divider style={{ margin: '7px' }} />
        </Flex>
        <Button htmlType='submit'>Edit</Button>
      </form>
    </Modal>
  )
}

export default Edit
