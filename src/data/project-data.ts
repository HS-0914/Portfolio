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
      "https://github.com/user-attachments/assets/b43b16bb-8058-42f4-89a4-97803e719dae",
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
  {
    id: "Overwatch_clone",
    title: "🕹️ 오버워치 홈페이지 클론",
    period: "2025.03.31 - 2025.04.09",
    overview:
      "HTML과 CSS를 활용하여 오버워치 공식 홈페이지의 디자인을 따라한 웹 페이지입니다.",
    descriptionPath: "/Portfolio/readme/Overwatch_clone_README.md",
    techStack: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/HS-0914/Overwatch_clone",
    demo: "https://hs-0914.github.io/Overwatch_clone/",
    image:
      "https://github.com/user-attachments/assets/3a867305-6700-4429-9fc5-2826292153fb",
  },
  {
    id: "Booklend",
    title: "📚 Nestjs 연습 프로젝트 - 도서 관리 시스템",
    period: "2024.08 - 2025.01",
    overview:
      "도서를 등록, 검색, 대출, 예약할 수 있는 API 서비스입니다. NestJS 공부 목적을 위해 프로젝트를 진행하였습니다.",
    descriptionPath: "/Portfolio/readme/Booklend_README.md",
    techStack: ["NestJS", "PostgreSQL", "Redis", "Docker", "Nginx", "EC2"],
    github: "https://github.com/HS-0914/booklend",
    image:
      "https://github.com/user-attachments/assets/cd212fae-b2ef-4a98-a444-9421445d6488",
  },
  {
    id: "Walkway",
    title: "🚍 안양대 졸업작품 - 산책로",
    period: "2024.08 - 2025.01",
    overview:
      "정류장, 역의 도착시간와 길찾기 정보를 확인할 수 있는 어플리케이션입니다.",
    descriptionPath: "/Portfolio/readme/Walkway_README.md",
    techStack: ["App Inventor", "express", "JavaScript"],
    github: "https://github.com/HS-0914/Walkway",
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Fb3967e72-9ce1-4a81-b190-f3fe72a40997%2F7d86298d-914c-43ab-b318-43e3e3c3108e%2F%EA%B7%B8%EB%A6%BC1.jpg/size/w=1920?exp=1749285738&sig=FyndV9HNaPZlYai2YSS5l3zbUqbk0mWa8d3nVnNlEb4&id=1f55097b-7c3a-810a-b382-c1e4da57d4ee&table=block",
  },
  {
    id: "Chimpanzee",
    title: "🔧 한국폴리텍대학 졸업작품 - 침팬지 가스락",
    period: "2024.08 - 2025.01",
    overview:
      "정류장, 역의 도착시간와 길찾기 정보를 확인할 수 있는 어플리케이션입니다.",
    descriptionPath: "/Portfolio/readme/Chimpanzee_README.md",
    techStack: ["Flutter", "Dart", "express", "JavaScript", "C++"],
    github: "https://github.com/HS-0914/chimpanzee-gaslock",
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Fb3967e72-9ce1-4a81-b190-f3fe72a40997%2F32296d8f-042e-43ce-9ab5-1e2a1f246cdd%2F%EA%B7%B8%EB%A6%BC2.png/size/w=1920?exp=1749287401&sig=YSnfEM3LhxEMtnLjpftdCI1MIaaqPHBNc8P0dmkKjbg&id=1f55097b-7c3a-8150-85f1-ffe80f4a03cc&table=block",
  },
];
