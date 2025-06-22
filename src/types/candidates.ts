import { z } from 'zod/v4'

const candidatesSchema = z.object({
    name: z.string()
        .min(3, 'El nombre debe tener minimo 3 caracteres')
        .max(100, 'El nombre es muy largo'),
    age: z.number(),
    experience: z.number().gte(0),
    status: z.enum(['Pending', 'Reviewing', 'Interviewing', 'Hired', 'Refused']),
    skills: z.array(z.string()),
    working: z.boolean()
})

export type CandidatesType= z.infer<typeof candidatesSchema>