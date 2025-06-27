import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    about: defineCollection({
      type: "page",
      source: "about.md",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        image: z.string(),
      }),
    }),
    education: defineCollection({
      type: "page",
      source: "education.md",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        education: z.array(
          z.object({
            institution: z.string(),
            degree: z.string(),
            period: z.string(),
            description: z.string(),
            skills: z.array(z.string()),
          })
        ),
        certifications: z.array(
          z.object({
            title: z.string(),
            issuer: z.string(),
            date: z.string(),
            icon: z.string(),
            link: z.string(),
          })
        ),
        skills: z.array(z.string()),
      }),
    }),
    repositories: defineCollection({
      type: "page",
      source: "repositories.md",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        categories: z.array(z.string()),
        projects: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            category: z.string(),
            technologies: z.array(z.string()),
            image: z.string().url(),
            demo: z.string().url().optional(),
            github: z.string().url().optional(),
            stars: z.number(),
            language: z.string(),
          })
        ),
        githubStats: z.object({
          repos: z.number(),
          stars: z.number(),
          commits: z.number(),
          followers: z.number(),
        }),
      }),
    }),
    contact: defineCollection({
      type: "page",
      source: "contact.md",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        contactInfo: z.object({
          email: z.string(),
          phone: z.string(),
          location: z.string(),
        }),
        socials: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
            icon: z.string(),
          })
        ),
        availability: z.object({
          status: z.string(),
          note: z.string(),
        }),
        faqs: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        ),
      }),
    }),
  },
});
