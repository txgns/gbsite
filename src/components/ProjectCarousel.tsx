
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log("ProjectCarousel - images:", images);
  console.log("ProjectCarousel - currentIndex:", currentIndex);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-robotics-black-lighter flex flex-col items-center justify-center rounded-xl">
        <ImageIcon size={40} className="text-robotics-purple-light/50 mb-2" />
        <p className="text-white/50">Nenhuma imagem disponível</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="aspect-w-16 aspect-h-9 bg-robotics-black-lighter">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <img
            src={images[currentIndex]}
            alt={`Imagem ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              console.error(`Error loading image at index ${currentIndex}:`, images[currentIndex]);
              e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475"; // Fallback image
            }}
          />
          
          <div className="absolute bottom-4 right-4 bg-robotics-black/70 px-3 py-1 rounded-full text-sm text-white/80">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrevious}
          className="bg-robotics-black/60 hover:bg-robotics-black/80 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext}
          className="bg-robotics-black/60 hover:bg-robotics-black/80 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
