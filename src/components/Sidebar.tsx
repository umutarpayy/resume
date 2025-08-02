import { Github, Linkedin, Mail, Home, User, Briefcase, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close sidebar on mobile after navigation
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[60] lg:hidden bg-sidebar-background/90 backdrop-blur-sm border border-sidebar-border rounded-lg p-3 hover:bg-sidebar-accent transition-all duration-200"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-sidebar-background/90 backdrop-blur-xl border-r border-sidebar-border z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      {/* Profile Section */}
      <div className="p-8 text-center border-b border-sidebar-border/50">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
          <img
            src="/projects/profile_picture.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-sidebar-foreground mb-1">
          Umut Arpay
        </h1>
        <p className="text-sm text-sidebar-foreground/70 mb-4">
          AI Engineer & Computer Vision Specialist
        </p>
        
        {/* Social Links */}
        <div className="flex gap-2 justify-center">
          <a href="https://github.com/umutarpayy" target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-sidebar-accent">
              <Github className="w-4 h-4" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/umutarpayy/" target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-sidebar-accent">
              <Linkedin className="w-4 h-4" />
            </Button>
          </a>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-sidebar-accent">
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-2">
          <button
            onClick={() => scrollToSection('hero')}
            className="w-full flex items-center gap-3 px-4 py-3 text-left text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="w-full flex items-center gap-3 px-4 py-3 text-left text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-200"
          >
            <User className="w-5 h-5" />
            <span>About</span>
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full flex items-center gap-3 px-4 py-3 text-left text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-200"
          >
            <Briefcase className="w-5 h-5" />
            <span>Projects</span>
          </button>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-sidebar-border/50">
        <div className="text-xs text-sidebar-foreground/60 text-center">
          <p>Built with React & TypeScript</p>
          <p className="mt-1">© 2024 Umut Arpay</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;