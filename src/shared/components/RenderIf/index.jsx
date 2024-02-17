const RenderIf = ({ children, conditions, renderElse = '' }) => {
  if (conditions) {
    return children
  }
  return renderElse
}

export default RenderIf
