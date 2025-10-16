import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "GPU/TPU Testing Framework",
    company: "Tech Mahindra",
    period: "2024 - Present",
    description: "Developed comprehensive testing framework for next-generation Android GPU/TPU subsystems with ML Perf benchmarking integration.",
    technologies: ["C/C++", "Python", "MLPerf", "GPU", "TPU"],
    highlights: [
      "System architecture design for user-space testing",
      "ML Perf Benchmarking & performance analysis",
      "Optimized test suites for TPU acceleration"
    ]
  },
  {
    title: "Vision-DSP Custom AI/ML Applications",
    company: "Exaleap Semiconductors",
    period: "2019 - 2024",
    description: "Led development of custom AI/ML models on Vision-DSP platforms, improving model accuracy from 90% to 94%.",
    technologies: ["TensorFlow", "PyTorch", "YOLO", "MobileNet", "C/C++"],
    highlights: [
      "Led team of 8 engineers",
      "Improved model performance by 4%",
      "ML Perf Benchmarking on SoC architecture"
    ]
  },
  {
    title: "Under-Vehicle Surveillance Robot",
    company: "Safepro Video Security",
    period: "2018 - 2019",
    description: "Designed successful PoC for autonomous surveillance robot with custom hardware and mobile app control.",
    technologies: ["Raspberry Pi", "Nvidia Jetson", "Python", "Mobile App"],
    highlights: [
      "Hardware motor driver & BMS design",
      "Mobile app development for robot control",
      "Performance benchmarking on edge platforms"
    ]
  },
  {
    title: "Solar Home Appliances",
    company: "GloWorld Energy",
    period: "2016 - 2018",
    description: "Enhanced micro-watt solar home lighting systems achieving 50% improved lighting and 2 hours extended battery backup.",
    technologies: ["Embedded C", "Power Electronics", "BMS"],
    highlights: [
      "50% lighting improvement",
      "2 hours extended battery life",
      "Cost-effective design optimization"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Key projects and technical contributions across AI/ML and embedded systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-accent">{project.company}</span>
                  <span>•</span>
                  <span>{project.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                    >
                      {tech}
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

export default Projects;
