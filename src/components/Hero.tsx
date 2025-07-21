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
            Portfolio
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            AI Engineer & Computer Vision Specialist
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Hi there! I'm a passionate AI engineer specializing in <span className="text-primary font-semibold">Computer Vision</span>, 
          <span className="text-accent font-semibold"> Natural Language Processing</span>, and 
          <span className="text-primary font-semibold"> Machine Learning algorithms</span>. 
          I transform complex problems into intelligent solutions using cutting-edge technologies like 
          <span className="text-accent font-semibold"> YOLO, OpenCV, BERT, and advanced optimization algorithms</span>. 
          From digitizing physical books to creating smart educational tools, I build systems that bridge the gap between human needs and artificial intelligence.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="https://github.com/umutarpayy" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="transition-bounce hover:glow-primary">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/umutarpayy/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="transition-bounce hover:glow-accent">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn  
            </Button>
          </a>
          <Button variant="outline" className="transition-bounce hover:glow-primary">
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Explore my projects below</p>
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