import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../shadcnui/button"; // shadcn Button
import ThemeToggleButton from "../ThemeToggleButton";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header
      className="bg-background sticky top-0 z-50 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={onMenuClick}
            aria-label="Toggle sidebar">
            <Menu className="h-6 w-6" />
          </Button>

          <Link href={"/"}>
            <h1
              className="text-2xl font-semibold"
              aria-label="App Name">
              Mizukon
            </h1>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link href={"/"}>Home</Link>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
