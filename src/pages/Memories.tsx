
import Header from '@/components/Header';
import PhotoGallery from '@/components/PhotoGallery';

const photos = [
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551",
    alt: "Friends taking a selfie",
    caption: "That time we couldn't stop laughing at the cafe"
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    alt: "Friends walking together",
    caption: "Our adventure in the city last summer"
  },
  {
    src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    alt: "Beach day",
    caption: "Beach day when we built that crazy sandcastle"
  },
  {
    src: "https://images.unsplash.com/photo-1543807535-eceef0bc6599",
    alt: "Birthday celebration",
    caption: "Your birthday last year - so many candles!"
  },
  {
    src: "https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c",
    alt: "Road trip",
    caption: "That spontaneous road trip we took"
  },
  {
    src: "https://images.unsplash.com/photo-1542157565-4607d902f5d6",
    alt: "Concert night",
    caption: "Remember that amazing concert night?"
  }
];

const Memories = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-birthday-light/50 to-white">
      <Header title="Our Memories" />
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-cursive text-birthday-pink text-center mb-8">
            Through The Years
          </h1>
          
          <p className="text-center mb-8">
            Every moment with you has been a gift. Here are some snapshots of our journey together.
            <br />
            <span className="text-sm text-muted-foreground">(Click on any photo to see it larger)</span>
          </p>
          
          <PhotoGallery photos={photos} />
          
          <div className="mt-10 text-center">
            <p className="italic text-birthday-purple mb-4">
              "Friendship isn't about whom you have known the longest... it's about who came and never left your side."
            </p>
            <p className="text-sm text-muted-foreground">
              And you've always been there. Thank you for every memory we've made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;
