import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

export default function PreLoader() {
  return (
    <CirclesWithBar
      color='#cb3cff'
      outerCircleColor='#cb3cff'
      innerCircleColor='#cb3cff'
      barColor='#cb3cff'
      ariaLabel='circles-with-bar-loading'
      wrapperStyle={{}}
      wrapperClass='spinner'
      visible={true}
    />
  )
}
