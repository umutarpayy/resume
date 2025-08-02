const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 lg:ml-80">
      <div className="max-w-4xl text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Umut Öztürk ARPAY
          </h1>
          <h2 className="text-3xl md:text-4xl text-muted-foreground mb-8 font-light">
            Crafting AI Solutions for Tomorrow
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Passionate <span className="text-primary font-semibold">AI Engineer</span> specializing in 
          <span className="text-accent font-semibold"> Computer Vision</span>, 
          <span className="text-primary font-semibold"> Natural Language Processing</span>, and 
          <span className="text-accent font-semibold"> Machine Learning</span>. 
          I transform complex challenges into intelligent solutions using cutting-edge technologies like 
          <span className="text-primary font-semibold"> YOLO, OpenCV, BERT</span>, and 
          <span className="text-accent font-semibold"> advanced optimization algorithms</span>.
        </p>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg">Discover my work below</p>
          <div className="w-10 h-10 mx-auto animate-bounce">
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