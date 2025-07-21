import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Filter } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Dashboard administrativo para e-commerce con análisis en tiempo real, gestión de inventario y reportes avanzados.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'App de Gestión de Tareas',
      description: 'Aplicación web para gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'API REST para Blog',
      description: 'API robusta para sistema de blog con autenticación JWT, roles de usuario y sistema de comentarios.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      github: '#',
      demo: '#'
    }
  ]

  const filters = [
    { id: 'all', label: 'Todos', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2>Proyectos</h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más destacados y experiencias de desarrollo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="project-filters"
        >
          <div className="filter-icon">
            <Filter size={20} />
          </div>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="projects-grid"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="project-card"
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-projects"
          >
            <p>No hay proyectos en esta categoría todavía.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
