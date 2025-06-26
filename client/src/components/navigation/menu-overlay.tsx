import { motion, AnimatePresence } from 'framer-motion'
import { Home, GraduationCap, Github, User, Mail } from 'lucide-react'

interface MenuOverlayProps {
  isOpen: boolean
  onNavigate: (page: string) => void
}

const menuItems = [
  { id: 'home', label: 'Home', icon: Home, color: 'text-blue-600' },
  { id: 'education', label: 'Education', icon: GraduationCap, color: 'text-purple-600' },
  { id: 'repositories', label: 'Repositories', icon: Github, color: 'text-gray-700 dark:text-gray-300' },
  { id: 'about', label: 'About Me', icon: User, color: 'text-emerald-500' },
  { id: 'contact', label: 'Contact', icon: Mail, color: 'text-amber-500' }
]

export function MenuOverlay({ isOpen, onNavigate }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-30 menu-overlay"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.8 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200 
                  }}
                  className="nav-item text-center cursor-pointer"
                  onClick={() => onNavigate(item.id)}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-full p-6 shadow-xl mb-4 hover:shadow-2xl transition-shadow duration-300">
                    <item.icon className={`text-2xl ${item.color}`} />
                  </div>
                  <span className="text-white font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
