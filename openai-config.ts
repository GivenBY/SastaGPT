import OpenAI from "openai";

const keyopenai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default keyopenai;
