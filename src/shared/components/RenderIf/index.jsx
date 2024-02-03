const RenderIf = ({ children, conditions, renderElse }) => {
  if (conditions) {
    return children
  } else if (renderElse) {
    return renderElse
  }
}

export default RenderIf
