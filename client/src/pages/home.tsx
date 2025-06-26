import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Code, Palette } from 'lucide-react'
import { SkillCard } from '@/components/cards/skill-card'
import { ProjectCard } from '@/components/cards/project-card'
import { Button } from '@/components/ui/button'
import { SKILLS, PROJECTS, DESIGN_PORTFOLIO } from '@/lib/constants'

export default function Home() {
  const softwareRef = useRef(null)
  const designRef = useRef(null)
  const dividerRef = useRef(null)
  
  const softwareInView = useInView(softwareRef, { once: true, threshold: 0.3 })
  const designInView = useInView(designRef, { once: true, threshold: 0.3 })
  const dividerInView = useInView(dividerRef, { once: true, threshold: 0.5 })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition flex items-center justify-center relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-blue-600/10 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-24 h-24 bg-purple-600/10 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-10 w-16 h-16 bg-amber-400/10 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-gradient mb-6">Portfolio</h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer & Creative Designer crafting digital experiences with passion and precision
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 dark:text-purple-400 dark:border-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-2xl text-gray-400" />
        </motion.div>
      </section>

      {/* Section Divider */}
      <div ref={dividerRef} className={`section-divider mx-auto w-24 ${dividerInView ? 'animate' : ''}`} />

      {/* Software Section */}
      <section ref={softwareRef} className="min-h-screen bg-white dark:bg-gray-800 theme-transition py-20 relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%236366F1' fill-opacity='0.1'><polygon points='60,60 30,60 30,30 60,30'/></g></svg>")`
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={softwareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <Code className="inline-block text-blue-600 mr-4" size={48} />
              Software Development
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building robust, scalable applications with modern technologies and best practices
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={softwareInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {SKILLS.software.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={softwareInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Recent Projects Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={softwareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={softwareInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sharp Transition Element */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Design Section */}
      <section ref={designRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 theme-transition py-20 relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={designInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <Palette className="inline-block text-pink-500 mr-4" size={48} />
              Creative Design
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Crafting visually stunning designs and compelling multimedia content that tells your story
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={designInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {SKILLS.design.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={designInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Design Portfolio Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={designInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Design Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DESIGN_PORTFOLIO.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={designInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and creative design
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start a Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
