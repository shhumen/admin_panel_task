import {
  AppstoreOutlined,
  FileOutlined,
  MailOutlined,
  ProjectOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

import home from '@/shared/media/imgs/Home.svg'
import reports from '@/shared/media/imgs/reports.svg'
import { Link } from 'react-router-dom'

// export const Items = [
//   {
//     key: '1',
//     icon: <img src={home} alt='Dashboard' />,
//     label: <Link to='/'>Dashboard</Link>,
//   },
//   {
//     key: '2',
//     icon: <UserOutlined />,
//     label: <Link to='/users'>Users</Link>,
//   },
//   {
//     key: '3',
//     icon: <TeamOutlined />,
//     label: <Link to='/teams'>teams</Link>,
//   },
//   {
//     key: '4',
//     icon: <ProjectOutlined />,
//     label: <Link to='/projects'>projects</Link>,
//   },
//   {
//     key: '5',
//     icon: <FileOutlined />,
//     label: <Link to='/reports'>Reports</Link>,
//   },
// ]

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
  getItem(
    <Link to='/'>Dashboard</Link>,
    '1',
    <img src={home} alt='Dashboard' />
  ),
  getItem(<Link to='/users'>Users</Link>, '2', <UserOutlined />),
  getItem(<Link to='/teams'>Teams</Link>, '3', <TeamOutlined />),
  getItem(<Link to='/projects'>Projects</Link>, '4', <ProjectOutlined />),
  getItem(<Link to='/reports'>Reports</Link>, '5', <FileOutlined />),
]
