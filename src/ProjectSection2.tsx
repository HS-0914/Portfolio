// ProjectsSection.tsx

import { useState } from "react";
import { projects } from "@/data/project-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-20 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          💼 <span className="text-teal-500">Projects</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card
                    onClick={() => setSelectedId(project.id)}
                    className="cursor-pointer hover:shadow-lg transition-shadow bg-card text-card-foreground dark:bg-gray-900 dark:text-white"
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-t-md"
                      />
                    )}
                    <CardHeader>
                      <CardTitle className="text-teal-500">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {project.period}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-primary/10 text-teal-500 px-2 py-1 text-xs font-medium dark:bg-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                {selectedProject?.id === project.id && (
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-xl text-teal-500">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription>
                        {selectedProject.period}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-2 text-sm">
                      <p>{selectedProject.description}</p>
                      {selectedProject.roles && (
                        <div>
                          <h4 className="font-semibold mt-3">담당 역할</h4>
                          <ul className="list-disc list-inside">
                            {selectedProject.roles.map((role) => (
                              <li key={role}>{role}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold mt-3">기술 스택</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-primary/10 text-teal-500 px-2 py-1 text-xs font-medium dark:bg-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4">
                        {selectedProject.github && (
                          <Button asChild size="sm" variant="outline">
                            <a
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </a>
                          </Button>
                        )}
                        {selectedProject.demo && (
                          <Button asChild size="sm">
                            <a
                              href={selectedProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
