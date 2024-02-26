import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return { isOpen, setOpen, openModal, closeModal }
}
