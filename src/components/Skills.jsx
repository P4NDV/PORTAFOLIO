import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', level: 80, color: '#3178C6' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 85, color: '#38B2AC' },
        { name: 'Next.js', level: 75, color: '#000000' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Express.js', level: 80, color: '#000000' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'PostgreSQL', level: 70, color: '#336791' },
        { name: 'REST APIs', level: 90, color: '#FF6B35' },
        { name: 'GraphQL', level: 65, color: '#E10098' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Docker', level: 70, color: '#2496ED' },
        { name: 'AWS', level: 65, color: '#FF9900' },
        { name: 'Figma', level: 80, color: '#F24E1E' },
        { name: 'Webpack', level: 75, color: '#8DD6F9' },
        { name: 'Jest', level: 70, color: '#C21325' }
      ]
    }
  ]

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2>Habilidades</h2>
          <p className="section-subtitle">
            Las tecnologías y herramientas que domino para crear experiencias excepcionales
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="skills-summary"
        >
          <div className="summary-card">
            <h4>En Constante Aprendizaje</h4>
            <p>
              La tecnología evoluciona constantemente, y yo también. 
              Siempre estoy explorando nuevas herramientas, frameworks 
              y mejores prácticas para mantenerme actualizado en este 
              campo dinámico.
            </p>
            <div className="learning-badges">
              <span className="badge">Vue.js</span>
              <span className="badge">Python</span>
              <span className="badge">Kubernetes</span>
              <span className="badge">Machine Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
