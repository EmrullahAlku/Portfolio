export const SKILLS = {
  software: [
    {
      title: 'HTML & CSS',
      description: 'Semantic markup and modern CSS with flexbox, grid, and animations',
      icon: 'fab fa-html5',
      color: 'orange',
      proficiency: 95
    },
    {
      title: 'JavaScript',
      description: 'ES6+ features, async programming, and modern JavaScript patterns',
      icon: 'fab fa-js-square',
      color: 'yellow',
      proficiency: 90
    },
    {
      title: 'Vue & Nuxt 3',
      description: 'Component-based architecture with Vue.js and server-side rendering with Nuxt 3',
      icon: 'fab fa-vuejs',
      color: 'green',
      proficiency: 95
    },
    {
      title: 'Python & Django',
      description: 'Backend development with Python and full-stack web applications using Django',
      icon: 'fab fa-python',
      color: 'blue',
      proficiency: 85
    }
  ],
  design: [
    {
      title: 'Figma',
      description: 'UI/UX design, prototyping, and collaborative design systems',
      icon: 'fab fa-figma',
      color: 'purple',
      proficiency: 95
    },
    {
      title: 'Photoshop',
      description: 'Photo editing, digital art, and graphic design compositions',
      icon: 'fas fa-layer-group',
      color: 'blue',
      proficiency: 90
    },
    {
      title: 'Premiere Pro',
      description: 'Video editing, color grading, and professional post-production',
      icon: 'fas fa-video',
      color: 'indigo',
      proficiency: 85
    },
    {
      title: 'After Effects',
      description: 'Motion graphics, visual effects, and animated compositions',
      icon: 'fas fa-magic',
      color: 'pink',
      proficiency: 90
    }
  ]
}

export const PROJECTS = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution built with Nuxt 3 and Django',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    tags: ['Vue.js', 'Django']
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management with real-time updates',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    tags: ['Nuxt 3', 'WebSocket']
  },
  {
    title: 'Learning Management System',
    description: 'Interactive learning platform with progress tracking',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    tags: ['JavaScript', 'API']
  }
]

export const DESIGN_PORTFOLIO = [
  {
    title: 'Brand Identity',
    description: 'Complete brand system with logo, colors, and typography',
    image: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design with intuitive interfaces',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
  },
  {
    title: 'Video Production',
    description: 'Professional video editing and motion graphics',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
  }
]

export const REPOSITORIES = [
  {
    name: 'vue-portfolio-template',
    description: 'A modern, responsive portfolio template built with Vue 3 and Nuxt 3. Features dark mode, animations, and mobile-first design.',
    language: 'Vue',
    stars: 24,
    forks: 8,
    color: 'green'
  },
  {
    name: 'django-ecommerce-api',
    description: 'RESTful API for e-commerce applications using Django REST Framework. Includes authentication, payment processing, and inventory management.',
    language: 'Python',
    stars: 31,
    forks: 12,
    color: 'blue'
  },
  {
    name: 'js-animation-library',
    description: 'Lightweight JavaScript animation library for modern web applications. Supports CSS transforms, scroll animations, and easing functions.',
    language: 'JavaScript',
    stars: 18,
    forks: 5,
    color: 'yellow'
  },
  {
    name: 'nuxt-blog-cms',
    description: 'Headless CMS blog built with Nuxt 3, featuring markdown support, SEO optimization, and dynamic routing for content management.',
    language: 'Vue',
    stars: 37,
    forks: 15,
    color: 'green'
  },
  {
    name: 'css-component-library',
    description: 'Modular CSS component library with utility classes, responsive design patterns, and accessibility-first approach.',
    language: 'CSS',
    stars: 14,
    forks: 3,
    color: 'blue'
  },
  {
    name: 'python-data-viz',
    description: 'Data visualization tools and templates using Python, Matplotlib, and Seaborn for creating interactive charts and dashboards.',
    language: 'Python',
    stars: 22,
    forks: 7,
    color: 'blue'
  }
]

export const CERTIFICATIONS = [
  {
    title: 'Vue.js Developer Certification',
    issuer: 'Vue Mastery',
    date: 'March 2023',
    icon: 'fab fa-vuejs',
    color: 'green',
    skills: ['Vue 3', 'Composition API', 'Nuxt 3']
  },
  {
    title: 'Python Django Developer',
    issuer: 'Django Software Foundation',
    date: 'January 2023',
    icon: 'fab fa-python',
    color: 'blue',
    skills: ['Django', 'REST API', 'PostgreSQL']
  },
  {
    title: 'UX/UI Design Professional',
    issuer: 'Google UX Design',
    date: 'October 2022',
    icon: 'fab fa-figma',
    color: 'purple',
    skills: ['Figma', 'User Research', 'Prototyping']
  },
  {
    title: 'Video Production Specialist',
    issuer: 'Adobe Certified Expert',
    date: 'September 2022',
    icon: 'fas fa-video',
    color: 'indigo',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading']
  },
  {
    title: 'Modern JavaScript Developer',
    issuer: 'FreeCodeCamp',
    date: 'June 2022',
    icon: 'fab fa-js-square',
    color: 'yellow',
    skills: ['ES6+', 'Async/Await', 'APIs']
  },
  {
    title: 'Motion Graphics Designer',
    issuer: 'School of Motion',
    date: 'August 2022',
    icon: 'fas fa-magic',
    color: 'pink',
    skills: ['Animation', 'Typography', 'Visual Effects']
  }
]
