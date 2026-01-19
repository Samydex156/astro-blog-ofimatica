import { defineCollection, z } from 'astro:content';

const clases = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        // Agregamos modulo para categorizar la clase (ej: 'word', 'excel', 'windows')
        module: z.enum(['word', 'excel', 'powerpoint', 'publisher', 'internet', 'windows']).optional(),
    }),
});

const guias = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        // La categoría es obligatoria para las guías saber dónde mostrarlas
        category: z.enum(['word', 'excel', 'powerpoint', 'publisher', 'internet', 'windows']),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { clases, guias };
