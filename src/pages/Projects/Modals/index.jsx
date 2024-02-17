import React from 'react'
import { Divider, List, Modal, Space, Typography } from 'antd'
import ViewDrawer from '@/shared/components/ViewDrawer'
import DeleteModal from '@/shared/components/DeleteModal'
import EditModal from '@/shared/components/EditModal'
import ProjectsEditForm from '@/shared/components/Forms/ProjectForms/ProjectsEditForm'
import { ProjectUsersDataSource } from '@/shared/custom/utils'
import View from '../../Projects/Modals/View'
import Edit from './Edit'
const { Title } = Typography

const ProjectsModal = ({ isOpen, setOpen, actionType }) => {
  const teamsActions = {
    view: <View isOpen={isOpen} setOpen={setOpen} />,
    update: <Edit isOpen={isOpen} setOpen={setOpen} />,
    delete: <DeleteModal isOpen={isOpen} setOpen={setOpen} />,
  }
  return teamsActions[actionType]
}
export default ProjectsModal
