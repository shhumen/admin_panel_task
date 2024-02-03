import styles from './style.module.scss'
import hand from '@/shared/media/imgs/hand.svg'
import teams from '@/shared/media/imgs/teams.svg'
import weather from '@/shared/media/imgs/weather.svg'
import users from '@/shared/media/imgs/users.svg'
import project from '@/shared/media/imgs/project.svg'
import reports from '@/shared/media/imgs/reports.svg'
import { Card, Col, Row } from 'antd'
import { Typography } from 'antd'
const { Title, Text, Paragraph } = Typography

const Home = () => {
  return (
    <div className={styles.Home}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <Card
            style={{
              color: '#fff',
            }}
            bordered={false}
          >
            <div className={styles.card_header}>
              <div className={styles.hand_icon}>
                <img src={hand} alt='hand-waving' />
              </div>

              <div className={styles.card_title}>
                <p>Welcome</p>
                <Title level={3}>Mehdiyeva Shumen</Title>
              </div>
            </div>

            <div className={styles.card_body}>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium facilis, voluptatem maiores esse molestiae
                laboriosam incidunt itaque consequatur. Assumenda, tempora!
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card bordered={false}>
            <div className={styles.card_header}>
              <div className={styles.weather_icon}>
                <img src={weather} alt='Weather' />
              </div>

              <div className={styles.card_title}>
                <p>Weather</p>
                <Title level={3}> 6 &#8451;</Title>
              </div>
            </div>

            <div className={styles.card_body}>
              <Text>
                A bit of sleet late this evening; windy with considerable
                cloudiness
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card bordered={false}>
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
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card bordered={false}>
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
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card bordered={false}>
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
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card bordered={false}>
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
