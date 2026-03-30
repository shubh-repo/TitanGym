import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, CreditCard, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  plan: { name: string, price: string } | null
}

export function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setSuccess(true)
      
      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 2000)
    }, 2000)
  }

  if (!isOpen || !plan) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={!isProcessing ? onClose : undefined}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        >
          {!isProcessing && !success && (
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            >
              <X className="h-5 w-5" />
            </button>
          )}

          <div className="p-8 relative z-10">
            {success ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 className="h-20 w-20 text-emerald-500 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Payment Successful!</h3>
                <p className="text-gray-400">Welcome to the {plan.name} tier.</p>
                <p className="text-sm text-gray-500 mt-4">A receipt has been sent to your email.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Complete Checkout</h2>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 mt-4">
                    <div>
                      <p className="text-sm text-gray-400">Selected Plan</p>
                      <p className="text-lg font-bold text-white">{plan.name} Membership</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Total</p>
                      <p className="text-2xl font-black text-blue-400">{plan.price}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Card Information</label>
                    <div className="relative">
                      <Input 
                        required
                        placeholder="0000 0000 0000 0000" 
                        className="pl-10 font-mono"
                        maxLength={19}
                      />
                      <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Expiry Date</label>
                      <Input required placeholder="MM/YY" className="font-mono" maxLength={5} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">CVC</label>
                      <Input required type="password" placeholder="123" className="font-mono" maxLength={4} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Name on Card</label>
                    <Input required placeholder="John Doe" />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="glow" 
                      className="w-full text-lg h-12"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `Pay ${plan.price}`
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Payments are secure and encrypted. Demo mode.</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
