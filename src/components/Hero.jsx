import React from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hola, soy{' '}
              <span className="text-gradient">P4NDA</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-subtitle"
            >
              Desarrollador Full Stack
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-description"
            >
              Apasionado por crear experiencias web excepcionales con 
              tecnologías modernas como React, Node.js y más. 
              Me encanta resolver problemas complejos con código elegante.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-buttons"
            >
              <a href="#contact" className="btn btn-primary">
                <Mail size={18} />
                Contáctame
              </a>
              <a 
                href="/cv.pdf" 
                className="btn btn-outline"
                download
              >
                <Download size={18} />
                Descargar CV
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-social"
            >
              <a 
                href="https://github.com/Enger225" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/tu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contacto@p4nda.dev"
                className="social-link"
                aria-label="Send Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-image"
          >
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="/profile.jpg" 
                  alt="Perfil" 
                />
              </div>
              <div className="profile-floating">
                <div className="floating-item">
                  <span>React</span>
                </div>
                <div className="floating-item">
                  <span>Node.js</span>
                </div>
                <div className="floating-item">
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.8 },
            y: { 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }
          }}
          className="scroll-indicator"
          onClick={scrollToNext}
          whileHover={{ y: -5 }}
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
