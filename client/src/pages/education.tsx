import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { CertificationCard } from '@/components/cards/certification-card'
import { CERTIFICATIONS } from '@/lib/constants'

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <GraduationCap className="inline-block text-blue-600 mr-4" size={48} />
            Education & Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in technology and design
          </p>
        </motion.div>
        
        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Academic Background</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-center mb-12"
              >
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Bachelor of Computer Science</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Istanbul Technical University</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">2019 - 2023</p>
                    <p className="text-gray-600 dark:text-gray-300">Specialized in software engineering, algorithms, and web development with focus on modern frameworks and database design.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative flex items-center mb-12"
              >
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">High School Diploma</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">Science High School</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">2015 - 2019</p>
                    <p className="text-gray-600 dark:text-gray-300">Mathematics and Science focused curriculum with early introduction to programming and computational thinking.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <CertificationCard {...certification} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
