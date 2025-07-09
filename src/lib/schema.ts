import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(""),
  password: z.string().min(6, ""),
});


// Signup schema
export const signupSchema = z.object({
  firstName: z.string().min(1, ""),
  lastName: z.string().min(1, ""),
  email: z.string().email(""),
  password: z.string().min(6, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(6, ""),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});


export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;