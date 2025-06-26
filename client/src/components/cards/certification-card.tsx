import { motion } from 'framer-motion'

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  icon: string
  color: string
  skills: string[]
}

const colorClasses = {
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400'
}

const iconColors = {
  green: 'text-green-500',
  blue: 'text-blue-500',
  purple: 'text-purple-500',
  indigo: 'text-indigo-500',
  yellow: 'text-yellow-500',
  pink: 'text-pink-500'
}

export function CertificationCard({ title, issuer, date, icon, color, skills }: CertificationCardProps) {
  const skillColorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue
  const iconColorClass = iconColors[color as keyof typeof iconColors] || iconColors.blue

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-center">
        <div className={`bg-${color}-100 dark:bg-${color}-900/30 rounded-full p-4 mb-6 inline-block`}>
          <i className={`${icon} text-3xl ${iconColorClass}`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{issuer}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Completed: {date}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className={`${skillColorClass} px-3 py-1 rounded-full text-xs`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
