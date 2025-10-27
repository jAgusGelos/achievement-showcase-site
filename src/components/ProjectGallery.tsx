import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    images: string[];
  };
}

const ProjectGallery = ({ isOpen, onClose, project }: ProjectGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black/95">
        <div className="relative w-full h-full">
          {/* Header */}
          <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-md transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Navigation */}
          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-white' 
                      : 'border-white/50 hover:border-white/80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 text-white text-sm">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;
