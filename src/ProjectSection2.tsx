import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          💼 Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white dark:bg-gray-900">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-40 object-cover rounded-t"
                />
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {project.period}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
