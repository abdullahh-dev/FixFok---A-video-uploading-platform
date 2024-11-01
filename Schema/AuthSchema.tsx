import { z } from "zod";

export const SignupFormSchema = z
  .object({
    username: z
      .string()
      .toLowerCase()
      .min(3, { message: "Username must be atleast 3 characters" })
      .max(40),
    email: z.string().email({ message: "Invalid email address" }).toLowerCase(),
    fullname: z
      .string({
        message: "Name is required",
      })
      .min(1, { message: "Name is required" })
      .max(70, { message: "Name characters limit exceeded" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
