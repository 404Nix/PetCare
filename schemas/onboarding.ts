import { z } from "zod";

export const roleSchema = z.enum(["CUSTOMER", "CLINIC", "PET_SHOP"]);

export type SelectRoleInput = z.infer<typeof roleSchema>;
