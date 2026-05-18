import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { ContactForm } from '@/components/ContactForm'
import { ProjectCard } from '@/components/ProjectCard'
import { BackToTop } from '@/components/BackToTop'
import { experienceData, educationData, publicationData } from '@/lib/experience-data'
import { professionalProjects, personalProjects, type Project } from '@/lib/projects-data'
import { skillsData } from '@/lib/skills-data'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Code2,
  Cpu,
  Menu,
  X,
  BookOpen,
  Target,
  Lightbulb,
  Rocket,
  Search,
  ExternalLink,
  Sparkles,
} from 'lucide-react'

const professionalProjectsEntries = Object.entries(professionalProjects)
const personalProjectsEntries = Object.entries(personalProjects)

const featuredProjects: Project[] = [
  ...Object.values(professionalProjects).flat(),
  ...Object.values(personalProjects).flat(),
].filter((p) => p.featured)

const heroStats = [
  { value: '24+', label: 'Production Models' },
  { value: '1.6M+', label: 'Images Indexed' },
  { value: '40', label: 'Pathologies' },
  { value: '1', label: 'Publication' },
]

const filterTags = ['PyTorch', 'YOLO', 'Gemini', 'Detection', 'VLM', 'FastAPI'] as const

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Publication', id: 'publication' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

function matchesQuery(project: Project, query: string, tag: string | null) {
  const q = query.trim().toLowerCase()
  const haystack = [
    project.title,
    project.description,
    ...(project.technologies ?? []),
    ...(project.achievements ?? []),
  ]
    .join(' ')
    .toLowerCase()
  if (q && !haystack.includes(q)) return false
  if (tag && !haystack.includes(tag.toLowerCase())) return false
  return true
}

