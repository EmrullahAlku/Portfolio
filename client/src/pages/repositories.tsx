import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { RepositoryCard } from '@/components/cards/repository-card'
import { Button } from '@/components/ui/button'
import { REPOSITORIES } from '@/lib/constants'

export default function Repositories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <Github className="inline-block text-gray-800 dark:text-white mr-4" size={48} />
            My Repositories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Open source projects and code examples showcasing my development skills and contributions
          </p>
        </motion.div>
        
        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Public Repositories', value: '42', color: 'text-blue-600' },
            { label: 'Total Commits', value: '1,247', color: 'text-green-500' },
            { label: 'Stars Earned', value: '156', color: 'text-amber-500' },
            { label: 'Followers', value: '23', color: 'text-purple-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {REPOSITORIES.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <RepositoryCard {...repo} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-3" size={20} />
            View All Repositories on GitHub
            <ExternalLink className="ml-3" size={16} />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
