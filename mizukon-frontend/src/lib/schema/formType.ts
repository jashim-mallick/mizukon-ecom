import z from "zod";
import { logInFormSchema, registerFormSchema } from "./formSchema";

export type RegisterType = z.infer<typeof registerFormSchema>;
export type LogInType = z.infer<typeof logInFormSchema>;
