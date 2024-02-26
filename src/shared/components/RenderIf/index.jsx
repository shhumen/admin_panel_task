import { Fragment } from 'react'

const RenderIf = ({ children, conditions, renderElse = '' }) => {
  if (conditions) {
    return <Fragment>{children}</Fragment>
  }
  return <Fragment>{renderElse}</Fragment>
}

export default RenderIf
