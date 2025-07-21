import { Github, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return status;
    }
  };

  return (
    <div className="project-card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`${getStatusColor(project.status)} border`}>
            {getStatusText(project.status)}
          </Badge>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
              {project.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              <Tag className="w-3 h-3 mr-1" />
              {project.category}
            </Badge>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <Calendar className="w-4 h-4 mr-1" />
            {project.date}
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Detailed Description:</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2 pt-4">
            {project.githubUrl && (
              <Button size="sm" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;