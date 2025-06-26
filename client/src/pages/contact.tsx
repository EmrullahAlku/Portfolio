import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })
  const { toast } = useToast()

  const contactMethods = [
    {
      title: 'Email',
      value: 'emrullah.alku@example.com',
      icon: Mail,
      color: 'text-blue-500',
      bg: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'WhatsApp',
      value: '+90 555 123 4567',
      icon: Phone,
      color: 'text-green-500',
      bg: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/emrullah-alku',
      icon: Linkedin,
      color: 'text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'GitHub',
      value: 'github.com/emrullah-alku',
      icon: Github,
      color: 'text-gray-800 dark:text-gray-300',
      bg: 'bg-gray-100 dark:bg-gray-700'
    }
  ]

  const socialLinks = [
    { icon: Twitter, color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: Instagram, color: 'bg-pink-500 hover:bg-pink-600' },
    { icon: Youtube, color: 'bg-red-500 hover:bg-red-600' },
    { icon: Github, color: 'bg-purple-500 hover:bg-purple-600' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement actual form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message! I will get back to you soon.",
    })
    setFormData({ name: '', email: '', projectType: '', message: '' })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <Mail className="inline-block text-amber-500 mr-4" size={48} />
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Let's Connect</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`${method.bg} rounded-full p-4 mr-6`}>
                      <method.icon className={`text-2xl ${method.color}`} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{method.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className={`${social.color} text-white p-4 rounded-full transition-all duration-300`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="projectType" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Project Type
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-all duration-300">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="video-production">Video Production</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
