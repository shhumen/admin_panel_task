import { Col, Row, Typography, Form } from 'antd'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../redux/api/auth'
import loginImg from '@/shared/media/imgs/Login-rafiki.png'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'
import ThemeSwitch from '../../shared/components/themeSwitcher'
const { Title } = Typography

const Login = ({ themes, setThemes }) => {
  const [login, { isLoading, isError }] = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await login(data)
  }

  return (
    <div className={styles.Login}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
            <ThemeSwitch themes={themes} setThemes={setThemes} />
            <h3>Sign in</h3>
            <div className={styles.FormItem}>
              <label>Email</label>
              <input
                {...register('email', {
                  required: 'Username is required',
                  minLength: {
                    value: 2,
                    message: 'Username must be at least 2 characters',
                  },
                })}
                type='text'
              />
              {errors.email && (
                <span className={styles.ErrorMessage}>
                  {errors['email']?.message}
                </span>
              )}
            </div>
            <div className={styles.FormItem}>
              <label>Password</label>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
                type='password'
              />
              {errors.password && (
                <span className={styles.ErrorMessage}>
                  {errors['password']?.message}
                </span>
              )}
            </div>

            <Form.Item className={styles.FormLink}>
              <Link to='/otp'>Forgot Password</Link>
            </Form.Item>

            <button type='submit' disabled={isLoading}>
              Submit
            </button>
          </form>
        </Col>
        <Col xs={0} sm={0} md={12} lg={12} xl={12}>
          <div className={styles.Layout}>
            <img src={loginImg} alt='Login' />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Login
