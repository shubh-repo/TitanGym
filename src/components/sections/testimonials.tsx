import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Pro Member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    content: "The AI workout generator completely changed my routine. I've seen more progress in 3 months here than in 2 years at my old gym."
  },
  {
    name: "Jessica Davis",
    role: "Elite Member",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    content: "Incredible facilities and the trainers are top-notch. The community here pushes you to be your absolute best every single day."
  },
  {
    name: "Michael Chen",
    role: "Basic Member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    content: "Even on the basic plan, the value is insane. The equipment is always clean, available, and the atmosphere is pure motivation."
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            MEMBER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">STORIES</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Hear from the people who have transformed their lives at Titan Fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-white/10 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-white/5" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 relative z-10">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
