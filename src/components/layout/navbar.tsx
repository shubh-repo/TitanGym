import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Dumbbell, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<{ name: string } | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    
    const storedUser = localStorage.getItem("titan_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Memberships", href: "#memberships" },
    { name: "AI Tools", href: "#ai-tools" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white group">
          <Dumbbell className="h-8 w-8 text-blue-500 group-hover:text-purple-500 transition-colors" />
          <span className="text-xl font-bold tracking-tighter">TITAN<span className="text-blue-500">FIT</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <User className="h-4 w-4" />
              <span>{user.name}</span>
              <Button variant="ghost" size="sm" onClick={() => {
                localStorage.removeItem("titan_user")
                setUser(null)
              }}>Logout</Button>
            </div>
          ) : (
            <Button variant="outline" onClick={onLoginClick}>Sign In</Button>
          )}
          <Button variant="glow">Join Now</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              {user ? (
                <Button variant="outline" onClick={() => {
                  localStorage.removeItem("titan_user")
                  setUser(null)
                  setIsMobileMenuOpen(false)
                }}>Logout ({user.name})</Button>
              ) : (
                <Button variant="outline" onClick={() => {
                  onLoginClick()
                  setIsMobileMenuOpen(false)
                }}>Sign In</Button>
              )}
              <Button variant="glow">Join Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
