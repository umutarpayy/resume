const AboutSection = () => {
  const skills = [
    { category: "Computer Vision", items: ["YOLO", "OpenCV", "Image Segmentation", "OCR", "SSIM"] },
    { category: "NLP & ML", items: ["BERT", "RoBERTa", "LLAMA", "Transformers", "HuggingFace"] },
    { category: "AI Technologies", items: ["RAG", "Vector DBs", "GPT Models", "LLM", "MCP"] },
    { category: "Programming", items: ["Python", "C++", "SQL", "TypeScript", "JavaScript"] },
    { category: "Infrastructure", items: ["Docker", "ElasticSearch", "Unreal Engine", "Git"] }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 lg:ml-80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Engineer with hands-on experience building production-ready solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Experience</h3>
            <div className="space-y-4">
              <div className="p-6 bg-card/50 border border-border rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-primary mb-2">AI Engineer & R&D Specialist</h4>
                <p className="text-muted-foreground text-sm mb-3">Current</p>
                <p className="text-foreground/80 leading-relaxed">
                  AI Engineer with hands-on experience in computer vision, natural language processing, and machine learning. 
                  I work with tools like YOLO, BERT, and GPT to develop real-world AI solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              <div className="p-6 bg-card/50 border border-border rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-primary mb-2">Gazi University</h4>
                <p className="text-muted-foreground text-sm mb-3">Graduate</p>
                <p className="text-foreground/80 leading-relaxed">
                  Completed comprehensive education in computer science and engineering, 
                  specializing in artificial intelligence and software development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 bg-card/30 border border-border rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-primary mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-md border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;