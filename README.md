# 📜 포트폴리오 웹사이트

> React와 TypeScript, TailwindCSS를 활용하여 제작된 개인 포트폴리오 사이트입니다. 프로젝트 소개, 기술 스택, 다크모드 지원 및 반응형 디자인 등을 구현하였습니다.

## 🤔 개발 배경

자신만의 독창적이고 개성 있는 포트폴리오 웹사이트를 구축하고자 했습니다. 기존의 정형화된 포트폴리오 템플릿이 아닌, 직접 원하는 디자인과 기능을 자유롭게 구현할 수 있는 개인 맞춤형 웹사이트를 만들기 위해 React와 TypeScript를 선택하였습니다.

## ✨ 주요 기능

- **반응형 디자인**: 다양한 화면 크기(데스크탑, 태블릿, 모바일)에 최적화된 화면을 제공합니다.
- **다크모드/라이트모드 전환**: 사용자 시스템 설정 또는 수동 선택을 통해 테마 전환을 지원합니다.
- **프로젝트 상세 소개**: 프로젝트 카드 클릭 시 모달창에서 마크다운 형식의 상세 설명이 나타납니다.
- **스크롤에 따른 섹션 활성화 표시**: 페이지 내비게이션과 현재 보고 있는 섹션이 자동으로 동기화됩니다.

## ✍️ 느낀점

이번 프로젝트를 통해 React의 핵심 개념인 컴포넌트 기반의 아키텍처, 상태 관리, 그리고 TSX를 활용한 직관적인 UI 개발 방식을 경험할 수 있었습니다. React의 가상 DOM을 이용한 효율적인 렌더링 방식을 배우고, useState와 useEffect 같은 훅을 사용하여 상태 관리와 생명 주기 관리를 이해할 수 있었습니다. 또한 React와 TypeScript를 함께 사용하여 코드의 가독성과 안정성을 높이고, 유지보수 및 확장성 면에서도 강력한 장점을 확인할 수 있었습니다.

## 🛠️ 사용 기술

- **React & TypeScript**: 컴포넌트 기반의 구조, 타입 안정성 제공
- **TailwindCSS & shadcn/ui**: 빠른 개발 속도와 유지보수 가능한 스타일 관리
- **motion/react**: 애니메이션 및 인터랙티브 UI 구현
- **GitHub Actions**: GitHub Pages를 통한 자동 배포

## 📁 프로젝트 구조

```
src
├── components
│   ├── MobileDropdown.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectDialog.tsx
│   └── ToggleDark.tsx
│
├── data
│   ├── project-data.ts
│   └── section-data.ts
│
├── hooks
│   └── useSectionObserver.ts
│
├── layout
│   ├── Footer.tsx
│   └── Header.tsx
│
├── sections
│   ├── HeroSection.tsx
│   ├── ProjectSection.tsx
│   └── SkillSection.tsx
│
└── App.tsx
```

## 🚀 배포

- GitHub Pages 자동 배포 (GitHub Actions 이용)
- URL: [포트폴리오 웹사이트](https://hs-0914.github.io/Portfolio)

## 📌 실행 방법

### 개발 환경 설치

```bash
git clone https://github.com/HS-0914/Portfolio.git
cd Portfolio
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드 및 배포

```bash
npm run build
```

자동 배포는 GitHub Actions에서 관리됩니다.

## 📧 문의

- 손형수 ([gudtn2238@gmail.com](mailto:gudtn2238@gmail.com))
