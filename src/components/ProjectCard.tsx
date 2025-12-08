import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Github, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  liveUrl?: string;
  showcaseUrl?: string;
  category: 'professional' | 'personal';
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  achievements,
  showcaseUrl,
  liveUrl,
  category 
}: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl flex-1">{title}</CardTitle>
          {category === 'professional' && showcaseUrl && (
            <a
              href={showcaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
              aria-label="View showcase"
            >
              <Eye className="h-5 w-5" />
            </a>
          )}
          {category === 'personal' && liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between gap-4">
        {achievements && achievements.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Key Achievements</h4>
            <ul className="space-y-1.5">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}