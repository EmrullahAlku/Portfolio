import { motion } from 'framer-motion'
import { User, Code, Palette, Video, Heart, Lightbulb, Users } from 'lucide-react'

export default function About() {
  const interests = [
    {
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with modern frameworks and best practices.',
      icon: Code,
      color: 'text-blue-500'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-centered designs that provide exceptional digital experiences.',
      icon: Palette,
      color: 'text-purple-500'
    },
    {
      title: 'Motion Graphics',
      description: 'Bringing designs to life with engaging animations and visual effects.',
      icon: Video,
      color: 'text-red-500'
    },
    {
      title: 'Open Source',
      description: 'Contributing to the developer community through open-source projects and knowledge sharing.',
      icon: Heart,
      color: 'text-green-500'
    },
    {
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.',
      icon: Lightbulb,
      color: 'text-yellow-500'
    },
    {
      title: 'Collaboration',
      description: 'Working with teams to deliver outstanding results and meaningful impact.',
      icon: Users,
      color: 'text-indigo-500'
    }
  ]

  const funFacts = [
    { label: 'Cups of Coffee', value: '500+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies Learned', value: '15' },
    { label: 'Passion for Learning', value: '∞' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <User className="inline-block text-emerald-500 mr-4" size={48} />
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer and designer with a love for creating meaningful digital experiences
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Emrullah Alku Portrait" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm Emrullah Alku, a passionate full-stack developer and creative designer based in Istanbul, Turkey. My journey into technology began during high school when I discovered the power of code to bring ideas to life.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With a Computer Science degree and years of hands-on experience, I specialize in modern web technologies like Vue.js, Nuxt 3, and Django. I believe in creating digital experiences that are not only functional but also beautiful and intuitive.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, creating motion graphics, or contributing to open-source projects. I'm always eager to learn new technologies and collaborate on exciting projects.
              </p>
            </div>
          </motion.div>
          
          {/* Skills & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`bg-gray-100 dark:bg-gray-700 rounded-full p-4 mb-6 inline-block`}>
                  <interest.icon className={`text-3xl ${interest.color}`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Fun Facts About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{fact.value}</div>
                  <p className="text-purple-100">{fact.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
