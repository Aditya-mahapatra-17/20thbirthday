
import Header from '@/components/Header';
import SpecialCard from '@/components/SpecialCard';
import { Heart } from 'lucide-react';

const letters = [
  {
    title: "Dear Best Friend",
    content: "From the moment we met, I knew our friendship was going to be special. Your laughter brightens even my darkest days.",
    secretContent: "I hope you know how much I cherish every moment with you. You've been my rock through everything."
  },
  {
    title: "Remember When...",
    content: "We stayed up all night talking about our dreams? I still believe in every one of yours, and I'll always be here to support you.",
    secretContent: "Some of my favorite memories are those late nights, sharing secrets and making plans for the future."
  },
  {
    title: "You & Me",
    content: "Through the ups and downs, we've stuck together. That's what makes our friendship so special - it's unbreakable.",
    secretContent: "No matter where life takes us, you'll always have a special place in my heart. True friendship knows no distance."
  },
  {
    title: "A Promise",
    content: "On your birthday, I want to promise you that I'll always be here, just as you've always been there for me.",
    secretContent: "My promise to you: to be honest, loyal, and to always bring snacks to our movie nights!"
  },
];

const Letters = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-birthday-pink/5 to-white">
      <Header title="Special Letters" />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-cursive text-birthday-pink mb-4 animate-float">
              Letters From The Heart
              <Heart className="inline-block ml-2 text-birthday-pink animate-pulse" />
            </h1>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md max-w-2xl mx-auto">
              <p className="text-base md:text-lg mb-2">
                Some words I've wanted to share with you. Each card holds a special message inside.
              </p>
              <p className="text-sm text-muted-foreground">
                (Click "Read More" to see more, and look for secret messages too!)
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {letters.map((letter, index) => (
              <SpecialCard 
                key={index}
                title={letter.title}
                content={letter.content}
                secretContent={letter.secretContent}
                className="h-full"
              />
            ))}
          </div>
          
          <div className="mt-16 text-center bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-birthday-pink/20">
            <h2 className="text-3xl font-cursive text-birthday-purple mb-4">A Final Note</h2>
            <p className="text-lg max-w-xl mx-auto">
              Thank you for being you. For your kindness, your humor, your honesty, and your love.
              You make every day brighter just by being in my life.
            </p>
            <p className="mt-6 font-medium text-birthday-purple/80">
              With all my love on your special day,
            </p>
            <p className="mt-2 font-cursive text-2xl text-birthday-pink">
              Your Best Friend
            </p>
            <div className="mt-4 text-center">
              <Heart className="inline-block text-birthday-pink animate-pulse h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letters;
