import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { navItems } from "@/data/section-data";
import { useState } from "react";

type HeaderProps = {
  activeSection?: string;
};

const MobileDropdown: React.FC<HeaderProps> = ({
  activeSection,
}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(activeSection);
  return (
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
      <DropdownMenuContent align="end" className="px-4 pb-4 space-y-2 text-sm">
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
  );
};

export default MobileDropdown;
