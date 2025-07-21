import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('¡Mensaje enviado! Te responderé pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tu@email.com',
      link: 'mailto:tu@email.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Ciudad, País',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com',
      color: '#333'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: '#0077B5'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: '#1DA1F2'
    }
  ]

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2>Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-info"
          >
            <div className="contact-intro">
              <h3>¡Conectemos!</h3>
              <p>
                Estoy siempre abierto a discutir nuevas oportunidades, 
                proyectos interesantes, o simplemente charlar sobre tecnología. 
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">
                    <item.icon size={24} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-title">{item.title}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-section">
              <h4>Sígueme en:</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form-container"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  rows="6"
                  required
                  className="form-input form-textarea"
                />
              </div>

              <motion.button
                type="submit"
                className={`btn btn-primary form-submit ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
