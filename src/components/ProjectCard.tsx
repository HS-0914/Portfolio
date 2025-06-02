import type { Project } from "@/data/project-data";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DialogTrigger } from "./ui/dialog";

type ProjectProps = {
  project: Project;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
};

const ProjectCard: React.FC<ProjectProps> = ({
  project,
  setSelectedId,
}: ProjectProps) => {
  return (
    <DialogTrigger asChild>
      {/* Projects 소개 */}
      <Card
        key={project.id}
        onClick={() => setSelectedId(project.id)}
        className="cursor-pointer hover:shadow-lg transition-shadow bg-card text-card-foreground dark:bg-gray-900/60 dark:text-white pt-0 h-full"
      >
        {project.image ? (
          <img
            src={project.image}
            className="w-full h-40 object-cover rounded-t-xl"
          />
        ) : (
          <div className="mt-0.5" />
        )}
        <CardHeader>
          <CardTitle className="text-teal-500">{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.period}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-base text-muted-foreground">{project.overview}</p>
          {project.techStack && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium dark:bg-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-3 pt-4">
            {project.github && (
              <Button
                asChild
                size="default"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Portfolio/svgs/GitHub.svg"
                    alt="GitHub"
                    className="w-4 h-4 invert dark:invert-0"
                  />
                  GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                asChild
                size="default"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600"
                >
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </DialogTrigger>
  );
};

export default ProjectCard;
