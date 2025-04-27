import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardHeader className="pb-4 bg-primary/5">
        <CardTitle className="text-primary text-xl font-semibold">{project.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed pt-1">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className='rounded-full px-3 py-1 text-xs'>{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-4 pb-4 border-t bg-secondary/30">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="rounded-full text-xs">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
              <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub
            </a>
          </Button>
        )}
        {project.liveUrl && project.liveUrl !== "#" && ( // Only show if a valid live URL exists
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-xs" asChild>
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
