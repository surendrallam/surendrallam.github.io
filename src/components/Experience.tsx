import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior AI Software Engineer",
    company: "Tech Mahindra Pvt Ltd",
    location: "Bangalore",
    period: "Sep '24 - Present",
    highlights: [
      "Spearheaded the development of a testing framework for GPU and TPU subsystems on next-generation Android devices",
      "Defined system architecture and ran simulation models for user-space testing strategies",
      "Led software tool optimisation efforts, refining command-line inputs and configuration files",
      "Conducted rigorous ML Perf Benchmarking and analysis to evaluate model performance",
      "Optimised test suites for TPU acceleration, ensuring maximum hardware performance"
    ]
  },
  {
    title: "Lead Application Engineer",
    company: "Exaleap Semiconductors Pvt Ltd",
    location: "Bangalore",
    period: "Dec '19 - Aug '24",
    highlights: [
      "Led a team of 8 engineers in developing custom applications for Vision-DSP platforms",
      "Engineered and implemented custom AI/ML models (MobileNet, YOLO) on SoC platforms",
      "Improved model performance from 90% to 94% through meticulous analysis and tuning",
      "Applied expert C/C++ skills to design applications for edge devices",
      "Developed comprehensive test cases using ML Perf Benchmarking and analysis"
    ]
  },
  {
    title: "Embedded Engineer",
    company: "Safepro Video Security Research Labs",
    location: "Bangalore",
    period: "Jul '18 - Dec '19",
    highlights: [
      "Served as primary technical liaison between customers, development teams, and hardware vendors",
      "Directed team in designing successful PoC for an Under-Vehicle Surveillance Robot",
      "Engineered hardware motor drivers and Battery Management System (BMS)",
      "Developed controlling software via mobile application",
      "Analyzed and benchmarked PoC performance on Raspberry Pi and Nvidia Jetson platforms"
    ]
  },
  {
    title: "Engineer",
    company: "GloWorld Energy Pvt Ltd",
    location: "Bangalore, Gurgaon",
    period: "Nov '16 - Apr '18",
    highlights: [
      "Drove product design and enhancement efforts for Micro-Watt solar home appliances",
      "Modified home lighting system design, improving lighting by 50%",
      "Achieved 2 hours improved battery backup through optimization"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            A decade of expertise delivering cutting-edge AI/ML solutions and embedded systems
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass-card hover:scale-[1.01] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-3 text-foreground">
                      {exp.title}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <span className="text-sm">• {exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 group">
                      <span className="text-accent mt-1.5 text-lg group-hover:scale-125 transition-transform">▸</span>
                      <span className="text-muted-foreground leading-relaxed text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
