import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, Award, Users, Code, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "8+", label: "Years Experience" },
  { icon: Users, value: "8+", label: "Team Members Led" },
  { icon: Code, value: "4+", label: "Major Projects" },
  { icon: Award, value: "3+", label: "Awards Received" }
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <div className="animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold">Available for Opportunities</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl">
              Surendra Allam
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              Senior <span className="text-primary">AI Software Engineer</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Accomplished AI/ML Lead specializing in <span className="text-accent font-semibold">Vision-DSP</span>, 
              <span className="text-accent font-semibold"> GPU/TPU systems</span>, and 
              <span className="text-accent font-semibold"> Edge AI</span> solutions
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              A decade of experience leading cross-functional teams, optimizing ML models, and delivering 
              cutting-edge AI solutions from concept to production. Published researcher with multiple 
              industry awards for technical excellence and leadership.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a href="mailto:surendrallam@hotmail.com">
                <Button size="lg" className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-primary/50">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:border-primary">
                  View Projects
                </Button>
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="glass-card p-6 text-center hover:scale-105 transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2 hover:text-accent transition-colors">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+918123187088">+91-8123187088</a>
              </div>
              <a href="mailto:surendrallam@hotmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 text-accent" />
                <span>surendrallam@hotmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com/in/surendrallam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 rounded-xl glass-card hover:bg-primary/20 transition-all hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/surendrallam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 rounded-xl glass-card hover:bg-primary/20 transition-all hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
