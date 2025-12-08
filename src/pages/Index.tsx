import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { ContactForm } from '@/components/ContactForm'
import { ProjectCard } from '@/components/ProjectCard'
import { experienceData, educationData } from '@/lib/experience-data'
import { professionalProjects, personalProjects } from '@/lib/projects-data'
import { skillsData } from '@/lib/skills-data'
import { Github, Linkedin, Mail, MapPin, Award, Briefcase, GraduationCap, Users, Code2, Cpu, Menu, X, BookOpen, Target, Lightbulb, Rocket } from 'lucide-react'

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            SAIANIRUTH M
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 shadow-lg animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/assets/hero-abstract-ai.jpg)' }}
        />
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAIANIRUTH M
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Software Engineer/ Data Scientist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building intelligent systems that solve real-world problems through 
              cutting-edge AI, machine learning, and robust software engineering practices.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Saianiruthm" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/saianiruth-m" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://medium.com/@sai2804aniruth" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5 mr-2" />
                Medium
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bridging cutting-edge AI research with practical, production-ready solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Image Column */}
              <div className="lg:col-span-1">
                <div 
                  className="h-64 lg:h-full min-h-[300px] bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: 'url(/assets/data-science-workspace.jpg)' }}
                />
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Who I Am */}
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Target className="h-5 w-5 text-primary" />
                      Who I Am
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate <strong>AI Scientist and Software Engineer</strong> specializing in 
                      intelligent systems that bridge research and real-world applications. My focus is on 
                      <strong> machine learning, deep learning, and data science</strong> solutions that 
                      deliver measurable impact.
                    </p>
                  </CardContent>
                </Card>

                {/* What I Do */}
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      What I Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      At <strong>5C Network</strong>, I've contributed to groundbreaking medical imaging AI research:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Developed ensemble deep learning systems for automated fracture detection</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Combined rigorous engineering practices with innovative AI methodologies</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Created scalable, production-ready ML solutions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* What Drives Me */}
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Rocket className="h-5 w-5 text-primary" />
                      What Drives Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm driven by AI's potential to transform industries and improve lives. Whether building 
                      robust ML pipelines, conducting research, or developing software applications, I deliver 
                      <strong> impact-driven work</strong> that pushes technological boundaries.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Briefcase className="h-8 w-8" />
              Experience
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">{experienceData.company}</CardTitle>
                  <CardDescription className="text-lg">{experienceData.location}</CardDescription>
                </div>
                <div 
                  className="w-32 h-32 bg-contain bg-center bg-no-repeat rounded-lg"
                  style={{ backgroundImage: 'url(/assets/5c-network.png)' }}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {experienceData.roles.map((role, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <CardDescription>{role.period} • {role.type}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Key Achievements & Responsibilities</h3>
                <div className="grid gap-3">
                  {experienceData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {experienceData.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Research Publication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">{experienceData.publication.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">DOI: {experienceData.publication.doi}</p>
                  <p className="text-sm">{experienceData.publication.description}</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Code2 className="h-8 w-8" />
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI/ML, software engineering, data science, and cloud infrastructure
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skillsData).map(([category, skills]) => (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-primary" />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive showcase of professional work and personal projects spanning AI, 
              machine learning, data science, and software engineering.
            </p>
          </div>

          <Tabs defaultValue="professional" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="professional">Professional Projects</TabsTrigger>
              <TabsTrigger value="personal">Personal Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="professional" className="mt-8">
              <Accordion type="single" collapsible className="space-y-4">
                {Object.entries(professionalProjects).map(([category, projects]) => (
                  <AccordionItem key={category} value={category} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      {category} ({projects.length} projects)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            achievements={project.achievements}
                            liveUrl={project.liveUrl}
                            showcaseUrl={project.showcaseUrl}
                            category="professional"
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="personal" className="mt-8">
              <Accordion type="single" collapsible className="space-y-4">
                {Object.entries(personalProjects).map(([category, projects]) => (
                  <AccordionItem key={category} value={category} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      {category} ({projects.length} projects)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            achievements={project.achievements}
                            liveUrl={project.url}
                            showcaseUrl={project.url}
                            category="personal"
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="h-8 w-8" />
              Education
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">{educationData.institution}</CardTitle>
                  <CardDescription className="text-lg flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4" />
                    {educationData.location}
                  </CardDescription>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div 
                    className="w-24 h-24 bg-contain bg-center bg-no-repeat rounded-lg"
                    style={{ backgroundImage: 'url(/assets/gct-coimbatore.png)' }}
                  />
                  <Badge variant="secondary" className="text-base px-4 py-2">
                    GPA: {educationData.gpa}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-lg font-semibold">{educationData.degree}</p>
                <p className="text-muted-foreground">{educationData.period}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section id="leadership" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Users className="h-8 w-8" />
              Leadership & Activities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Training & Placement Coordinator
                </CardTitle>
                <CardDescription>December 2022 – April 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led training and placement activities, coordinating between students and industry partners. 
                  Organized skill development workshops, career guidance sessions, and facilitated recruitment 
                  processes to enhance student employability and industry readiness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Data Science & ML Fellow
                </CardTitle>
                <CardDescription>HyperVerge Academy • August 2023 – December 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Selected for an intensive fellowship program focusing on advanced data science and machine learning 
                  techniques. Completed specialized training in computer vision, deep learning frameworks, and 
                  industry-standard ML practices while working on real-world projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 bg-muted mt-auto border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} SAIANIRUTH M. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a 
                href="https://github.com/Saianiruthm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/saianiruth-m" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://medium.com/@sai2804aniruth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Medium</span>
              </a>
              <a 
                href="mailto:saianiruth2804@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}