import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // for client-side use only in demos
});

export const getCPTFromGPT = async (description) => {
  const prompt = `
You're a medical billing assistant. Based on the patient description below, suggest the most likely CPT codes (max 3), including code and description.

Respond ONLY in this exact JSON format:
[
  { "code": "XXXXXX", "description": "..." },
  { "code": "XXXXXX", "description": "..." }
]

Patient Description: """${description}"""
`;

  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2
    });

    console.log('[GPT Response]', res);

    const json = JSON.parse(res.choices[0].message.content);
    return Array.isArray(json) ? json : [];
  } catch (err) {
    console.error('[GPT ERROR]', err);
    return [];
  }
};
