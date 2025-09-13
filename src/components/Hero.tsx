import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-conversation.jpg";
import phoneMockup from "@/assets/phone1.png";

const Hero = () => {
  return (
    <section className="relative h-full  overflow-hidden">
      {/* Background decoration */}
      
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                TalkDeeply
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Transform surface-level chats into meaningful connections with thought-provoking questions that spark authentic conversations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
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

            

            {/* <div className="flex items-center justify-center lg:justify-start gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Deep conversations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">App Store rating</div>
              </div>
            </div> */}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={phoneMockup} 
                alt="TalkDeeply app interface" 
                className="w-full max-w-sm mx-auto drop-shadow-warm"
              />
            </div>
            {/* Background decoration */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;