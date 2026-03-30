import { useState } from "react"
import { motion } from "motion/react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    price: "₹999",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Free fitness assessment",
      "1 Group class per week",
      "Basic AI Workout Plan"
    ],
    notIncluded: [
      "Personal Training",
      "Diet Plan",
      "Premium Classes"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "₹1999",
    description: "Ideal for dedicated individuals seeking faster results.",
    features: [
      "24/7 Gym access",
      "All Basic features",
      "Unlimited Group classes",
      "Advanced AI Workout & Diet",
      "1 PT session per month",
      "Sauna & Spa access"
    ],
    notIncluded: [
      "Dedicated Locker",
      "Unlimited PT"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "₹3999",
    description: "The ultimate luxury fitness experience with full support.",
    features: [
      "All Pro features",
      "Unlimited Personal Training",
      "Dedicated VIP Locker",
      "Nutritionist Consultation",
      "Premium AI Coach Access",
      "Guest Pass (2/month)"
    ],
    notIncluded: [],
    popular: false
  }
]

export function Memberships({ onSelectPlan }: { onSelectPlan: (plan: string, price: string) => void }) {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="memberships" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">MEMBERSHIP</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Flexible plans designed to fit your goals and lifestyle. No hidden fees.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annually <span className="text-blue-400 text-xs ml-1">(Save 20%)</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="h-10">{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
                    {isAnnual ? `₹${Math.floor(parseInt(plan.price.replace('₹', '')) * 12 * 0.8)}` : plan.price}
                    <span className="ml-1 text-xl font-medium text-gray-500">/{isAnnual ? 'yr' : 'mo'}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="h-5 w-5 text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <X className="h-5 w-5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.popular ? "glow" : "outline"} 
                    className="w-full"
                    onClick={() => onSelectPlan(plan.name, isAnnual ? `₹${Math.floor(parseInt(plan.price.replace('₹', '')) * 12 * 0.8)}` : plan.price)}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
