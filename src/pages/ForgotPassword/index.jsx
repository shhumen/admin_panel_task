import React, { useState } from 'react'
import GenerateOtp from './GenerateOtp'
import VerifyOtp from './VerifyOtp'
import ChangePassword from './ChangePassword'
import { Layout } from 'antd'
import styles from './style.module.scss'

const ForgotPassword = ({ user }) => {
  const [email, setEmail] = useState('')
  const [isOtpGenerated, setIsOtpGenerated] = useState(false)
  const [isOtpVerified, setIsOtpVerified] = useState(false)
  const [passwordConfirmed, setPasswordConfirmed] = useState(false)

  return (
    <Layout className={styles.forgotPassword}>
      {!isOtpGenerated && (
        <GenerateOtp
          setEmail={setEmail}
          setIsOtpGenerated={setIsOtpGenerated}
        />
      )}
      {isOtpGenerated && !isOtpVerified && (
        <VerifyOtp
          email={email}
          setIsOtpVerified={setIsOtpVerified}
          setPasswordConfirmed={setPasswordConfirmed}
        />
      )}
      {isOtpVerified && passwordConfirmed && <ChangePassword email={email} />}
    </Layout>
  )
}
export default ForgotPassword
