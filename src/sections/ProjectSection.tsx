import { projects } from "@/data/project-data";
import { motion } from "motion/react";
import { useState } from "react";
import { Dialog } from "../components/ui/dialog";
import ProjectCard from "@/components/ProjectCard";
import ProjectDialog from "@/components/ProjectDialog";

const ProjectSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);
  return (
    <section
      id="projects"
      className="py-20 px-6 text-foreground bg-gray-100 dark:bg-background"
    >
      <div className="max-w-7xl mx-auto">
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
                {/* Projects 소개 */}
                <ProjectCard project={project} setSelectedId={setSelectedId} />

                {/* Project 내용 보기 */}
                {selectedProject?.id === project.id && (
                  <ProjectDialog selected={selectedProject} />
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
