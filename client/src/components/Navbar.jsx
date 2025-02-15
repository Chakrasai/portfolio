import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import './Navbar.css';

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navcont = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Resume", href: "resume" },
    { name: "Contact", href: "contact" },
  ];

  const scrolltosection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => scrolltosection("home")} className="text-white text-lg font-bold">
            Chakrasai Akuthota
          </button>
        </div>
        <div className="flex space-x-4">
          {navcont.map((item) => (
            <button
              key={item.name}
              onClick={() => scrolltosection(item.href)}
              className="text-white hover:text-gray-400"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-white">
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
