# 💼 Mi Portafolio - Desarrollador Full Stack

Un portafolio web moderno y responsive desarrollado con React, Vite y Framer Motion.

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX atractivo y profesional
- 📱 **Completamente Responsive**: Perfecto en móviles, tablets y desktop
- ⚡ **Animaciones Suaves**: Transiciones y efectos con Framer Motion
- 🚀 **Performance Optimizado**: Carga rápida con Vite
- 🎯 **Navegación Intuitiva**: Menú sticky y scroll suave
- 📧 **Formulario de Contacto**: Sistema de contacto funcional
- 🔍 **SEO Optimized**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca principal de JavaScript
- **Vite** - Herramienta de desarrollo y build
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos modernos
- **CSS3** - Estilos modernos con variables CSS

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección de introducción
│   ├── About.jsx       # Información personal
│   ├── Skills.jsx      # Habilidades técnicas
│   ├── Projects.jsx    # Portafolio de proyectos
│   ├── Contact.jsx     # Formulario de contacto
│   ├── Footer.jsx      # Pie de página
│   └── *.css          # Estilos de cada componente
├── App.jsx            # Componente principal
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Enger225/PORTAFOLIO.git

# Entrar al directorio
cd PORTAFOLIO

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `src/index.css`:
```css
:root {
  --primary: #2563eb;          /* Color primario */
  --primary-dark: #1d4ed8;     /* Color primario oscuro */
  --secondary: #f1f5f9;        /* Color secundario */
  --dark: #0f172a;             /* Color oscuro */
  --text: #334155;             /* Color de texto */
}
```

### Agregar Proyectos
Modifica el array `projects` en `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    image: 'url-de-la-imagen',
    category: 'frontend', // frontend, backend, fullstack, mobile
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/tu-usuario/proyecto',
    demo: 'https://tu-demo.com'
  }
]
```

### Actualizar Habilidades
Edita el array `skillCategories` en `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, color: '#61DAFB' }
    ]
  }
]
```

## 📧 Configurar Formulario de Contacto

El formulario actual es una demo. Para hacerlo funcional, puedes:

1. **Usar Formspree**: Añade `action="https://formspree.io/f/tu-id"`
2. **Crear un API**: Desarrolla tu propio endpoint
3. **Usar Netlify Forms**: Si despliegas en Netlify
4. **Integrar EmailJS**: Para envío directo desde el frontend

## 🌐 Despliegue

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para usar la carpeta 'dist'
```

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build
- `npm run lint` - Verificar código con ESLint

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👤 Autor

**Tu Nombre**
- 🌐 Website: [tu-website.com](https://tu-website.com)
- 💼 LinkedIn: [@tu-linkedin](https://linkedin.com/in/tu-linkedin)
- 🐱 GitHub: [@tu-github](https://github.com/tu-github)
- 📧 Email: tu@email.com

---

⭐ ¡No olvides darle una estrella si te gustó el proyecto!
