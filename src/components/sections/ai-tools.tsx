import { useState } from "react"
import { motion } from "motion/react"
import { Bot, BrainCircuit, Activity, Apple, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { generateWorkoutPlan, generateDietPlan, getBMIRecommendation } from "@/lib/gemini"

export function AITools() {
  const [activeTab, setActiveTab] = useState<"workout" | "diet" | "bmi">("workout")
  
  // Workout State
  const [goal, setGoal] = useState("")
  const [level, setLevel] = useState("Beginner")
  const [workoutResult, setWorkoutResult] = useState("")
  const [isGeneratingWorkout, setIsGeneratingWorkout] = useState(false)

  // Diet State
  const [dietGoal, setDietGoal] = useState("")
  const [preference, setPreference] = useState("Omnivore")
  const [dietResult, setDietResult] = useState("")
  const [isGeneratingDiet, setIsGeneratingDiet] = useState(false)

  // BMI State
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmiResult, setBmiResult] = useState<{ bmi: number, recommendation: string } | null>(null)
  const [isCalculatingBmi, setIsCalculatingBmi] = useState(false)

  const handleGenerateWorkout = async () => {
    if (!goal) return
    setIsGeneratingWorkout(true)
    const result = await generateWorkoutPlan(goal, level, 3)
    setWorkoutResult(result)
    setIsGeneratingWorkout(false)
  }

  const handleGenerateDiet = async () => {
    if (!dietGoal) return
    setIsGeneratingDiet(true)
    const result = await generateDietPlan(dietGoal, preference)
    setDietResult(result)
    setIsGeneratingDiet(false)
  }

  const handleCalculateBMI = async () => {
    if (!height || !weight) return
    setIsCalculatingBmi(true)
    const h = parseFloat(height) / 100 // convert cm to m
    const w = parseFloat(weight)
    const bmi = w / (h * h)
    const recommendation = await getBMIRecommendation(bmi)
    setBmiResult({ bmi, recommendation })
    setIsCalculatingBmi(false)
  }

  return (
    <section id="ai-tools" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-1/3 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                POWERED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">GEMINI AI</span>
              </h2>
              <p className="text-gray-400">
                Experience the future of fitness. Our integrated AI tools provide personalized plans, real-time advice, and smart tracking.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setActiveTab("workout")}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${activeTab === "workout" ? "bg-blue-600/20 border-blue-500 text-white" : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === "workout" ? "bg-blue-500" : "bg-white/10"}`}>
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">AI Workout Generator</h4>
                  <p className="text-xs opacity-70">Custom routines based on goals</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab("diet")}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${activeTab === "diet" ? "bg-purple-600/20 border-purple-500 text-white" : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === "diet" ? "bg-purple-500" : "bg-white/10"}`}>
                  <Apple className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">AI Diet Planner</h4>
                  <p className="text-xs opacity-70">Smart nutrition recommendations</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab("bmi")}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${activeTab === "bmi" ? "bg-emerald-600/20 border-emerald-500 text-white" : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === "bmi" ? "bg-emerald-500" : "bg-white/10"}`}>
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Smart BMI Advisor</h4>
                  <p className="text-xs opacity-70">Health metrics & insights</p>
                </div>
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <Card className="min-h-[500px] border-white/10 bg-zinc-900/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-6 w-6 text-blue-500" />
                  {activeTab === "workout" && "Generate Workout Plan"}
                  {activeTab === "diet" && "Generate Diet Plan"}
                  {activeTab === "bmi" && "Calculate BMI & Get Advice"}
                </CardTitle>
                <CardDescription>
                  Powered by Google Gemini 3.1 Flash
                </CardDescription>
              </CardHeader>
              <CardContent>
                
                {activeTab === "workout" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Primary Goal</label>
                        <Input 
                          placeholder="e.g., Build muscle, Lose weight" 
                          value={goal}
                          onChange={(e) => setGoal(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Fitness Level</label>
                        <select 
                          className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                        >
                          <option value="Beginner" className="bg-zinc-900">Beginner</option>
                          <option value="Intermediate" className="bg-zinc-900">Intermediate</option>
                          <option value="Advanced" className="bg-zinc-900">Advanced</option>
                        </select>
                      </div>
                    </div>
                    <Button 
                      onClick={handleGenerateWorkout} 
                      disabled={!goal || isGeneratingWorkout}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isGeneratingWorkout ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <BrainCircuit className="mr-2 h-4 w-4" />}
                      Generate Plan
                    </Button>

                    {workoutResult && (
                      <div className="mt-6 p-4 rounded-lg bg-black/50 border border-white/10 max-h-[300px] overflow-y-auto">
                        <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">
                          {workoutResult}
                        </pre>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === "diet" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Dietary Goal</label>
                        <Input 
                          placeholder="e.g., Lean bulk, Fat loss" 
                          value={dietGoal}
                          onChange={(e) => setDietGoal(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Preference</label>
                        <select 
                          className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                          value={preference}
                          onChange={(e) => setPreference(e.target.value)}
                        >
                          <option value="Omnivore" className="bg-zinc-900">Omnivore</option>
                          <option value="Vegetarian" className="bg-zinc-900">Vegetarian</option>
                          <option value="Vegan" className="bg-zinc-900">Vegan</option>
                          <option value="Keto" className="bg-zinc-900">Keto</option>
                        </select>
                      </div>
                    </div>
                    <Button 
                      onClick={handleGenerateDiet} 
                      disabled={!dietGoal || isGeneratingDiet}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      {isGeneratingDiet ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Apple className="mr-2 h-4 w-4" />}
                      Generate Diet
                    </Button>

                    {dietResult && (
                      <div className="mt-6 p-4 rounded-lg bg-black/50 border border-white/10 max-h-[300px] overflow-y-auto">
                        <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">
                          {dietResult}
                        </pre>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === "bmi" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Height (cm)</label>
                        <Input 
                          type="number"
                          placeholder="e.g., 175" 
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Weight (kg)</label>
                        <Input 
                          type="number"
                          placeholder="e.g., 70" 
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleCalculateBMI} 
                      disabled={!height || !weight || isCalculatingBmi}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      {isCalculatingBmi ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Activity className="mr-2 h-4 w-4" />}
                      Calculate & Analyze
                    </Button>

                    {bmiResult && (
                      <div className="mt-6 p-6 rounded-lg bg-black/50 border border-white/10 flex flex-col items-center text-center">
                        <div className="text-5xl font-black text-white mb-2">
                          {bmiResult.bmi.toFixed(1)}
                        </div>
                        <div className="text-sm font-medium text-emerald-400 mb-4 uppercase tracking-wider">
                          Your BMI Score
                        </div>
                        <p className="text-gray-300 text-sm max-w-md">
                          {bmiResult.recommendation}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}

              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
