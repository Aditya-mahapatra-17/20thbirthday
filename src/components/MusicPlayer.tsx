
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  songs: {
    title: string;
    url: string;
  }[];
}

const MusicPlayer = ({ songs }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-2 z-40 border-t border-birthday-pink/30">
      <audio 
        ref={audioRef} 
        src={songs[currentSongIndex].url} 
        onEnded={nextSong}
        loop={false}
      />
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-medium truncate">{songs[currentSongIndex].title}</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={prevSong} 
            className="text-xs bg-birthday-light px-2 py-1 rounded-md"
          >
            Prev
          </button>
          <Button 
            onClick={togglePlay} 
            size="sm" 
            variant="outline"
            className="w-8 h-8 p-0 rounded-full"
          >
            {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
          <button 
            onClick={nextSong} 
            className="text-xs bg-birthday-light px-2 py-1 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
