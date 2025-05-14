
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Confetti from '@/components/Confetti';
import MusicPlayer from '@/components/MusicPlayer';

const songs = [
  { 
    title: "Happy Birthday Song - Traditional", 
    url: "https://audio.jukehost.co.uk/qPw7Gk0OmXel7NqZUEZXxUmB1rJ7bGU3" 
  },
  { 
    title: "Birthday - Katy Perry", 
    url: "https://audio.jukehost.co.uk/V2b2srHfvrK7X2yzXzzKLobp7wJSva1s" 
  },
  { 
    title: "Celebration - Kool & The Gang", 
    url: "https://audio.jukehost.co.uk/qAqYLgSJm3ZKwoc90yLTVzf0AXObREbY" 
  },
];

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {showConfetti && <Confetti />}
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold font-cursive text-birthday-pink mb-6 animate-float">
            Happy Birthday!
          </h1>
          
          <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-10">
            <p className="text-lg md:text-xl mb-4">
              To my amazing friend on your special day! You light up my world with your smile.
            </p>
            <p className="mb-6 text-birthday-purple font-medium">
              I've created this website just for you, filled with our special memories and surprises.
            </p>
            
            <div className="animate-heart-beat inline-block mb-4">
              ❤️
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link to="/memories" className="w-full">
              <Button className="w-full py-6 bg-birthday-purple hover:bg-birthday-purple/80 text-lg">
                Our Memories
              </Button>
            </Link>
            
            <Link to="/wishes" className="w-full">
              <Button className="w-full py-6 bg-birthday-pink hover:bg-birthday-pink/80 text-lg">
                Birthday Wishes
              </Button>
            </Link>
            
            <Link to="/letters" className="w-full">
              <Button className="w-full py-6 bg-birthday-yellow/70 hover:bg-birthday-yellow text-birthday-purple text-lg">
                Special Letters
              </Button>
            </Link>
            
            <Link to="/surprise" className="w-full">
              <Button className="w-full py-6 bg-birthday-light hover:bg-birthday-light/80 text-birthday-pink text-lg">
                Secret Surprise
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <MusicPlayer songs={songs} />
      
      <div className="absolute bottom-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowConfetti(!showConfetti)}
          className="text-xs bg-white/80"
        >
          {showConfetti ? "Turn Off Confetti" : "Turn On Confetti"}
        </Button>
      </div>
    </div>
  );
};

export default Index;
