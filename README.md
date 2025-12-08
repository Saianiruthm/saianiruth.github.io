# SAIANIRUTH M - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and technical skills in AI/ML and software engineering.

## 🚀 Live Demo

Visit the live portfolio: saianiruth.me

## 📋 Overview

This portfolio website features:

- **Professional Experience**: Detailed work history at 5C Network with key achievements in medical imaging AI
- **Technical Skills**: Comprehensive display of AI/ML, software engineering, and data science capabilities
- **Projects Showcase**: 
  - 30+ professional projects in medical imaging, clinical workflows, and intelligent automation
  - 25+ personal projects spanning AI/ML, data analytics, and software engineering
- **Research Publication**: Featured arXiv publication on automated shoulder fracture detection
- **Interactive UI**: Dark/light mode toggle, smooth navigation, and responsive design
- **Contact Form**: Direct communication channel with form validation

## 🛠️ Technology Stack

Built with modern web technologies:

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (pre-configured)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation

## 📁 Project Structure

```
shadcn-ui/
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── ContactForm.tsx
│   │   └── ProjectCard.tsx
│   ├── lib/
│   │   ├── experience-data.ts
│   │   ├── projects-data.ts
│   │   └── skills-data.ts
│   ├── pages/
│   │   └── Index.tsx    # Main portfolio page
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Key Features

### Responsive Design
- Mobile-first approach with breakpoints for tablet and desktop
- Collapsible mobile navigation menu
- Optimized layouts for all screen sizes

### Interactive Sections
- **Hero Section**: Eye-catching introduction with social links
- **About Me**: Three-card layout explaining background and motivation
- **Experience**: Detailed work history with achievements and technologies
- **Skills**: Categorized technical skills with badge display
- **Projects**: Tabbed interface with accordion categories and achievement highlights
- **Education**: Academic background with institution details
- **Leadership**: Extracurricular activities and fellowships
- **Contact**: Functional contact form with validation

### Dark Mode Support
- System preference detection
- Manual toggle with persistent state
- Smooth theme transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd shadcn-ui
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
```

## 📝 Customization

### Update Personal Information

1. **Experience Data** (`src/lib/experience-data.ts`):
   - Update company, roles, highlights, and technologies
   - Modify publication details
   - Update education information

2. **Projects Data** (`src/lib/projects-data.ts`):
   - Add/remove professional and personal projects
   - Update descriptions, technologies, and achievements
   - Add project URLs and showcase links

3. **Skills Data** (`src/lib/skills-data.ts`):
   - Modify skill categories and items
   - Add new technical competencies

4. **Contact Information** (`src/pages/Index.tsx`):
   - Update social media links (GitHub, LinkedIn, Medium)
   - Modify email address in footer

### Styling

- **Global Styles**: Edit `src/index.css`
- **Tailwind Configuration**: Modify `tailwind.config.js`
- **Component Styles**: Use Tailwind utility classes in components

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation items in the `navItems` array

## 🎯 Project Highlights

### Professional Projects
- **Medical Imaging AI**: 22+ production-grade models with 98%+ accuracy
- **Clinical Workflows**: End-to-end systems for radiology and ICU care
- **Intelligent Automation**: LLM-powered systems for recruitment and diagnostics

### Personal Projects
- **AI/ML**: Deep learning pipelines, computer vision, NLP applications
- **Data Analytics**: Visualization dashboards, time series forecasting
- **Software Engineering**: Full-stack applications, automation tools

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: saianiruth2804@gmail.com
- **LinkedIn**: [linkedin.com/in/saianiruth-m](https://linkedin.com/in/saianiruth-m)
- **GitHub**: [github.com/Saianiruthm](https://github.com/Saianiruthm)
- **Medium**: [@sai2804aniruth](https://medium.com/@sai2804aniruth)

---

Built with ❤️ using React, TypeScript, and shadcn/ui
