import { Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export function ThemeToggle() {

  return (
    <button
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-not-allowed opacity-50"
      aria-label="Theme toggle (dark mode only)"
      disabled
    >
      <motion.div
        initial={false}
        animate={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <Sun className="w-5 h-5 text-warning" />
      </motion.div>
    </button>
  )
}
