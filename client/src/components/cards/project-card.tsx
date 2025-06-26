import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

export function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
