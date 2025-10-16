import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Open to discussing AI/ML opportunities, technical collaborations, or innovative projects. 
            Let's build something amazing together!
          </p>

          <Card className="glass-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <a 
                  href="mailto:surendrallam@hotmail.com" 
                  className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all group"
                >
                  <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-semibold text-foreground">surendrallam@hotmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+918123187088" 
                  className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 hover:scale-105 transition-all group"
                >
                  <div className="p-4 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-semibold text-foreground">+91-8123187088</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                  <div className="p-4 rounded-xl bg-secondary/20">
                    <MapPin className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold text-foreground">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex gap-3">
                    <a 
                      href="https://linkedin.com/in/surendrallam" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 rounded-xl bg-primary/20 hover:bg-primary/30 transition-all hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-primary" />
                    </a>
                    <a 
                      href="https://github.com/surendrallam" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 rounded-xl bg-accent/20 hover:bg-accent/30 transition-all hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-accent" />
                    </a>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Connect</p>
                    <p className="font-semibold text-foreground">Social Media</p>
                  </div>
                </div>
              </div>

              <a href="mailto:surendrallam@hotmail.com">
                <Button size="lg" className="gap-3 text-lg px-8 py-6 shadow-xl hover:shadow-primary/50">
                  <Mail className="w-6 h-6" />
                  Send Me an Email
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
