import { Link, NavLink } from 'react-router-dom'
import {
  AntDesignOutlined,
  FileOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

import home from '@/shared/media/imgs/Home.svg'

import { Avatar, Button, Tooltip } from 'antd'

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
  getItem(<NavLink to='/users'>Employees</NavLink>, '2', <UserOutlined />),
  getItem(<NavLink to='/teams'>Teams</NavLink>, '3', <TeamOutlined />),
  getItem(<NavLink to='/projects'>Projects</NavLink>, '4', <ProjectOutlined />),
  getItem(<NavLink to='/reports'>Reports</NavLink>, '5', <FileOutlined />),
]

export const TeamsDataSource = [
  {
    key: '1',
    name: 'Frontend',
    users: (
      <Avatar.Group>
        <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
        <a href='https://ant.design'>
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
        </a>
        <Tooltip title='Ant User' placement='top'>
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: '#1677ff',
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    ),
    actions: ['view', 'edit', 'delete'],
  },
  {
    key: '2',
    name: 'Backend',
    users: (
      <Avatar.Group>
        <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
        <a href='https://ant.design'>
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
        </a>
        <Tooltip title='Ant User' placement='top'>
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: '#1677ff',
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    ),
    actions: ['view', 'edit', 'delete'],
  },
  {
    key: '3',
    name: 'Mobile',
    users: (
      <Avatar.Group>
        <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
        <a href='https://ant.design'>
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
        </a>
        <Tooltip title='Ant User' placement='top'>
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: '#1677ff',
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    ),
    actions: ['view', 'edit', 'delete'],
  },
]

export const ProjectDataSource = [
  {
    key: '1',
    name: 'Furniro',
    actions: ['view', 'edit', 'delete'],
  },
  {
    key: '2',
    name: 'Plast',
    actions: ['view', 'edit', 'delete'],
  },
  {
    key: '3',
    name: 'Dark Dashboard X',
    actions: ['view', 'edit', 'delete'],
  },
  {
    key: '4',
    name: 'TechMart',
    actions: ['view', 'edit', 'delete'],
  },
]

export const EmployeesDataSource = [
  {
    key: '1',
    firstname: 'John',
    lastname: 'Doe',
    status: 'active',
    email: 'john.doe@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '2',
    firstname: 'Jane',
    lastname: 'Smith',
    status: 'active',
    email: 'jane.smith@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '3',
    firstname: 'Alice',
    lastname: 'Johnson',
    status: 'deactive',
    email: 'alice.johnson@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '4',
    firstname: 'Bob',
    lastname: 'Williams',
    status: 'deactive',
    email: 'bob.williams@example.com',
    teams: 'Crocusoft',
    roles: 'head',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '5',
    firstname: 'Charlie',
    lastname: 'Davis',
    status: 'active',
    email: 'charlie.davis@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '6',
    firstname: 'Eva',
    lastname: 'Moore',
    status: 'deactive',
    email: 'eva.moore@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '7',
    firstname: 'David',
    lastname: 'Lee',
    status: 'active',
    email: 'david.lee@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '8',
    firstname: 'Grace',
    lastname: 'Martin',
    status: 'deactive',
    email: 'grace.martin@example.com',
    teams: 'Crocusoft',
    roles: 'head',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '9',
    firstname: 'Frank',
    lastname: 'Clark',
    status: 'deactive',
    email: 'frank.clark@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '10',
    firstname: 'Holly',
    lastname: 'Harrison',
    status: 'active',
    email: 'holly.harrison@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '11',
    firstname: 'Isaac',
    lastname: 'Turner',
    status: 'active',
    email: 'isaac.turner@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '12',
    firstname: 'Jack',
    lastname: 'Miller',
    status: 'deactive',
    email: 'jack.miller@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '13',
    firstname: 'Karen',
    lastname: 'Brown',
    status: 'active',
    email: 'karen.brown@example.com',
    teams: 'Crocusoft',
    roles: 'head',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '14',
    firstname: 'Liam',
    lastname: 'Wilson',
    status: 'deactive',
    email: 'liam.wilson@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '15',
    firstname: 'Mia',
    lastname: 'Jones',
    status: 'deactive',
    email: 'mia.jones@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '16',
    firstname: 'Noah',
    lastname: 'White',
    status: 'active',
    email: 'noah.white@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '17',
    firstname: 'Olivia',
    lastname: 'Anderson',
    status: 'deactive',
    email: 'olivia.anderson@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '18',
    firstname: 'Owen',
    lastname: 'Taylor',
    status: 'active',
    email: 'owen.taylor@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '19',
    firstname: 'Penelope',
    lastname: 'Brown',
    status: 'active',
    email: 'penelope.brown@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '21',
    firstname: 'Ryan',
    lastname: 'Miller',
    status: 'deactive',
    email: 'ryan.miller@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '22',
    firstname: 'Sophia',
    lastname: 'Martin',
    status: 'deactive',
    email: 'sophia.martin@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '23',
    firstname: 'Theo',
    lastname: 'Clark',
    status: 'active',
    email: 'theo.clark@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '24',
    firstname: 'Uma',
    lastname: 'Harrison',
    status: 'active',
    email: 'uma.harrison@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '25',
    firstname: 'Vincent',
    lastname: 'Turner',
    status: 'deactive',
    email: 'vincent.turner@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    key: '27',
    firstname: 'Xander',
    lastname: 'Brown',
    status: 'active',
    email: 'xander.brown@example.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
  },
  {
    firstname: 'Zoe',
    lastname: 'Martin',
    status: 'active',
    email: 'zoe.martin@example.com',
    teams: 'Crocusoft',
    roles: 'user',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
    key: '30',
  },
  {
    firstname: 'Anakin ',
    lastname: 'Skywalker',
    status: 'active',
    email: 'anakinkywalker@gmail.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
    key: '7315',
  },
  {
    firstname: 'Shumen',
    lastname: 'Mehdiyeva',
    status: 'active',
    email: 'mehtiyeva@gmail.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
    key: '17f2',
  },
  {
    firstname: 'Johnny ',
    lastname: 'Deppo',
    status: 'deactive',
    email: 'johnny.depp@gmail.com',
    teams: 'Crocusoft',
    roles: 'user',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
    key: '02ce',
  },
  {
    firstname: 'Anakin ',
    lastname: 'Skywalker',
    status: 'active',
    email: 'anakinskywlkrr@gmail.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
    key: 'bfe7',
  },
  {
    firstname: 'Shumen',
    lastname: 'Mehdiyeva',
    status: 'active',
    email: 'sumn.mekhd02@yahoo.com',
    teams: 'Crocusoft',
    roles: 'admin',
    actions: ['view', 'edit', 'delete', 'resetPassword'],
    key: 'f8d3',
  },
]

export const ProjectUsersDataSource = [
  { title: 'Xander' },
  { title: 'Anakin ' },
  { title: 'Johnny ' },
]
