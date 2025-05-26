export type Project = {
  id: string;
  title: string;
  period: string;
  teamSize?: number;
  roles?: string[];
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "포트폴리오 웹사이트",
    period: "2024.12 - 2025.01",
    teamSize: 1,
    roles: ["기획", "디자인", "프론트엔드 개발"],
    description:
      "React와 TailwindCSS를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형, 다크모드, 프로젝트 소개 등을 포함합니다.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite", "shadcn/ui"],
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourname.dev",
    image: "/images/portfolio.png",
  },
  {
    id: "todo-app",
    title: "할 일 관리 앱",
    period: "2024.09",
    description:
      "할 일을 추가/삭제/완료 체크할 수 있는 간단한 SPA Todo 앱입니다.",
    techStack: ["React", "Zustand", "TailwindCSS"],
    github: "https://github.com/yourname/todo-app",
  },
];
