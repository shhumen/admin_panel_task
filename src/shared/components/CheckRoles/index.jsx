export const checkRoles = (role) => {
  const checkHead = role === 'HEAD' ? true : false
  const checkSuperAdmin = role === 'SUPERADMIN' ? true : false
  const checkAdmin = role === 'ADMIN' ? true : false
  const checkEmployee = role === 'EMPLOYEE' ? true : false
  return {
    checkHead,
    checkSuperAdmin,
    checkAdmin,
    checkEmployee,
  }
}
