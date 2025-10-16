import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI/ML & Deep Learning",
    skills: ["TensorFlow", "PyTorch", "Caffe", "Computer Vision", "Image Processing", "EdgeAI", "MLPerf"]
  },
  {
    title: "Programming Languages",
    skills: ["C/C++", "Python", "Embedded C"]
  },
  {
    title: "Hardware & Platforms",
    skills: ["Vision-DSP", "SoC", "GPU", "TPU", "RISC-V", "Embedded Systems"]
  },
  {
    title: "Specializations",
    skills: ["Model Optimization", "System Architecture", "Performance Benchmarking", "Team Leadership"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical proficiencies across AI/ML, embedded systems, and cutting-edge hardware platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-foreground border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all text-sm px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
