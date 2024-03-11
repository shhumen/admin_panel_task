import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const [modalState, setModalState] = useState({
    filter: false,
    create: false,
  })

  const [pageState, setPageState] = useState({
    current: 1,
    pageSize: 4,
  })

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: pageState.current,
      pageSize: pageState.pageSize,
    },
  })

  const handlePageChange = (page) => {
    setPageState((prevState) => ({
      ...prevState,
      current: page,
    }))
  }

  return {
    isOpen,
    handlePageChange,
    setOpen,
    pageState,
    setPageState,
    tableParams,
    setTableParams,
    openModal,
    closeModal,
    modalState,
    setModalState,
  }
}
