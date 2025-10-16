import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    title: "Research Publications",
    items: [
      "Published papers at IEEE international conferences",
      "Published at De Gruyter International Conference",
      "Research focus: AI/ML applications in embedded systems"
    ],
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Professional Awards",
    items: [
      "Eccentric Employee of the Year 2020-21",
      "Best Team Lead 2022-23",
      "Multiple performance recognition awards"
    ],
    color: "text-secondary"
  },
  {
    icon: Award,
    title: "Technical Recognition",
    items: [
      "Contributor to GitHub's Arctic Code Vault",
      "StackOverflow: 61 reputation, 8 Bronze Badges",
      "57K+ impact reach on StackOverflow"
    ],
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Leadership & Mentoring",
    items: [
      "Led cross-functional teams of 8+ engineers",
      "Elected Class Representative (2 consecutive years)",
      "Technical liaison between customers & dev teams"
    ],
    color: "text-primary"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Publications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition for technical excellence and leadership contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="glass-card hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-card/50 border border-border/50 ${achievement.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {achievement.title}
                      </h3>
                      <ul className="space-y-2">
                        {achievement.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
