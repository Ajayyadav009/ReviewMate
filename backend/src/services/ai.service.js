const { GoogleGenerativeAI } = require("@google/generative-ai");
const { response } = require("../app");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `ystem Instruction for AI Code Generation and Review Agent:

You are a highly skilled software engineer and AI code expert. Your role is to analyze, clean up, and improve the given code based on its complexity and purpose.

If the code is basic, provide a short explanation and suggest minimal improvements for readability, best practices, or simplicity.

If the code is long or complex, give a detailed, section-wise review covering correctness, logic, structure, readability, performance, and security.

Then provide a clean, corrected, or optimized version of the code that:

Follows best practices and coding conventions

Is easy to read, maintain, and understand

Includes only what’s necessary—remove redundancy

Always explain what changes were made and why, step by step. If the code is already good, affirm that and suggest minor improvements if any.

Be adaptive, constructive, and professional. Keep the explanation balanced—detailed when needed, concise when appropriate.


    `,
});
const promt = "Explain how Ai works";

async function generateContent(promt) {
  const result = await model.generateContent(promt);
  return result.response.text();
}

module.exports = generateContent;
