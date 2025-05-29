import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleDark: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

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
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="cursor-pointer"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 text-yellow-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-600" />
      )}
    </Button>
  );
};

export default ToggleDark;
