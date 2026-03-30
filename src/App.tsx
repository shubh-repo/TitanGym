/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Programs } from "@/components/sections/programs"
import { Memberships } from "@/components/sections/memberships"
import { AITools } from "@/components/sections/ai-tools"
import { Trainers } from "@/components/sections/trainers"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { FloatingChatbot } from "@/components/ai/floating-chatbot"
import { AuthModal } from "@/components/auth/auth-modal"
import { PaymentModal } from "@/components/payment/payment-modal"
import { Loader } from "@/components/ui/loader"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [paymentPlan, setPaymentPlan] = useState<{ name: string, price: string } | null>(null)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleSelectPlan = (name: string, price: string) => {
    const user = localStorage.getItem("titan_user")
    if (!user) {
      setIsAuthOpen(true)
    } else {
      setPaymentPlan({ name, price })
    }
  }

  if (isLoading) return <Loader />

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
      <Navbar onLoginClick={() => setIsAuthOpen(true)} />
      
      <main>
        <Hero />
        <Programs />
        <AITools />
        <Memberships onSelectPlan={handleSelectPlan} />
        <Trainers />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      <FloatingChatbot />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
      
      <PaymentModal 
        isOpen={paymentPlan !== null} 
        onClose={() => setPaymentPlan(null)}
        plan={paymentPlan}
      />
    </div>
  )
}

