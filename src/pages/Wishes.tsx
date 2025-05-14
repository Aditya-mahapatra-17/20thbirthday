
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';

const wishes = [
  {
    emoji: "✨",
    wish: "May your day be as bright and beautiful as your smile.",
    from: "Your best friend"
  },
  {
    emoji: "🎂",
    wish: "Another year older, wiser, and more amazing. Happy Birthday!",
    from: "Always thinking of you"
  },
  {
    emoji: "🌟",
    wish: "You deserve all the happiness in the world, today and always.",
    from: "With love"
  },
  {
    emoji: "🎁",
    wish: "Here's to another year of adventures, laughter, and friendship.",
    from: "Your partner in crime"
  },
  {
    emoji: "🎈",
    wish: "Wishing you a day filled with joy and a year filled with success.",
    from: "Forever grateful"
  },
  {
    emoji: "💖",
    wish: "Our friendship means the world to me. Happy Birthday to my amazing friend!",
    from: "Your best friend"
  }
];

const Wishes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-birthday-purple/20 to-white">
      <Header title="Birthday Wishes" />
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-cursive text-birthday-pink text-center mb-8">
            Wishing You The Best
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
              <Card key={index} className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{wish.emoji}</div>
                <p className="text-lg mb-4">{wish.wish}</p>
                <p className="text-sm text-muted-foreground mt-auto">{wish.from}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-cursive text-birthday-purple mb-4">A Special Birthday Toast</h2>
            <Card className="p-6 bg-birthday-light/50">
              <p className="mb-4">
                Here's to you on your birthday, and to every day forward. May you be blessed with everything that brings you joy.
              </p>
              <p className="mb-1">
                You're not just my best friend. Thank you for all the beautiful memories we've created, and here's to many more years of friendship and adventure ahead.
              </p>
              <p className="font-medium mt-4">
                Happy Birthday!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
