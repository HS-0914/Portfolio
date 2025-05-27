export type Project = {
  id: string;
  title: string;
  period: string;
  teamSize?: number;
  roles?: string[];
  overview: string;
  descriptionPath: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "Portfolio",
    title: "포트폴리오 웹사이트",
    period: "2025.05.16 - 2025.05.28",
    teamSize: 1,
    overview:
      "React와 TailwindCSS를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형, 다크모드, 프로젝트 소개 등을 포함합니다.",
    descriptionPath: "",
    techStack: ["React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    github: "https://github.com/HS-0914/Portfolio",
    image:
      "https://github.com/user-attachments/assets/d6ed6696-6759-4b8a-82a0-5634a615a897",
  },
  {
    id: "KolorPicker",
    title: "🎨 KolorPicker - 색상 추출 & 팔레트 관리 유틸리티",
    period: "2025.05.07 - 2025.05.16",
    overview:
      "KolorPicker(Kosta + Color Picker)는 C# WinForms로 개발된 유틸리티 앱으로, 색상 추출과 팔레트 관리를 제공합니다.",
    descriptionPath: "/readme/KolorPicker_README.md",
    techStack: ["C#", "Windows Forms (.NET Framework)"],
    github: "https://github.com/HS-0914/KolorPicker",
    demo: "https://github.com/HS-0914/KolorPicker/releases",
    image:
      "https://github.com/user-attachments/assets/866a3083-87de-4275-8933-cf4afba7739a",
  },
  {
    id: "ChessTS",
    title: "♟️ ChessTS - 체스 게임 & 퍼즐 플레이 웹앱 ",
    period: "2025.05.07 - 2025.05.16",
    overview:
      "이전 프로젝트(ChessJS)에서 불편했던 코드 구조를 React와 TypeScript를 통해 개선하고 다른 사람들과 1:1 대결 및 경기 기록 저장 기능을 추가한 프로젝트입니다.",
    descriptionPath: "/readme/ChessTS_README.md",
    techStack: ["React", "Typescript", "Socket.IO", "TailwindCSS"],
    github: "https://github.com/HS-0914/ChessTS",
    demo: "https://hs-0914.github.io/ChessTS",
    image:
      "https://github.com/user-attachments/assets/d6ed6696-6759-4b8a-82a0-5634a615a897",
  },
];
