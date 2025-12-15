
'use server';

/**
 * @fileOverview Interprets a user's birth chart, providing insights into their personality, strengths, and weaknesses.
 *
 * - interpretBirthChart - A function that handles the birth chart interpretation process.
 * - InterpretBirthChartInput - The input type for the interpretBirthChart function.
 * - InterpretBirthChartOutput - The return type for the interpretBirthChart function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InterpretBirthChartInputSchema = z.object({
  birthDate: z
    .string()
    .describe('The birth date of the user in ISO 8601 format (YYYY-MM-DD).'),
  birthTime: z
    .string()
    .describe('The birth time of the user in HH:mm format (24-hour clock).'),
  birthLocation: z.string().describe('The birth location of the user.'),
  planetsInHouses: z
    .record(z.string(), z.string())
    .describe(
      'A record of each planet and its corresponding house in the birth chart.'
    ),
});
export type InterpretBirthChartInput = z.infer<typeof InterpretBirthChartInputSchema>;

const InterpretBirthChartOutputSchema = z.object({
  personalityInsights: z
    .string()
    .describe('Insights into the user personality based on the birth chart.'),
  strengths: z.string().describe('The strengths of the user.'),
  weaknesses: z.string().describe('The weaknesses of the user.'),
  planetsInHouses: z
    .record(z.string(), z.string())
    .describe(
      'A record of each planet and its corresponding house in the birth chart.'
    ),
});
export type InterpretBirthChartOutput = z.infer<typeof InterpretBirthChartOutputSchema>;

export async function interpretBirthChart(
  input: InterpretBirthChartInput
): Promise<InterpretBirthChartOutput> {
  return interpretBirthChartFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interpretBirthChartPrompt',
  input: {schema: InterpretBirthChartInputSchema},
  output: {schema: InterpretBirthChartOutputSchema},
  prompt: `You are a mystical astrologer interpreting a user's birth chart to provide personalized insights.

  Based on the user's birth details and planetary positions, provide insights into their personality, strengths, and weaknesses.

  Birth Date: {{{birthDate}}}
  BirthTime: {{{birthTime}}}
  Birth Location: {{{birthLocation}}}
  Planets in Houses: {{#each planetsInHouses}}{{{@key}}}: {{{this}}}\n{{/each}}

  Consider the following when interpreting the birth chart:
  - The positions of the planets in the houses.

  Provide a comprehensive analysis of the user's birth chart, highlighting key aspects and their potential impact on the user's life.
  Format output in markdown.
  
  Also, return the original planetsInHouses object in the output.
  `,
});

const interpretBirthChartFlow = ai.defineFlow(
  {
    name: 'interpretBirthChartFlow',
    inputSchema: InterpretBirthChartInputSchema,
    outputSchema: InterpretBirthChartOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get interpretation from AI');
    }
    // Ensure the planetsInHouses data is passed through.
    output.planetsInHouses = input.planetsInhouses;
    return output;
  }
);
