import { GoogleGenAI } from "@google/genai"

const apiKey = process.env.GEMINI_API_KEY

export const ai = new GoogleGenAI({ apiKey: apiKey || "dummy-key" })

export async function generateWorkoutPlan(goal: string, level: string, days: number) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a ${days}-day workout plan for a ${level} level individual whose goal is ${goal}. Format it as a clean, easy to read list or markdown.`,
    })
    return response.text
  } catch (error) {
    console.error("Error generating workout plan:", error)
    return "Failed to generate workout plan. Please try again."
  }
}

export async function generateDietPlan(goal: string, preference: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a daily diet plan for someone whose goal is ${goal} and has a ${preference} dietary preference. Include macros if possible. Format as markdown.`,
    })
    return response.text
  } catch (error) {
    console.error("Error generating diet plan:", error)
    return "Failed to generate diet plan. Please try again."
  }
}

export async function getBMIRecommendation(bmi: number) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `My BMI is ${bmi.toFixed(1)}. Provide a short (2-3 sentences) health recommendation and fitness focus.`,
    })
    return response.text
  } catch (error) {
    console.error("Error getting BMI recommendation:", error)
    return "Keep active and maintain a balanced diet."
  }
}

export async function getExerciseGuide(exercise: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a step-by-step guide on how to perform the exercise: "${exercise}". Include tips for proper form and common mistakes to avoid. Keep it concise.`,
    })
    return response.text
  } catch (error) {
    console.error("Error getting exercise guide:", error)
    return "Could not fetch guide for this exercise."
  }
}
