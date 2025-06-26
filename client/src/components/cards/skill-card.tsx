import { motion } from 'framer-motion'

interface SkillCardProps {
  title: string
  description: string
  icon: string
  color: string
  proficiency: number
}

const colorClasses = {
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-500',
    progress: 'from-orange-400 to-orange-600'
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    text: 'text-yellow-500',
    progress: 'from-yellow-400 to-yellow-600'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-500',
    progress: 'from-green-400 to-green-600'
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-500',
    progress: 'from-blue-400 to-blue-600'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-500',
    progress: 'from-purple-400 to-purple-600'
  },
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    text: 'text-indigo-500',
    progress: 'from-indigo-400 to-indigo-600'
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    text: 'text-pink-500',
    progress: 'from-pink-400 to-pink-600'
  }
}

export function SkillCard({ title, description, icon, color, proficiency }: SkillCardProps) {
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <motion.div
      className="skill-card bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-center">
        <div className={`${colorClass.bg} rounded-full p-4 mb-6 inline-block`}>
          <i className={`${icon} text-3xl ${colorClass.text}`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className={`bg-gradient-to-r ${colorClass.progress} h-2 rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${proficiency}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
