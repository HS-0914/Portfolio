import { projects } from "@/data/project-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);
  const markdownTest = `
  # 제목
  **굵은 텍스트**

  - 목록 1
  - 목록 2
  - **실시간 컬러 피커**
  `;

  return (
    <section
      id="projects"
      className="py-20 px-6 text-foreground bg-gray-100 dark:bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownTest}
        </ReactMarkdown>
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          💼 Projects
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
                  {/* Projects 소개 */}
                  <Card
                    key={project.id}
                    onClick={() => setSelectedId(project.id)}
                    className="cursor-pointer hover:shadow-lg transition-shadow bg-card text-card-foreground dark:bg-gray-900/60 dark:text-white"
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
                      <p className="text-base text-muted-foreground">
                        {project.overview}
                      </p>
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
                          <Button asChild size="default" variant="outline">
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
                          <Button asChild size="default">
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
                </DialogTrigger>
                {/* Project 내용 보기 */}
                {selectedProject?.id === project.id && (
                  <DialogContent className="w-[90vw] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl text-teal-500">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription>
                        {selectedProject.period}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="prose prose-sm mt-4 dark:prose-invert mx-auto text-sm max-w-none">
                      {/* <p>{selectedProject.description}</p> */}
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {selectedProject.description}
                      </ReactMarkdown>
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
                              className="rounded-sm bg-primary/10 txt-teal-500 px-2 py-1 text-xs font-medium dark:bg-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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

export default ProjectSection;
