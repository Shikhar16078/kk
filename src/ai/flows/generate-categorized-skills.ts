'use server';

/**
 * @fileOverview Generates a categorized list of skills (frontend, backend, AI, databases, general) based on user's experience and project descriptions.
 *
 * - generateCategorizedSkills - A function that generates categorized skills.
 * - GenerateCategorizedSkillsInput - The input type for the generateCategorizedSkills function.
 * - GenerateCategorizedSkillsOutput - The return type for the generateCategorizedSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCategorizedSkillsInputSchema = z.object({
  experienceDescription: z
    .string()
    .describe('Description of the user\u2019s work experience.'),
  projectDescriptions: z
    .string()
    .describe('Descriptions of the user\u2019s projects.'),
});
export type GenerateCategorizedSkillsInput = z.infer<
  typeof GenerateCategorizedSkillsInputSchema
>;

const GenerateCategorizedSkillsOutputSchema = z.object({
  frontendSkills: z.array(z.string()).describe('List of frontend skills.'),
  backendSkills: z.array(z.string()).describe('List of backend skills.'),
  aiSkills: z.array(z.string()).describe('List of AI related skills.'),
  databaseSkills: z.array(z.string()).describe('List of database skills.'),
  generalSkills: z.array(z.string()).describe('List of general skills.'),
});
export type GenerateCategorizedSkillsOutput = z.infer<
  typeof GenerateCategorizedSkillsOutputSchema
>;

export async function generateCategorizedSkills(
  input: GenerateCategorizedSkillsInput
): Promise<GenerateCategorizedSkillsOutput> {
  return generateCategorizedSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCategorizedSkillsPrompt',
  input: {schema: GenerateCategorizedSkillsInputSchema},
  output: {schema: GenerateCategorizedSkillsOutputSchema},
  prompt: `Based on the following descriptions of work experience and projects, generate a categorized list of skills.

Experience Description: {{{experienceDescription}}}

Project Descriptions: {{{projectDescriptions}}}

Ensure the skills are categorized into frontend, backend, AI, databases, and general skills. If any category has no skills based on the context, provide a few relevant example skills for a senior software developer for that category. Do not include any introductory or concluding remarks. Return only JSON.`,
});

const generateCategorizedSkillsFlow = ai.defineFlow(
  {
    name: 'generateCategorizedSkillsFlow',
    inputSchema: GenerateCategorizedSkillsInputSchema,
    outputSchema: GenerateCategorizedSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
