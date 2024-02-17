// import { z, object, string } from 'zod'

// export const EmployeeFormSchema = object({
//   firstname: string().refine((value) => value.length > 0, {
//     message: 'Please input your firstname!',
//   }),
//   password: string().min(5, { message: 'Must be 5 or more characters long' }),
// }).required()

export const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
