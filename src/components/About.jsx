import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Heart } from 'lucide-react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Experiencia en tecnologías front-end y back-end modernas'
    },
    {
      icon: Palette,
      title: 'Diseño UI/UX',
      description: 'Creación de interfaces atractivas y funcionales'
    },
    {
      icon: Zap,
      title: 'Optimización',
      description: 'Código eficiente y aplicaciones de alto rendimiento'
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Dedicado a crear soluciones que importen'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    }
  }

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2>Acerca de Mí</h2>
          <p className="section-subtitle">
            Conoce más sobre mi experiencia y pasión por el desarrollo
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text"
          >
            <h3>Mi Historia</h3>
            <p>
              Soy un desarrollador apasionado con más de 3 años de experiencia 
              creando aplicaciones web modernas y eficientes. Mi viaje en la 
              programación comenzó con curiosidad y se ha convertido en una 
              pasión por resolver problemas complejos con código elegante.
            </p>
            <p>
              Me especializo en el stack MERN (MongoDB, Express, React, Node.js) 
              y disfruto trabajando tanto en el front-end como en el back-end. 
              Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas 
              para mantenerme al día con las tendencias de la industria.
            </p>
            <p>
              Cuando no estoy programando, me gusta contribuir a proyectos de 
              código abierto, escribir artículos técnicos y mentorear a 
              desarrolladores junior.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Clientes Satisfechos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-features"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="feature-card"
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
