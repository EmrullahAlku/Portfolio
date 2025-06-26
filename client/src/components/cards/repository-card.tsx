import { motion } from 'framer-motion'
import { Star, GitFork, Github } from 'lucide-react'

interface RepositoryCardProps {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  color: string
}

const languageColors = {
  Vue: 'bg-green-500',
  Python: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  CSS: 'bg-blue-400'
}

export function RepositoryCard({ name, description, language, stars, forks, color }: RepositoryCardProps) {
  const languageColor = languageColors[language as keyof typeof languageColors] || 'bg-gray-500'

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h3>
        <Github className="text-gray-400 text-xl" />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className={`w-3 h-3 ${languageColor} rounded-full`}></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{language}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{stars}</span>
          </div>
          <div className="flex items-center space-x-1">
            <GitFork className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{forks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