function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    document.body.classList.add('js-revealing')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [projectQuery, setProjectQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useScrollReveal()

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }, [])

  const filteredProfessional = useMemo(
    () =>
      professionalProjectsEntries
        .map(([category, projects]) => [category, projects.filter((p) => matchesQuery(p, projectQuery, activeTag))] as const)
        .filter(([, projects]) => projects.length > 0),
    [projectQuery, activeTag],
  )

  const filteredPersonal = useMemo(
    () =>
      personalProjectsEntries
        .map(([category, projects]) => [category, projects.filter((p) => matchesQuery(p, projectQuery, activeTag))] as const)
        .filter(([, projects]) => projects.length > 0),
    [projectQuery, activeTag],
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b' : 'bg-background/40 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div
            className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            SAIANIRUTH M
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ModeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 shadow-lg animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-2">
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

      {/* Hero Section — light, gradient, stats strip */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-20 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.10),transparent_50%)]" />

        <div className="relative z-10 text-center space-y-10 px-4 max-w-5xl mx-auto">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              Available for AI Scientist roles
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent leading-[1.05]">
              SAIANIRUTH M
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">AI Scientist</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Medical imaging AI scientist building production CXR diagnostic systems, vision-language models, and
              rotation-aware clinical decision logic. Shipping research-grade work to real radiology workflows.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-2">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-primary/15 bg-card/60 backdrop-blur-sm px-4 py-3 text-center hover:border-primary/40 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="default" size="lg" asChild>
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
            <Button variant="outline" size="lg" asChild>
              <a href={publicationData.link} target="_blank" rel="noopener noreferrer">
                <Award className="h-5 w-5 mr-2" />
                Publication
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-muted/40" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bridging cutting-edge AI research with practical, production-ready solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="h-64 lg:h-full min-h-[300px] relative rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/assets/data-science-workspace.webp"
                    alt="Data Science Workspace"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Target className="h-5 w-5 text-primary" />
                      Who I Am
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate <strong>AI Scientist</strong> specializing in intelligent systems that bridge
                      research and real-world applications. My focus is on{' '}
                      <strong>machine learning, deep learning, and data science</strong> solutions that deliver
                      measurable impact.
                    </p>
                  </CardContent>
                </Card>

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
                        <span>Productionized CXR analysis into Windows desktop + Linux web deployments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Rocket className="h-5 w-5 text-primary" />
                      What Drives Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm driven by AI's potential to transform industries and improve lives. Whether building robust ML
                      pipelines, conducting research, or developing software applications, I deliver{' '}
                      <strong>impact-driven work</strong> that pushes technological boundaries.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Briefcase className="h-8 w-8 text-primary" />
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
                <img
                  src="/assets/5c-network.webp"
                  alt="5C Network Logo"
                  loading="lazy"
                  className="w-32 h-32 object-contain rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {experienceData.roles.map((role, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <CardDescription>
                        {role.period} • {role.type}
                      </CardDescription>
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
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Publication Section */}
      <section id="publication" className="py-20 bg-muted/40" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              Publication
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Peer-reviewed research from production work</p>
          </div>

          <Card className="max-w-4xl mx-auto border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <Badge variant="secondary" className="mb-2">
                    {publicationData.journal} • {publicationData.year}
                  </Badge>
                  <CardTitle className="text-xl md:text-2xl leading-tight">{publicationData.title}</CardTitle>
                  <CardDescription className="mt-2">{publicationData.authors}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{publicationData.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {publicationData.keywords.map((kw) => (
                  <Badge key={kw} variant="outline" className="text-xs">
                    {kw}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button asChild>
                  <a href={publicationData.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read on arXiv
                  </a>
                </Button>
                <span className="text-xs text-muted-foreground">DOI: {publicationData.doi}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI/ML, software engineering, data science, and cloud infrastructure
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skillsData).map(([category, skills]) => (
                <Card key={category} className="hover:shadow-lg hover:border-primary/40 transition-all">
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
      <section id="projects" className="py-20 bg-muted/40" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of production AI work and personal projects across medical imaging, vision-language models,
              and engineering systems.
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="max-w-6xl mx-auto mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Featured Work</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    achievements={project.achievements}
                    liveUrl={project.url}
                    showcaseUrl={project.showcaseUrl}
                    blogUrl={project.blogUrl}
                    category="professional"
                    featured
                  />
                ))}
              </div>
            </div>
          )}

          {/* Search + filter */}
          <div className="max-w-6xl mx-auto mb-6 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects by title, technology, or keyword..."
                value={projectQuery}
                onChange={(e) => setProjectQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground mr-1">Filter:</span>
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    activeTag === tag
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-foreground/80 border-border hover:border-primary/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
              {(projectQuery || activeTag) && (
                <button
                  onClick={() => {
                    setProjectQuery('')
                    setActiveTag(null)
                  }}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <Tabs defaultValue="professional" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="professional">Professional Projects</TabsTrigger>
              <TabsTrigger value="personal">Personal Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="professional" className="mt-8">
              {filteredProfessional.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No projects match your search.</p>
              ) : (
                <Accordion type="single" collapsible defaultValue={filteredProfessional[0][0]} className="space-y-4">
                  {filteredProfessional.map(([category, projects]) => (
                    <AccordionItem key={category} value={category} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-lg font-semibold">
                        {category} ({projects.length} project{projects.length === 1 ? '' : 's'})
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
                              blogUrl={project.blogUrl}
                              category="professional"
                            />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </TabsContent>

            <TabsContent value="personal" className="mt-8">
              {filteredPersonal.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No projects match your search.</p>
              ) : (
                <Accordion type="single" collapsible defaultValue={filteredPersonal[0][0]} className="space-y-4">
                  {filteredPersonal.map(([category, projects]) => (
                    <AccordionItem key={category} value={category} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-lg font-semibold">
                        {category} ({projects.length} project{projects.length === 1 ? '' : 's'})
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
                              blogUrl={project.blogUrl}
                              category="personal"
                            />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
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
                  <img
                    src="/assets/gct-coimbatore.png"
                    alt="GCT Coimbatore Logo"
                    loading="lazy"
                    className="w-24 h-24 object-contain rounded-lg"
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
      <section id="leadership" className="py-20 bg-muted/40" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              Leadership & Activities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Training & Placement Coordinator
                </CardTitle>
                <CardDescription>December 2022 – April 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led training and placement activities, coordinating between students and industry partners. Organized
                  skill development workshops, career guidance sessions, and facilitated recruitment processes to
                  enhance student employability and industry readiness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
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

      <ContactForm />

      <BackToTop />

      <footer className="py-8 bg-muted mt-auto border-t pb-24 md:pb-8">
        <div className="container mx-auto px-4 md:pr-24">
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
