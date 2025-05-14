
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

interface SpecialCardProps {
  title: string;
  content: string;
  secretContent?: string;
  className?: string;
}

const SpecialCard = ({ title, content, secretContent, className }: SpecialCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const revealSecret = () => {
    setShowSecret(true);
  };

  return (
    <div className={cn("perspective-1000 my-4 w-full", className)}>
      <Card
        className={cn(
          "transition-all duration-700 transform-style-3d relative min-h-[300px] w-full shadow-lg hover:shadow-xl",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        <CardContent
          className={cn(
            "p-6 absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-white/90 rounded-xl border-2 border-birthday-pink/20",
            isFlipped ? "invisible" : ""
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-birthday-pink/5 rounded-xl"></div>
          <h3 className="text-2xl font-cursive font-bold mb-4 text-birthday-pink">{title}</h3>
          <p className="text-center mb-6 text-gray-700">{content}</p>
          <Button 
            onClick={flipCard} 
            variant="outline" 
            className="mt-auto group border-birthday-purple/30 hover:bg-birthday-purple/10 text-birthday-purple"
          >
            Read More
            <Heart className="ml-1 h-4 w-4 text-birthday-pink group-hover:text-birthday-pink animate-pulse" />
          </Button>
        </CardContent>

        <CardContent
          className={cn(
            "p-6 absolute w-full h-full backface-hidden flex flex-col items-center justify-center rotate-y-180 bg-gradient-to-br from-birthday-yellow/10 to-birthday-purple/10 rounded-xl border-2 border-birthday-purple/30",
            !isFlipped ? "invisible" : ""
          )}
        >
          <div className="text-center max-w-sm">
            {secretContent && !showSecret ? (
              <div className="flex flex-col items-center gap-4 py-4">
                <div className="text-center">
                  <p className="text-sm text-birthday-pink mb-2 font-medium">There's a secret message waiting for you...</p>
                  <p className="text-xs text-muted-foreground">Click below to reveal it</p>
                </div>
                <Button 
                  onClick={revealSecret} 
                  variant="secondary"
                  className="bg-birthday-pink/80 hover:bg-birthday-pink text-white"
                >
                  Reveal Secret
                </Button>
              </div>
            ) : (
              <div className="animate-fade-in py-4">
                <p className="text-birthday-purple italic font-medium">{secretContent}</p>
              </div>
            )}
          </div>
          <Button 
            onClick={flipCard} 
            variant="outline" 
            className="mt-6 border-birthday-purple/30 hover:bg-birthday-purple/10 text-birthday-purple"
          >
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpecialCard;
