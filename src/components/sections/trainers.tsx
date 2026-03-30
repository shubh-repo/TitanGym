import { motion } from "motion/react"
import { Instagram, Twitter, Linkedin } from "lucide-react"

const trainers = [
  {
    name: "Marcus Johnson",
    specialty: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    bio: "10+ years experience in powerlifting and bodybuilding."
  },
  {
    name: "Sarah Chen",
    specialty: "Yoga & Pilates Master",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    bio: "Certified Ashtanga instructor focusing on mind-body connection."
  },
  {
    name: "David Rodriguez",
    specialty: "CrossFit Specialist",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", // Reused hero image for demo
    bio: "Former competitive athlete bringing high intensity to every session."
  },
  {
    name: "Emma Watson",
    specialty: "Nutrition & Cardio",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    bio: "Holistic approach to fitness combining diet and endurance."
  }
]

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            EXPERT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">TRAINERS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Learn from the best. Our certified professionals are dedicated to pushing you beyond your limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{trainer.specialty}</p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{trainer.bio}</p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
