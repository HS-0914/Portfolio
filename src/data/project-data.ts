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
    title: "📜 포트폴리오 웹사이트",
    period: "2025.05.16 - 2025.05.28",
    overview:
      "React와 TailwindCSS를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형, 다크모드, 프로젝트 소개 등을 포함합니다.",
    descriptionPath: "/Portfolio/readme/Portfolio_README.md",
    techStack: ["React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    github: "https://github.com/HS-0914/Portfolio",
    image:
      "https://github.com/user-attachments/assets/ae5e11f9-35b2-41c7-860a-01f111fc12b5",
  },
  {
    id: "KolorPicker",
    title: "🎨 KolorPicker - 색상 추출 & 팔레트 관리 유틸리티",
    period: "2025.05.07 - 2025.05.16",
    overview:
      "KolorPicker(Kosta + Color Picker)는 C# WinForms로 개발된 유틸리티 앱으로, 색상 추출과 팔레트 관리를 제공합니다.",
    descriptionPath: "/Portfolio/readme/KolorPicker_README.md",
    techStack: ["C#", "Windows Forms (.NET Framework)"],
    github: "https://github.com/HS-0914/KolorPicker",
    demo: "https://github.com/HS-0914/KolorPicker/releases",
    image:
      "https://github.com/user-attachments/assets/866a3083-87de-4275-8933-cf4afba7739a",
  },
  {
    id: "H-nawa",
    title: "🖥️ H_nawa - PC 부품 크롤링 & 견적 구성 서비스",
    period: "2025.04.24 - 2025.04.30",
    overview:
      "H_nawa는 크롤링된 부품 정보를 기반으로 사용자가 원하는 조합으로 PC 견적을 구성할 수 있는 서비스입니다.",
    descriptionPath: "/Portfolio/readme/H-nawa_README.md",
    techStack: [
      "Python",
      "FastAPI",
      "HTML",
      "JavaScript",
      "TailwindCSS",
      "Docker",
    ],
    github: "https://github.com/HS-0914/H_nawa",
    demo: "https://hs-0914.github.io/H_nawa/",
    image:
      "https://private-user-images.githubusercontent.com/134225438/439021995-b43b16bb-8058-42f4-89a4-97803e719dae.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg4Mjc0ODAsIm5iZiI6MTc0ODgyNzE4MCwicGF0aCI6Ii8xMzQyMjU0MzgvNDM5MDIxOTk1LWI0M2IxNmJiLTgwNTgtNDJmNC04OWE0LTk3ODAzZTcxOWRhZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYwMlQwMTE5NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xOGQ0N2VkMjcyZGQxNmQyNjJmN2E0MzliZGE4OWNjMDg5NjRmYTM2OTMwY2U3YzhkZTI1Nzc3ZjYyNjYyMzJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XWwMRV404du6j_1ay7Z65tjaL7NgbKNIOc1Cq5diDgY",
  },
  {
    id: "ChessTS",
    title: "♟️ ChessTS - 체스 게임 & 퍼즐 플레이 웹앱",
    period: "2025.04.14 - 2025.04.23",
    overview:
      "이전 프로젝트(ChessJS)에서 불편했던 코드 구조를 React와 TypeScript를 통해 개선하고 다른 사람들과 1:1 대결 및 경기 기록 저장 기능을 추가한 프로젝트입니다.",
    descriptionPath: "/Portfolio/readme/ChessTS_README.md",
    techStack: ["React", "TypeScript", "Socket.IO", "TailwindCSS"],
    github: "https://github.com/HS-0914/ChessTS",
    demo: "https://hs-0914.github.io/ChessTS",
    image:
      "https://github.com/user-attachments/assets/d6ed6696-6759-4b8a-82a0-5634a615a897",
  },
  {
    id: "ChessJS",
    title: "♟️ ChessJS - 웹 기반 체스 게임 & 퍼즐 플레이",
    period: "2025.03.31 - 2025.04.09",
    overview:
      "웹 기반의 체스 게임으로, 사용자가 체스 엔진과 1:1 대국을 하거나 체스 퍼즐을 풀 수 있는 기능을 제공합니다.",
    descriptionPath: "/Portfolio/readme/ChessJS_README.md",
    techStack: ["HTML", "JavaScript", "jQuery", "Bootstrap", "CSS"],
    github: "https://github.com/HS-0914/ChessJS",
    demo: "https://hs-0914.github.io/ChessJS",
    image:
      "https://github.com/user-attachments/assets/d6ed6696-6759-4b8a-82a0-5634a615a897",
  },
];
