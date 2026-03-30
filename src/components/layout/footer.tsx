import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 text-white">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold tracking-tighter">TITAN<span className="text-blue-500">FIT</span></span>
            </a>
            <p className="text-gray-400 text-sm">
              Premium luxury fitness experience. Train hard, transform fast, and achieve your ultimate physique with our state-of-the-art facilities and expert trainers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="#trainers" className="hover:text-blue-400 transition-colors">Trainers</a></li>
              <li><a href="#memberships" className="hover:text-blue-400 transition-colors">Memberships</a></li>
              <li><a href="#schedule" className="hover:text-blue-400 transition-colors">Class Schedule</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Weight Training</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cardio Fitness</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">CrossFit</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Yoga & Pilates</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Personal Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Fitness Avenue, Muscle City</li>
              <li>contact@titanfit.demo</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Titan Fitness Club. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
