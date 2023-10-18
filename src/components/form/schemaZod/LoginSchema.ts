import { z } from "zod";

const LoginFormSchema = z.object({
    email: z.string()
      .email({ message: "L'email n'est pas valide" }),
    password: z.string()
      .min(8, "Le mot de passe doit avoir au moins 8 caractères")
  });

export default LoginFormSchema;
