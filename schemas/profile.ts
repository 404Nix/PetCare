import { z } from "zod";

export const customerProfileSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long"),

    phone: z
        .string()
        .trim()
        .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

    address: z
        .string()
        .trim()
        .min(5, "Please enter your address")
        .max(200, "Address is too long"),

    city: z.string().trim().min(2, "Please enter your city"),

    state: z.string().trim().min(2, "Please enter your state"),

    pincode: z
        .string()
        .trim()
        .regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
});

export type CustomerProfileInput = z.infer<typeof customerProfileSchema>;
