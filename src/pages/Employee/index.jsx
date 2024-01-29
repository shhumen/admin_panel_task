import React, { useState } from 'react'
import { Table } from 'antd'

const Employee = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {
          text: 'John Doe',
          value: 'John Doe',
        },
        {
          text: 'Jane Smith',
          value: 'Jane Smith',
        },
        {
          text: 'Jane Smith2',
          value: 'Jane Smith2',
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const dataSource = [
    {
      key: '1',
      name: 'John Doe',
      age: 25,
      address: '123 Main St',
    },
    {
      key: '2',
      name: 'Jane Smith',
      age: 30,
      address: '456 Oak St',
    },
    {
      key: '3',
      name: 'Jane Smith2',
      age: 34,
      address: '456 Oak St',
    },
  ]

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
      title={() => 'All Users'}
      dataSource={dataSource}
    />
  )
}

export default Employee
