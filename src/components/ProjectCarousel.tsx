
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play do carrossel
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      
      // Reset do estado de transição após a animação
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

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
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-in-out",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <img
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrevious}
          className="bg-robotics-black/60 hover:bg-robotics-black/80 rounded-full"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext}
          className="bg-robotics-black/60 hover:bg-robotics-black/80 rounded-full"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex 
                  ? "bg-robotics-purple-light" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => {
                  setIsTransitioning(false);
                }, 500);
              }}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
