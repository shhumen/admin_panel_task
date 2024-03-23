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
  firstname: z
    .string()
    .max(50)
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      'Firstname should contain only alphabets'
    ),
  lastname: z
    .string()
    .max(50)
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      'Lastname should contain only alphabets'
    ),
  email: z
    .string()
    .email()
    .max(100)
    .refine((value) => value.endsWith('@crocusoft.com'), {
      message: 'Email must end with @crocusoft.com',
    }),

  password: z.string().min(8),
  role: z.number(),
  team_id: z.number().optional(),
})
export const filterEmployeeSchema = z.object({
  firstname: z
    .string()
    .optional()
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      'Firstname should contain only alphabets'
    )
    .optional(),
  lastname: z
    .string()
    .optional()
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      'Lastname should contain only alphabets'
    ),
  projectIds: z.array(z.number()).optional(),
  teamIds: z.array(z.number()).optional(),
})
export const createTeamSchema = z.object({
  team_name: z.string(),
})
export const editTeamSchema = z.object({
  name: z.string(),
})

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  employeeIds: z
    .array(z.number())
    .min(1, 'At least one employee must be selected'),
})

export const updateReportSchema = z.object({
  description: z
    .string()
    .min(1, 'In the description at least one letter is required '),
})

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(8),
    newPassword: z.string().min(8),
    newPasswordAgain: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.newPasswordAgain, {
    message: "Passwords don't match",
    path: ['newPasswordAgain'],
  })

export const updateUserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  role: z.number(),
  team_id: z.number().optional(),
})

export const editProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  employeeIds: z.array(z.number()).optional(),
})
export const filterProjectSchema = z.object({
  projectName: z.string().optional(),
})

export const createReportSchema = z.object({
  description: z.string(),
  projectId: z.number(),
})

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
})

export const verifyOtpSchema = z.object({
  otp: z.string(),
})

export const forgotPasswordChangeSchema = z
  .object({
    newPassword: z.string().min(8),
    newPasswordAgain: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.newPasswordAgain, {
    message: "Passwords don't match",
    path: ['newPasswordAgain'],
  })
