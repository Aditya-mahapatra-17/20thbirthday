
import Header from '@/components/Header';
import PhotoGallery from '@/components/PhotoGallery';
import image1 from '@/images/1.jpeg';
import image2 from '@/images/2.jpg';
import image3 from '@/images/3.jpg';

const photos = [
  {
    src: image1,
    alt: "Can we get extra rice",
    caption: "That time we couldn't stop laughing at the Hotel(Biryani haha)"
  },

  {
    src: image2,
    alt: "Beach day",
    caption: "Beach day when we ate twisted potatos and you lost stone paper sissors.haha"
  },
  
 
  {
    src: image3,
    alt: "K9 Restaurant",
    caption: "Remember the K9 restaurant? and we drink falooda like pan masala funny!!"
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
