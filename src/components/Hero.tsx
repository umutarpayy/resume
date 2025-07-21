import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-primary glow-primary animate-float">
            {/* Profile photo placeholder - you can replace this with your actual photo */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-primary-foreground">
              P
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolyo
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Yazılım Geliştirici & Teknoloji Tutkunu
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Merhaba! Ben modern web teknolojileri ve kullanıcı deneyimi odaklı projeler geliştiren 
          bir yazılım geliştiriciyim. React, TypeScript ve modern frontend teknolojileri kullanarak 
          etkileyici dijital deneyimler yaratmayı seviyorum.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="outline" className="transition-bounce hover:glow-primary">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" className="transition-bounce hover:glow-accent">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn  
          </Button>
          <Button variant="outline" className="transition-bounce hover:glow-primary">
            <Mail className="w-5 h-5 mr-2" />
            İletişim
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Aşağıda projelerimi keşfedin</p>
          <div className="w-8 h-8 mx-auto animate-bounce">
            <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;