import { z } from "zod";

// Define Zod schema for validation
export const userSchemaZod = z.object({
  userId: z.string().min(1, { message: "User ID is required." }),
  userName: z.string().min(1, { message: "Username is required." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  fullName: z.object({
    firstName: z.string().min(1, { message: "First name is required." }).trim(),
    lastName: z.string().min(1, { message: "Last name is required." }).trim(),
  }),
  age: z
    .number()
    .min(1, { message: "Age is required and must be a positive number." }),
  email: z.string().email({ message: "Invalid email address." }),
  isActive: z.boolean(),
  hobbies: z.enum(
    [
      "Reading",
      "Gaming",
      "Cooking",
      "Traveling",
      "Photography",
      "Painting",
      "Music",
      "Hiking",
      "Cycling",
      "Swimming",
    ],
    { message: "Invalid hobby selected." }
  ),
  address: z.object({
    street: z.string().min(1, { message: "Street is required." }),
    city: z.string().min(1, { message: "City is required." }),
    country: z.string().min(1, { message: "Country is required." }),
  }),
  orders: z.array(
    z.object({
      productName: z.string().min(1, { message: "Product name is required." }),
      price: z
        .number()
        .min(0, { message: "Price must be a non-negative number." }),
      quantity: z.number().min(1, { message: "Quantity must be at least 1." }),
    })
  ),
  isDeleted: z.boolean(),
});

// TypeScript type inference from Zod schema
export type TUsersZod = z.infer<typeof userSchemaZod>;
