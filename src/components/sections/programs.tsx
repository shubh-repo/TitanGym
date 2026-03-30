import { motion } from "motion/react"
import { TiltCard } from "@/components/ui/tilt-card"
import { Dumbbell, HeartPulse, Activity, Zap } from "lucide-react"

const programs = [
  {
    title: "Weight Training",
    description: "Build muscle and strength with our premium free weights and machines.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Cardio Fitness",
    description: "Improve endurance and burn fat with state-of-the-art cardio equipment.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop",
    color: "from-red-500/20 to-transparent"
  },
  {
    title: "CrossFit",
    description: "High-intensity functional movements for ultimate conditioning.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Yoga & Pilates",
    description: "Enhance flexibility, core strength, and mental focus.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    color: "from-emerald-500/20 to-transparent"
  }
]

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">PROGRAMS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose from our diverse range of specialized fitness programs designed to help you reach your specific goals faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-[400px]"
            >
              <TiltCard className="group cursor-pointer">
                <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} via-black/60 to-black/90`} />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="mb-auto">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 group-hover:scale-110 transition-transform">
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{program.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">{program.description}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
