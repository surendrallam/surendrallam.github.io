import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Technology",
    field: "Power Electronics",
    institution: "B.M.S. College of Engineering",
    location: "Bangalore",
    period: "Sep '13 - Nov '15",
    highlights: [
      "Elected as Class Representative for two consecutive years",
      "Student intern at National Aerospace Laboratories",
      "Published paper at the International Conference De Gruyter"
    ]
  },
  {
    degree: "Bachelor of Technology",
    field: "Electrical and Electronics",
    institution: "Anna University",
    location: "Chennai",
    period: "Jun '08 - Sep '12",
    highlights: []
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic foundation in electrical engineering and advanced power electronics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="glass-card hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 border border-secondary/30">
                    <GraduationCap className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-primary font-semibold mb-2">{edu.field}</p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">{edu.location}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {edu.highlights.length > 0 && (
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <span className="text-accent mt-1">▸</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
