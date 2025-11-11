# Achievement Showcase Site

Portfolio personal y CV interactivo de Agustín Gelos, Software Engineer con 4+ años de experiencia en desarrollo full-stack.

## 🌐 Sitio en vivo

**URL**: [https://jAgusGelos.github.io/achievement-showcase-site/](https://jAgusGelos.github.io/achievement-showcase-site/)

## ✨ Características

- **Portfolio Interactivo**: Showcase de proyectos y logros profesionales
- **Experiencia Profesional**: Detalle de proyectos y tecnologías utilizadas
- **Galería de Proyectos**: Visualización de trabajos realizados con screenshots
- **Información de Contacto**: Formulario y enlaces de contacto
- **Internacionalización**: Soporte para múltiples idiomas (español/inglés)
- **Diseño Moderno**: UI responsiva con Tailwind CSS y shadcn/ui
- **Tema Oscuro**: Compatible con modo claro y oscuro

## 🛠️ Tecnologías

Este proyecto está construido con:

- **Vite** - Build tool y dev server
- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Componentes UI
- **i18next** - Internacionalización
- **React Router** - Navegación

## 🚀 Desarrollo Local

### Prerequisitos

- Node.js 20+ y npm instalados - [instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Instalación

```sh
# Clonar el repositorio
git clone https://github.com/jAgusGelos/achievement-showcase-site.git

# Navegar al directorio del proyecto
cd achievement-showcase-site

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:8080`

## 📦 Scripts Disponibles

```sh
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Build
npm run build        # Build de producción
npm run build:dev    # Build en modo desarrollo

# Preview
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecuta el linter
```

## 🚢 Deployment

El sitio se despliega automáticamente a GitHub Pages mediante GitHub Actions cuando se hace push a la rama `main`.

El workflow de deployment:
1. Instala dependencias
2. Ejecuta el build de producción
3. Despliega a GitHub Pages

Ver el workflow completo en `.github/workflows/deploy.yml`

## 📂 Estructura del Proyecto

```
achievement-showcase-site/
├── src/
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes UI de shadcn
│   │   ├── Hero.tsx    # Sección Hero
│   │   ├── About.tsx   # Sección Acerca de
│   │   ├── Experience.tsx  # Experiencia profesional
│   │   ├── Projects.tsx    # Proyectos
│   │   └── Contact.tsx     # Contacto
│   ├── i18n/           # Configuración de internacionalización
│   ├── pages/          # Páginas de la aplicación
│   └── App.tsx         # Componente principal
├── public/             # Assets estáticos
└── screenshots-*/      # Screenshots de proyectos
```

## 👨‍💻 Autor

**Agustín Gelos**
- Email: agelos@itba.edu.ar
- LinkedIn: [agustin-gelos](https://www.linkedin.com/in/agustin-gelos)
- GitHub: [agustin-gelos](https://github.com/agustin-gelos)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
