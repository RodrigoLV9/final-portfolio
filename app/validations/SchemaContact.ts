import { z } from "zod";
export const SchemaContact=z.object({
    name:z.string().min(5,{message:'Name must have at least 5 letters'}).max(12,{message:'Name must have at maximum 12 letters'}),
    email:z.string().email({message:'Email is incorrect'}),
    subject:z.string(),
    message:z.string().min(15,{message:'Message must have at least 15 characters long'})

})