import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* <Card className="max-w-4xl mx-auto  shadow-warm"> */}
          <CardContent className="p-8 lg:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold ">
                Ready to Go Deeper?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start more meaningful conversations today. Download TalkDeeply and transform the way you connect with others.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Button 
                size="lg" 
                
              >
                Download for iOS
              </Button>
              <Button 
                size="lg"
                variant="secondary" 
              >
                Download for Android
              </Button>
            </div>

            {/* <div className="flex items-center justify-center gap-2 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">
                Rated 4.9/5 by 10,000+ users
              </span>
            </div> */}
          </CardContent>
        {/* </Card> */}
      </div>
    </section>
  );
};

export default CTA;