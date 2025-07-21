import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { icon: Home, label: 'Inicio', href: '#hero' },
    { icon: User, label: 'Acerca de', href: '#about' },
    { icon: Code, label: 'Habilidades', href: '#skills' },
    { icon: Briefcase, label: 'Proyectos', href: '#projects' },
    { icon: Mail, label: 'Contacto', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gradient">P4NDA</span>
        </motion.div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  )
}

export default Header
