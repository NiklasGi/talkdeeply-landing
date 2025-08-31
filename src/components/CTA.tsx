import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-warm opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-gradient-warm border-none shadow-warm">
          <CardContent className="p-8 lg:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                Ready to Go Deeper?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Start meaningful conversations today. Download TalkDeeply and transform the way you connect with others.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background hover:bg-background/90 text-foreground shadow-lg transition-all duration-300 px-8 py-4 rounded-2xl group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Download for iOS
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 px-8 py-4 rounded-2xl group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Download for Android
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
                ))}
              </div>
              <span className="text-primary-foreground/90 font-medium">
                Rated 4.9/5 by 10,000+ users
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;