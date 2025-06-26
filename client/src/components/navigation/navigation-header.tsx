import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationHeaderProps {
  onMenuToggle: (isOpen: boolean) => void
  isMenuOpen: boolean
}

export function NavigationHeader({ onMenuToggle, isMenuOpen }: NavigationHeaderProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (!isMenuOpen) {
      onMenuToggle(true)
    }
  }

  const handleProfileClick = () => {
    if (isMenuOpen) {
      onMenuToggle(false)
    }
  }

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="relative">
        {/* Half Circle Name Display */}
        <motion.div
          className={`${
            isHovered || isMenuOpen ? 'full-circle' : 'half-circle'
          } bg-gradient-to-r from-blue-600 to-purple-600 w-48 h-24 flex items-end justify-center pb-4 cursor-pointer shadow-2xl hover:shadow-purple-500/25 transition-all duration-500`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => !isMenuOpen && setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="text-white font-bold text-lg tracking-wide">Emrullah Alku</h1>
        </motion.div>
        
        {/* Profile Photo */}
        <AnimatePresence>
          {(isHovered || isMenuOpen) && (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
              alt="Emrullah Alku Profile Photo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full object-cover cursor-pointer"
              onClick={handleProfileClick}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
