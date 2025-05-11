import zod from "zod";

export const registerSchema = zod.object({
  username: zod
    .string({ required_error: "El nombre de usuario es requerido" })
    .trim(),
  email: zod.string({ required_error: "El email es requerido" }).email({message: "Correo electrónico inválido"}).trim(),
  password: zod
    .string({ required_error: "Se requiere contraseña" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

export const loginSchema = zod.object({
  username: zod
    .string({ required_error: "Debe ingresar un nombre de usuario válido" })
    .trim(),
  password: zod
    .string({ required_error: "Ingrese una contraseña válida" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
