import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SampleQuestions = () => {
  const categories = [
    {
      name: "Deep Reflection",
      color: "bg-primary/20 text-primary-foreground",
      questions: [
        "What's a belief you held strongly in the past that has completely changed?",
        "If you could have dinner with your future self, what would you ask?",
        "What's something you've learned about yourself in the last year?"
      ]
    },
    {
      name: "Values & Dreams",
      color: "bg-accent/20 text-accent-foreground",
      questions: [
        "What does a meaningful life look like to you?",
        "When do you feel most like yourself?",
        "What legacy do you want to leave behind?"
      ]
    },
    {
      name: "Connection",
      color: "bg-secondary/20 text-secondary-foreground",
      questions: [
        "What's the kindest thing someone has ever done for you?",
        "How do you prefer to show love and appreciation?",
        "What makes you feel truly understood by someone?"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sample Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a taste of the kinds of conversations TalkDeeply can inspire.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="group hover:shadow-warm transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <Badge className={category.color + " px-4 py-2 text-sm font-medium"}>
                    {category.name}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((question, questionIndex) => (
                    <div 
                      key={questionIndex}
                      className="p-4 rounded-xl bg-muted/50 border border-border/30 group-hover:border-primary/20 transition-colors duration-300"
                    >
                      <p className="text-foreground font-medium leading-relaxed">
                        "{question}"
                      </p>
                    </div>
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

export default SampleQuestions;