import { navItems } from "../data/section-data";
import ToggleDark from "@/components/ToggleDark";
import MobileDropdown from "@/components/MobileDropdown";

type HeaderProps = {
  activeSection?: string;
};

const Header: React.FC<HeaderProps> = ({ activeSection }: HeaderProps) => {
  return (
    <header className="fixed z-50 w-full bg-gray-100/10 dark:bg-gray-900/10 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* 로고 */}
        <a
          href="/Portfolio/"
          className="text-3xl font-bold text-teal-500 select-none"
        >
          <span className="">HS</span> Portfolio
        </a>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-teal-500 transition-colors flex items-center ${
                activeSection === id ? "text-teal-500 font-semibold" : ""
              }`}
            >
              {label}
            </a>
          ))}

          {/* 다크모드 토글 */}
          <ToggleDark />
        </nav>

        <nav className="md:hidden">
          {/* 다크모드 토글 */}
          <ToggleDark />

          {/* 모바일 햄버거 */}
          <MobileDropdown activeSection={activeSection} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
