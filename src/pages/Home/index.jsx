import styles from './style.module.scss'
import teams from '@/shared/media/imgs/teams.svg'
import users from '@/shared/media/imgs/users.svg'
import project from '@/shared/media/imgs/project.svg'
import reports from '@/shared/media/imgs/reports.svg'
import { Card, Col, Row } from 'antd'
import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Title } = Typography

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.Home}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card bordered={false} hoverable onClick={() => navigate('/teams')}>
            <div className={styles.card_header}>
              <div className={styles.teams_icon}>
                <img src={teams} alt='hand-waving' />
              </div>

              <div className={styles.card_title}>
                <p>Teams</p>
                <Title level={3}>5 Teams</Title>
              </div>
            </div>
            <div className={styles.card_body}></div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card bordered={false} hoverable onClick={() => navigate('/users')}>
            <div className={styles.card_header}>
              <div className={styles.users_icon}>
                <img src={users} alt='users' />
              </div>
              <div className={styles.card_title}>
                <p>Users</p>
                <Title level={3}>20 Users</Title>
              </div>
            </div>
            <div className={styles.card_body}></div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card
            bordered={false}
            hoverable
            onClick={() => navigate('/projects')}
          >
            <div className={styles.card_header}>
              <div className={styles.projects_icon}>
                <img src={project} alt='Projects' />
              </div>
              <div className={styles.card_title}>
                <p>Projects</p>
                <Title level={3}>6 Projects</Title>
              </div>
            </div>
            <div className={styles.card_body}></div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card bordered={false} hoverable onClick={() => navigate('/reports')}>
            <div className={styles.card_header}>
              <div className={styles.reports_icon}>
                <img src={reports} alt='Reports' />
              </div>
              <div className={styles.card_title}>
                <p>Reports</p>
                <Title level={3}>30 Reports</Title>
              </div>
            </div>
            <div className={styles.card_body}></div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
