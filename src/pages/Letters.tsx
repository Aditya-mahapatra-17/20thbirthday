
import Header from '@/components/Header';
import SpecialCard from '@/components/SpecialCard';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-birthday-yellow/30 to-white">
      <Header title="Special Letters" />
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-cursive text-birthday-pink text-center mb-8">
            Letters From The Heart
          </h1>
          
          <p className="text-center mb-8">
            Some words I've wanted to share with you. Each card has a special message inside.
            <br />
            <span className="text-sm text-muted-foreground">(Click "Read More" to see more, and look for secret messages too!)</span>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          
          <div className="mt-12 text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow">
            <h2 className="text-2xl font-cursive text-birthday-purple mb-4">A Final Note</h2>
            <p className="text-lg">
              Thank you for being you. For your kindness, your humor, your honesty, and your love.
            </p>
            <p className="mt-4 font-medium">
              With all my love on your special day,
            </p>
            <p className="mt-2 font-cursive text-xl text-birthday-pink">
              Your Best Friend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letters;
