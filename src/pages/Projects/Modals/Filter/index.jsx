import React from 'react'
import filter from '@/shared/media/imgs/filter.svg'
import { Button, Divider, Drawer, Flex, Form, Input } from 'antd'
import { validateMessages } from '@/validation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { filterProjectSchema } from '../../../../validation'
function Filter({ modalOpen, setModalOpen, setProjectName }) {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(filterProjectSchema),
  })

  const onSubmit = () => {
    setProjectName(getValues().projectName)
    reset()
    setModalOpen(false)
  }

  return (
    <>
      <button
        className='filter_btn'
        type='primary'
        onClick={() => setModalOpen(true)}
      >
        <img src={filter} alt='filter' />
      </button>
      <Drawer
        centered
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        okButtonProps={{ className: 'filter' }}
        okText='Filter'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex vertical>
            <h4>Filter Employees</h4>
            <Divider />
            <Controller
              name='projectName'
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
            <br />
            {errors.projectName && (
              <span className='error'>{errors.projectName.message}</span>
            )}
          </Flex>
          <Divider />
          <div className='buttons_'>
            <Button className='submit_btn' onClick={() => reset()}>
              Reset
            </Button>
            <Button className='submit_btn' key='yes' htmlType='submit'>
              Filter
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  )
}

export default Filter
