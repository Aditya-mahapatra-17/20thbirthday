
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
          "transition-transform duration-700 transform-style-3d min-h-[280px] w-full",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        <CardContent
          className={cn(
            "p-6 absolute w-full h-full backface-hidden flex flex-col items-center justify-center",
            isFlipped ? "invisible" : ""
          )}
        >
          <h3 className="text-xl font-cursive font-bold mb-4 text-birthday-pink">{title}</h3>
          <p className="text-center mb-4">{content}</p>
          <Button onClick={flipCard} variant="outline" className="mt-auto">Read More</Button>
        </CardContent>

        <CardContent
          className={cn(
            "p-6 absolute w-full h-full backface-hidden flex flex-col items-center justify-center rotate-y-180",
            !isFlipped ? "invisible" : ""
          )}
        >
          <div className="text-center">
            {secretContent && !showSecret ? (
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm text-muted-foreground mb-2">There's a secret message here...</p>
                <Button onClick={revealSecret} variant="secondary">Reveal Secret</Button>
              </div>
            ) : (
              <p className="animate-fade-in">{secretContent}</p>
            )}
          </div>
          <Button onClick={flipCard} variant="outline" className="mt-6">Go Back</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpecialCard;
