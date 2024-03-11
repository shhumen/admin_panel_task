import { Link } from 'react-router-dom'
import {
  FileOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

import home from '@/shared/media/imgs/Home.svg'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

export const Items = [
  {
    label: <Link to='/'>Dashboard</Link>,
    key: '/',
    icon: <img src={home} alt='Dashboard' />,
  },
  {
    label: <Link to='/users'>Employees</Link>,
    key: '/users',
    icon: <UserOutlined />,
  },
  {
    label: <Link to='/teams'>Teams</Link>,
    key: '/teams',
    icon: <TeamOutlined />,
  },
  {
    label: <Link to='/projects'>Projects</Link>,
    key: '/projects',
    icon: <ProjectOutlined />,
  },
  {
    label: <Link to='/reports'>Reports</Link>,
    key: '/reports',
    icon: <FileOutlined />,
  },
]
