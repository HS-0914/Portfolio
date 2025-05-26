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
import { navItems } from "./data/section-data";

type HeaderProps = {
  activeSection?: string;
};

const Header: React.FC<HeaderProps> = ({ activeSection }: HeaderProps) => {
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
    <header className="sticky top-0 z-50 bg-gray-100/10 dark:bg-gray-900/10 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* 로고 */}
        <a
          href="#"
          className="text-3xl font-bold text-teal-500 dark:text-white"
        >
          <span className="">HS</span> Portfolio
        </a>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-teal-500 transition-colors ${
                activeSection === id ? "text-teal-500 font-semibold" : ""
              }`}
            >
              {label}
            </a>
          ))}

          {/* 다크모드 토글 */}
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-600" />
            )}
          </Button>
        </nav>

        <nav className="md:hidden">
          {/* 다크모드 토글 */}
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-600" />
            )}
          </Button>

          {/* 모바일 햄버거 */}
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-3">
                {menuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-white" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-white" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="px-4 pb-4 space-y-2 text-sm"
            >
              {navItems.map(({ id, label }) => (
                <DropdownMenuItem key={id}>
                  <a
                    href={`#${id}`}
                    className={`block w-full ${
                      activeSection === id ? "text-teal-500 font-semibold" : ""
                    }`}
                  >
                    {label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
