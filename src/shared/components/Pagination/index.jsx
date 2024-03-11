import React from 'react'
import { Pagination } from 'antd'
import styles from './style.module.scss'

const CustomPagination = ({
  totalElements,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (page) => {
    onPageChange(page)
  }

  return (
    <Pagination
      current={currentPage}
      total={totalElements}
      pageSize={pageSize}
      onChange={handlePageChange}
      showSizeChanger={false}
    />
  )
}

export default CustomPagination
