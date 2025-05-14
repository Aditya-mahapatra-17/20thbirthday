
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

const PhotoGallery = ({ photos, className }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", className)}>
      {photos.map((photo, index) => (
        <div 
          key={index}
          className="overflow-hidden rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setSelectedPhoto(photo)}
        >
          <div className="aspect-square overflow-hidden">
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-2 bg-white/80 text-center">
            <p className="text-sm text-muted-foreground">{photo.caption}</p>
          </div>
        </div>
      ))}

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-6">
          {selectedPhoto && (
            <div>
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt} 
                className="w-full max-h-[70vh] object-contain rounded-md mb-4"
              />
              <p className="text-center font-medium">{selectedPhoto.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
