import { Switch, Route, useLocation } from "wouter"
import { useState, useEffect } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/queryClient"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/hooks/use-theme"
import { NavigationHeader } from "@/components/navigation/navigation-header"
import { MenuOverlay } from "@/components/navigation/menu-overlay"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Home from "@/pages/home"
import Education from "@/pages/education"
import Repositories from "@/pages/repositories"
import About from "@/pages/about"
import Contact from "@/pages/contact"
import NotFound from "@/pages/not-found"

function Router() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [location, setLocation] = useLocation()

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen)
  }

  const handleNavigate = (page: string) => {
    setLocation(`/${page === 'home' ? '' : page}`)
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest('.nav-item, #nameContainer')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <NavigationHeader onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onNavigate={handleNavigate} />
      
      {/* Main Content */}
      <main 
        className={`transition-all duration-500 ${isMenuOpen ? 'blur-sm' : ''}`}
        style={{ filter: isMenuOpen ? 'blur(5px)' : 'none' }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/education" component={Education} />
          <Route path="/repositories" component={Repositories} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
