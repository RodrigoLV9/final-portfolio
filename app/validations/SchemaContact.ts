import { z } from "zod";
export const SchemaContact = (language: boolean | undefined) => z.object({
    name: z.string().min(5, { message: language ? 'El nombre debe tener al menos 5 letras' : 'Name must have at least 5 letters' }).max(12, { message: language ? 'El nombre debe tener como máximo 12 letras' : 'Name must have at maximum 12 letters' }),
    email: z.string().email({ message: language ? 'El correo electrónico es incorrecto' : 'Email is incorrect' }),
    subject: z.string(),
    message: z.string().min(15, { message: language
        ? 'El mensaje debe tener al menos 15 caracteres'
        : 'Message must have at least 15 characters long'})
});