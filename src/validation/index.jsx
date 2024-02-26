import { z, object, string } from 'zod'

export const resetPasswordSchema = z
  .object({
    newPassword: string(),
    confirmPassword: string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

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

export const createEmployeeSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.number(),
  team_id: z.number(),
})
export const createTeamSchema = z.object({
  team_name: z.string(),
})

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  employeeIds: z
    .array(z.number())
    .min(1, 'At least one employee must be selected'),
})
