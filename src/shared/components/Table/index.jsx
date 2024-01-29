/* eslint-disable react/prop-types */
import React, { useState } from 'react'
function Table({ columns, dataSource, ...restProps }) {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })
  }

  return (
    <Table
      columns={columns}
      title={() => 'Users'}
      // rowKey={(record) => record.login.uuid}
      dataSource={dataSource}
      pagination={tableParams.pagination}
      // loading={loading}
      onChange={handleTableChange}
      {...restProps}
    />
  )
}

export default Table
