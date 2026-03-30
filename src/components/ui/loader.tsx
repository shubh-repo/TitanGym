import { motion } from "motion/react"
import { Dumbbell } from "lucide-react"

export function Loader() {
  return (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-8 text-blue-500"
      >
        <Dumbbell className="h-16 w-16" />
      </motion.div>
      
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold text-white tracking-widest">TITAN</span>
        <span className="text-2xl font-bold text-blue-500 tracking-widest">FIT</span>
      </div>
      
      <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
        />
      </div>
    </div>
  )
}
