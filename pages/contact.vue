<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          <Icon name="heroicons:envelope" class="inline-block text-amber-500 mr-4" size="48" />
          Get In Touch
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ready to start your next project? Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>
      
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="animate-fadeInUp">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">Let's Connect</h2>
            
            <div class="space-y-6">
              <div
                v-for="(method, index) in contactMethods"
                :key="method.title"
                class="flex items-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
              >
                <div :class="[method.bg, 'rounded-full p-4 mr-6']">
                  <Icon :name="method.icon" :class="method.color" size="24" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{{ method.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ method.value }}</p>
                </div>
              </div>
            </div>
            
            <!-- Social Media Links -->
            <div class="mt-12 animate-fadeInUp">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Follow Me</h3>
              <div class="flex space-x-4">
                <a
                  v-for="(social, index) in socialLinks"
                  :key="index"
                  href="#"
                  :class="[social.color, 'text-white p-4 rounded-full transition-all duration-300 hover:scale-110']"
                >
                  <Icon :name="social.icon" size="20" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl animate-fadeInUp">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h2>
            
            <UForm :state="formData" @submit="handleSubmit" class="space-y-6">
              <UFormGroup label="Full Name" required>
                <UInput
                  v-model="formData.name"
                  placeholder="Your full name"
                  required
                />
              </UFormGroup>
              
              <UFormGroup label="Email Address" required>
                <UInput
                  v-model="formData.email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </UFormGroup>
              
              <UFormGroup label="Project Type">
                <USelect
                  v-model="formData.projectType"
                  :options="projectTypes"
                  placeholder="Select project type"
                />
              </UFormGroup>
              
              <UFormGroup label="Message" required>
                <UTextarea
                  v-model="formData.message"
                  :rows="6"
                  placeholder="Tell me about your project..."
                  required
                />
              </UFormGroup>
              
              <UButton
                type="submit"
                size="xl"
                block
                class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Icon name="heroicons:paper-airplane" class="mr-2" size="16" />
                Send Message
              </UButton>
            </UForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toast = useToast()

const formData = reactive({
  name: '',
  email: '',
  projectType: '',
  message: ''
})

const contactMethods = [
  {
    title: 'Email',
    value: 'emrullah.alku@example.com',
    icon: 'heroicons:envelope',
    color: 'text-blue-500',
    bg: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    title: 'WhatsApp',
    value: '+90 555 123 4567',
    icon: 'heroicons:phone',
    color: 'text-green-500',
    bg: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/emrullah-alku',
    icon: 'simple-icons:linkedin',
    color: 'text-blue-600',
    bg: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    title: 'GitHub',
    value: 'github.com/emrullah-alku',
    icon: 'simple-icons:github',
    color: 'text-gray-800 dark:text-gray-300',
    bg: 'bg-gray-100 dark:bg-gray-700'
  }
]

const socialLinks = [
  { icon: 'simple-icons:twitter', color: 'bg-blue-500 hover:bg-blue-600' },
  { icon: 'simple-icons:instagram', color: 'bg-pink-500 hover:bg-pink-600' },
  { icon: 'simple-icons:youtube', color: 'bg-red-500 hover:bg-red-600' },
  { icon: 'simple-icons:github', color: 'bg-purple-500 hover:bg-purple-600' }
]

const projectTypes = [
  { label: 'Web Development', value: 'web-development' },
  { label: 'UI/UX Design', value: 'ui-ux-design' },
  { label: 'Video Production', value: 'video-production' },
  { label: 'Consultation', value: 'consultation' },
  { label: 'Other', value: 'other' }
]

const handleSubmit = () => {
  toast.add({
    title: 'Message sent!',
    description: 'Thank you for your message! I will get back to you soon.',
    color: 'green'
  })
  
  // Reset form
  Object.assign(formData, {
    name: '',
    email: '',
    projectType: '',
    message: ''
  })
}

// SEO
useHead({
  title: 'Contact - Emrullah Alku',
  meta: [
    { name: 'description', content: 'Get in touch with Emrullah Alku for web development, design, and creative projects. Ready to collaborate on your next idea.' }
  ]
})
</script>