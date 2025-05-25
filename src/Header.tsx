// Header.tsx (shadcn/ui 기반 Tailwind 헤더 + heroicons 사용 + 기존 구조 반영)

import { useState, useEffect } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const userTheme = saved === "dark" || (!saved && systemPrefersDark);

    setIsDark(userTheme);
    document.documentElement.classList.toggle("dark", userTheme);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* 로고 */}
        <a
          href="#"
          className="text-3xl font-bold text-gray-800 dark:text-white"
        >
          HS Portfolio
        </a>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <a
            href="#about"
            className="hover:text-teal-500 dark:hover:text-teal-400 flex"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            Contact
          </a>
          {/* 다크모드 토글 */}
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-600" />
            )}
          </Button>
        </nav>

        {/* 모바일 햄버거 */}
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-3">
              {menuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-white" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-white" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="md:hidden px-4 pb-4 space-y-2 text-sm"
          >
            <DropdownMenuItem>
              <a href="#about" className="block hover:text-teal-500">
                About
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#projects" className="block hover:text-teal-500">
                Projects
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#skills" className="block hover:text-teal-500">
                Skills
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#contact" className="block hover:text-teal-500">
                Contact
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
