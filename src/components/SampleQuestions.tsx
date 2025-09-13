import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SampleQuestions = () => {
  const questions = [
    "What's a belief you held strongly in the past that has changed?",
    "What's a thing you've always wanted to do but haven't done yet and why?",
    "How are you complicit in creating the conditions you say you don't want?",
    "What's the kindest thing someone has ever done for you?",
    "What does a meaningful life look like to you?",
    "Would you choose a different career if the goal was to be happy?",
    "How do you prefer to show love and appreciation?",
    "What makes you feel truly understood by someone?",
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sample Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a taste of the kinds of conversations TalkDeeply can inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {questions.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
               
                <p className="text-muted-foreground object-center text-center">
                  {feature}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleQuestions;