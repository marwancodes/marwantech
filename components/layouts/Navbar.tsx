"use client";

import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavLink {
  name: string;
  href: string;
}


const NavLinks: NavLink[] = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
]

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 ">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          MT<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-4 text-sm font-medium">
            {NavLinks.map((link, i) => (
              <a href={link.href} key={i} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.name}</a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
                {NavLinks.map((link, i) => (
                  <a href={link.href} key={i} className="text-lg text-muted-foreground hover:text-foreground rounded-full py-2">{link.name}</a>
                ))}
                <Button size="sm">Contact Me</Button>
              </div>
        </div>
      )}
    </header>
  )
}

export default Navbar