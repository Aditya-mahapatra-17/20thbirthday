
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Confetti from '@/components/Confetti';

const secretMessages = [
  "You make the world a better place just by being in it.",
  "I'm so lucky to have you in my life.",
  "You've taught me what true friendship means.",
  "Your strength inspires me every day.",
  "You're the kind of friend everyone wishes they had.",
  "Our inside jokes are my favorite.",
  "Thanks for always being there when I needed someone.",
  "You've seen me at my worst and still chose to stay.",
  "I hope I'm as good a friend to you as you are to me.",
  "You're stuck with me for life now, sorry not sorry!",
];

const Surprise = () => {
  const [revealed, setRevealed] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const revealSurprise = () => {
    setRevealed(true);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const showNextMessage = () => {
    setMessageIndex((prev) => (prev + 1) % secretMessages.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-birthday-pink/20 to-white">
      <Header title="Secret Surprise" />
      
      {showConfetti && <Confetti />}
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-cursive text-birthday-pink text-center mb-8">
            Your Special Surprise
          </h1>
          
          {!revealed ? (
            <div className="text-center">
              <Card className="p-6 mb-8 max-w-md mx-auto">
                <CardContent className="pt-6">
                  <p className="mb-6">
                    I've saved something special just for you. Are you ready to see it?
                  </p>
                  <Button 
                    onClick={revealSurprise} 
                    className="bg-birthday-purple hover:bg-birthday-purple/80 text-white"
                  >
                    Reveal My Surprise!
                  </Button>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground">
                Once you click, there's no going back... excitement awaits!
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-10">
                <Card className="bg-gradient-to-r from-birthday-purple/20 to-birthday-pink/20 p-8 animate-float">
                  <h2 className="text-2xl font-cursive mb-6">10 Things I Love About You</h2>
                  <p className="text-xl font-medium mb-8">"{secretMessages[messageIndex]}"</p>
                  <Button onClick={showNextMessage}>Show Me Another</Button>
                </Card>
                <p className="mt-4 text-sm text-muted-foreground">
                  Keep clicking to see all 10 special messages!
                </p>
              </div>
              
              <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow">
                <h3 className="text-xl font-medium mb-4">A Final Birthday Message</h3>
                <p className="mb-4">
                  I wanted to take one more moment to tell you how special you are to me.
                  Our friendship means everything, and I'm so grateful for every moment we share.
                </p>
                <p>
                  Happy Birthday! Here's to making more memories together.
                </p>
                
                <div className="mt-6">
                  <Button
                    onClick={() => setShowConfetti(true)}
                    variant="outline"
                  >
                    One More Surprise!
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Surprise;
