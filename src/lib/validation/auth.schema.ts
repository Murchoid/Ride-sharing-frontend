import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email('Invalid email').min(3, "Too short"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6),
  confirmPassword: z.string().min(6)
});

  const validateField = <T,>(value: T, schema: z.ZodType<T, any, any>) => {
    const result = schema.safeParse(value)
    if (!result.success) {
        return result.error.issues[0]?.message || 'Validation error'
    }
    return undefined
}

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export default validateField;