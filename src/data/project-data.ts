export type Project = {
  id: string;
  title: string;
  period: string;
  teamSize?: number;
  roles?: string[];
  overview: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "Portfolio",
    title: "포트폴리오 웹사이트",
    period: "2025.05.16 - 2025.05.28",
    teamSize: 1,
    overview:
      "React와 TailwindCSS를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형, 다크모드, 프로젝트 소개 등을 포함합니다.",
    description:
      "React와 TailwindCSS를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형, 다크모드, 프로젝트 소개 등을 포함합니다.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite", "shadcn/ui"],
    github: "https://github.com/HS-0914/Portfolio",
    // demo: "https://yourname.dev",
    // image: "/images/portfolio.png",
  },
  {
    id: "KolorPicker",
    title: "KolorPicker - 색상 추출 & 팔레트 관리 유틸리티",
    period: "2025.05.07 - 2025.05.16",
    overview:
      "KolorPicker(Kosta + Color Picker)는 C# WinForms로 개발된 유틸리티 앱으로, 색상 추출과 팔레트 관리를 제공합니다.",
    description: `## **🎨** 프로젝트 소개

**KolorPicker**는 Windows 환경에서 마우스 커서의 **색상을 추출**하고 추출한 색상을 **팔레트로 저장 및 관리**할 수 있는 데스크톱 애플리케이션입니다. 사용자는 화면 어디서든지 단축키로 **KolorPicker**를 활성화해 **색상 값을 확인**할 수 있으며, 선택한 색상들을 HEX/RGB 코드와 함께 팔레트에 모아둘 수 있습니다.

## 🧩 주요 기능

- **실시간 컬러 피커**
- **화면 돋보기 기능 제공**
- **HEX/RGB 코드 표시 및 클립보드 복사**
- **팔레트 색상 저장 & 불러오기**
- **전역 단축키 지원 및 트레이 아이콘 실행**

      `,
    techStack: ["React", "Zustand", "TailwindCSS"],
    github: "https://github.com/yourname/todo-app",
    demo: "https://yourname.dev",
  },
];
