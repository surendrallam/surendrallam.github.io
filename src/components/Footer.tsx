import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              Surendra Allam
            </p>
            <p className="text-sm text-muted-foreground">
              Senior AI Software Engineer • AI/ML Expert • Team Leader
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/surendra-allam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://github.com/surendrallam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="mailto:surendrallam@hotmail.com"
              className="p-3 rounded-lg glass-card hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Surendra Allam. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Bangalore, India • Available for opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
