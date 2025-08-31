import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Heart, Users, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Curated Questions",
      description: "Carefully crafted questions designed to go beyond small talk and explore what truly matters."
    },
    {
      icon: Heart,
      title: "Deeper Connections",
      description: "Build stronger relationships by understanding each other's values, dreams, and perspectives."
    },
    {
      icon: Users,
      title: "For Any Relationship",
      description: "Perfect for couples, friends, families, or getting to know new people in your life."
    },
    {
      icon: Lightbulb,
      title: "Spark Insights",
      description: "Discover new things about yourself and others through meaningful dialogue."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose TalkDeeply?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Move beyond superficial conversations and create lasting connections through purposeful dialogue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-warm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;