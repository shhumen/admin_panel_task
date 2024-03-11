import { Button, Modal } from 'antd'
import React, { useEffect } from 'react'
import {
  useUpdateReportMutation,
  useGetReportsByIdQuery,
} from '@/redux/api/reports'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateReportSchema } from '@/validation'
import ReactQuill from 'react-quill'
import { checkRoles } from '@/shared/components/CheckRoles'

const Edit = ({ isOpen, setOpen, actionType, role }) => {
  const { checkEmployee } = checkRoles(role)

  const reportId = actionType?.reportId
  const { data: reportDetails } = useGetReportsByIdQuery(actionType?.reportId)
  const [updateReport, { isSuccess }] = useUpdateReportMutation()

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(updateReportSchema),
  })

  useEffect(() => {
    if (reportDetails) {
      const { description } = reportDetails
      reset({ description })
    }
  }, [reportDetails, reset])

  const onSubmit = () => {
    updateReport({
      report_id: reportId,
      description: getValues().description,
    })
    setOpen(false)
  }

  return (
    <Modal
      title='Edit Reports'
      centered
      open={checkEmployee && isOpen}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <ReactQuill variant='filled' theme='snow' {...field} />
          )}
        />
        {errors.description && (
          <span className='error'>{errors.description.message}</span>
        )}
        <br />
        <Button htmlType='submit'>Submit</Button>
      </form>
    </Modal>
  )
}

export default Edit
