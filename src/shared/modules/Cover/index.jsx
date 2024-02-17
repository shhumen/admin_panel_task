import { Content } from 'antd/es/layout/layout'
import styles from './style.module.scss'

const Cover = ({ children }) => {
  return <Content className={styles.Cover}>{children}</Content>
}
export default Cover
