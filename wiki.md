# Project Summary
The Shadcn-UI project is a professional portfolio website for SAIANIRUTH M, showcasing expertise in AI, machine learning, deep learning, and software engineering. It engages potential employers and collaborators by presenting skills, projects, and a professional background through a modern, responsive interface. The site utilizes Shadcn-UI components, TypeScript, and Tailwind CSS, featuring interactive elements for project displays, including key achievements for enhanced context.

# Project Module Description
- **Hero Section**: Introduces SAIANIRUTH with links to GitHub, LinkedIn, and Medium.
- **About Me Section**: Summarizes SAIANIRUTH's professional journey and goals.
- **Experience Section**: Lists roles at 5C Network, including publications and key achievements.
- **Skills Section**: Categorizes updated technical skills.
- **Projects Section**: Features professional and personal projects, including key achievements for each project.
- **Education Section**: Displays academic qualifications.
- **Leadership & Activities Section**: Highlights leadership roles and fellowships.
- **Contact Section**: Provides a contact form for inquiries.
- **Footer**: Contains social links and copyright information.

# Directory Tree
```
shadcn-ui/
├── README.md                  # Project overview and instructions
├── components.json            # JSON file for component configurations
├── eslint.config.js           # ESLint configuration file
├── index.html                 # Main HTML file for the portfolio
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration for styles
├── public/                    # Static assets
│   ├── assets/                # Images and icons
│   └── favicon.svg            # Favicon for the site
├── src/                       # Source code
│   ├── App.css                # Global styles
│   ├── App.tsx                # Main application component
│   ├── components/            # Reusable UI components
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Data management and utilities
│   ├── pages/                 # Page components
│   ├── skills-data.ts         # Skills data structure
│   ├── experience-data.ts      # Experience data structure
│   ├── projects-data.ts       # Projects data structure, including achievements
│   └── main.tsx               # Entry point for React application
└── vite.config.ts             # Vite configuration for building the project
```

# File Description Inventory
- **README.md**: Overview of the project and setup instructions.
- **index.html**: Main HTML structure for the portfolio.
- **App.tsx**: Root component that sets up routing and context providers.
- **ProjectCard.tsx**: Component for displaying project details, now includes key achievements.
- **ContactForm.tsx**: Component for the contact form functionality.
- **experience-data.ts**: Data structure containing updated work experience, publications, and achievements.
- **projects-data.ts**: Data structure for professional and personal projects, including achievements.

# Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Styling**: Shadcn-UI components
- **State Management**: React Context API
- **Data Fetching**: React Query
- **Deployment**: Static site hosting

# Usage
1. **Install Dependencies**: Run `pnpm install` in the project directory.
2. **Build the Project**: Use `pnpm run build` to compile the project.
3. **Run Linter**: Execute `pnpm run lint` to check for code quality.
4. **Start Development**: Use `pnpm run dev` to start the development server.
