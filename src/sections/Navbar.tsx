import { Menu } from "lucide-react";

const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Achievements",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold text-blue-400">
          Nikhil Bafna
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 transition hover:text-blue-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden">
          <Menu />
        </button>
      </nav>
    </header>
  );
}