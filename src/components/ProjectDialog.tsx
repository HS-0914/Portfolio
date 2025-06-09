import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import type { Project } from "@/data/project-data";

type SelectedProps = {
  selected: Project;
};

const ProjectDialog: React.FC<SelectedProps> = ({
  selected,
}: SelectedProps) => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(selected.descriptionPath)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setMarkdown("");
      });
  }, [selected.descriptionPath]);

  return (
    <DialogContent className="!max-w-3xl mx-auto">
      <div className="flex flex-col mt-5 max-h-[80vh] overflow-y-auto px-4">
        <DialogHeader>
          <DialogTitle className="text-xl text-teal-500">
            {selected.title}
          </DialogTitle>
          <DialogDescription>{selected.period}</DialogDescription>
        </DialogHeader>
        <div className="prose dark:prose-invert text-base">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-500" />
            </div>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {markdown}
            </ReactMarkdown>
          )}
          {selected.roles && (
            <div>
              <h4 className="font-semibold mt-3">담당 역할</h4>
              <ul className="list-disc list-inside">
                {selected.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="font-semibold mt-3">기술 스택</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {selected.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm bg-primary/10 px-2 py-1 text-xs font-medium dark:bg-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ProjectDialog;
