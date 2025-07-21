import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:tu@email.com'
    }
  ]

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Acerca de', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape footer-shape-1"></div>
          <div className="footer-shape footer-shape-2"></div>
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="footer-section footer-main"
          >
            <div className="footer-logo">
              <span className="text-gradient">P4NDA</span>
            </div>
            <p className="footer-description">
              Desarrollador Full Stack apasionado por crear experiencias web 
              excepcionales y soluciones innovadoras que marcan la diferencia.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="footer-section"
          >
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="footer-section"
          >
            <h4 className="footer-title">Contacto</h4>
            <div className="footer-contact">
              <p>
                <strong>Email:</strong><br />
                tu@email.com
              </p>
              <p>
                <strong>Teléfono:</strong><br />
                +1 (555) 123-4567
              </p>
              <p>
                <strong>Ubicación:</strong><br />
                Ciudad, País
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} P4NDA. Hecho con{' '}
              <Heart size={16} className="footer-heart" />
              {' '}usando React y mucha cafeína ☕
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="scroll-to-top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
