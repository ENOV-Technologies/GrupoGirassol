import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Phone,
  Mail,
  Upload,
} from "lucide-react";

// Gallery images from project1 folder
const condominiumImages = [
  "/project1/1.jpeg",
  "/project1/2.jpeg",
  "/project1/3.jpeg",
  "/project1/4.jpeg",
  "/project1/5.jpeg",
  "/project1/6.jpeg",
  "/project1/7.jpeg",
  "/project1/8.jpeg",
  "/project1/9.jpeg",
  "/project1/10.jpeg",
  "/project1/11.jpeg",
  "/project1/12.jpeg",
  "/project1/13.jpeg",
  "/project1/14.jpeg",
  "/project1/15.jpeg",
  "/project1/16.jpeg",
  "/project1/17.jpeg",
  "/project1/18.jpeg",
  "/project1/19.jpeg",
  "/project1/20.jpeg",
  "/project1/21.jpeg",
  "/project1/22.jpeg",
  "/project1/23.jpeg",
  "/project1/24.jpeg",
  "/project1/25.jpeg",
  "/project1/26.jpeg",
  "/project1/27.jpeg",
  "/project1/28.jpeg",
  "/project1/29.jpeg",
  "/project1/30.jpeg",
  "/project1/31.jpeg",
  "/project1/32.jpeg",
  "/project1/33.jpeg",
  "/project1/34.jpeg",
  "/project1/35.jpeg",
  "/project1/36.jpeg",
  "/project1/37.jpeg",
  "/project1/38.jpeg",
];

const locationImages = [
  "/Goldenrose_/T1.png",
  "/Goldenrose_/T2.png",
  "/Goldenrose_/T3.png",
  "/Goldenrose_/A1.png",
];

const amenitiesImages = [
  "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  "https://images.unsplash.com/photo-1642772253959-e316335bac79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1810",
  "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
  "https://images.unsplash.com/photo-1730575208519-04fe3bee68e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1450",
  // 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
];

// T3, T4, V4 images from project1 folder
const t3Images = [
  "/project1/1.jpeg",
  "/project1/2.jpeg",
  "/project1/3.jpeg",
  "/project1/4.jpeg",
  "/project1/5.jpeg",
  "/project1/6.jpeg",
  "/project1/7.jpeg",
  "/project1/8.jpeg",
  "/project1/9.jpeg",
  "/project1/10.jpeg",
  "/project1/11.jpeg",
  "/project1/12.jpeg",
  "/project1/13.jpeg",
];

const t4Images = [
  "/project1/14.jpeg",
  "/project1/15.jpeg",
  "/project1/16.jpeg",
  "/project1/17.jpeg",
  "/project1/18.jpeg",
  "/project1/19.jpeg",
  "/project1/20.jpeg",
  "/project1/21.jpeg",
  "/project1/22.jpeg",
  "/project1/23.jpeg",
  "/project1/24.jpeg",
  "/project1/25.jpeg",
];

const v4Images = [
  "/project1/26.jpeg",
  "/project1/27.jpeg",
  "/project1/28.jpeg",
  "/project1/29.jpeg",
  "/project1/30.jpeg",
  "/project1/31.jpeg",
  "/project1/32.jpeg",
  "/project1/33.jpeg",
  "/project1/34.jpeg",
  "/project1/35.jpeg",
  "/project1/36.jpeg",
  "/project1/37.jpeg",
  "/project1/38.jpeg",
];

interface ImageGalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

function ImageGalleryModal({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
        <Button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
          size="icon"
        >
          <X className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>

        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] object-cover rounded-lg transition-all duration-500 ease-in-out"
          />

          <Button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>

          <Button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
            size="icon"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>
        </div>

        <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-4 overflow-x-auto pb-2 px-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                index === currentIndex
                  ? "border-[#ee9b00] ring-2 ring-[#ee9b00]/50 scale-105"
                  : "border-white/30 hover:border-white/60"
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
      </div>
    </div>
  );
}

interface PropertyImageModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

function PropertyImageModal({
  images,
  isOpen,
  onClose,
  title,
}: PropertyImageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
        <Button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
          size="icon"
        >
          <X className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>

        <div className="bg-white rounded-lg p-3 sm:p-6 max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#772f1a] mb-4 sm:mb-6 text-center animate-in slide-in-from-top-2 duration-300">
            {title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group animate-in fade-in slide-in-from-bottom-2 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm sm:text-base transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Ver detalhes
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImageSliderProps {
  images: string[];
  onImageClick: (index: number) => void;
}

function ImageSlider({ images, onImageClick }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden group shadow-2xl">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover cursor-pointer transition-all duration-700 hover:scale-110"
        onClick={() => onImageClick(currentIndex)}
      />

      <Button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#772f1a]/80 hover:bg-[#772f1a] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#772f1a]/80 hover:bg-[#772f1a] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </Button>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? "bg-[#ee9b00] scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Intersection Observer Hook for scroll animations
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold },
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isInView] as const;
}

// Animated Section Component
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function GoldenRose() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const [currentGalleryImages, setCurrentGalleryImages] =
    useState(condominiumImages);

  const [isLocationGalleryOpen, setIsLocationGalleryOpen] = useState(false);
  const [isAmenitiesGalleryOpen, setIsAmenitiesGalleryOpen] = useState(false);

  const [isT3ModalOpen, setIsT3ModalOpen] = useState(false);
  const [isT4ModalOpen, setIsT4ModalOpen] = useState(false);
  const [isV4ModalOpen, setIsV4ModalOpen] = useState(false);

  // Hero carousel state
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Hero carousel media (mix of videos and images)
  const heroMedia = [
    // {
    //     type: 'video',
    //     src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761',
    //     alt: 'Luxury residential complex video'
    // },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2020/05/06/23/07/angola-5139571_1280.jpg",
      alt: "Modern residential building",
    },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2017/07/18/10/51/angola-2515461_1280.jpg",
      alt: "Luxury apartment complex",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
      alt: "Contemporary residential development",
    },
    {
      type: "image",
      src: "/aereakilamba.jpg",
      alt: "Urban residential complex",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroMedia.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [heroMedia.length]);

  const openGallery = (images: string[], index: number = 0) => {
    setCurrentGalleryImages(images);
    setGalleryStartIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Carousel */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#772f1a] to-[#ee9b00] text-white overflow-hidden">
        {/* Background Media Carousel */}
        <div className="absolute inset-0">
          {heroMedia.map((media, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {media.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={media.src} type="video/mp4" />
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
                    alt="Fallback"
                    className="w-full h-full object-cover"
                  />
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 px-4">
          <div className="w-48 sm:w-60 md:w-72 h-auto mx-auto flex items-center justify-center mb-4 sm:mb-6">
            <img
              src="/GoldenRoseIcon.svg"
              alt="Goldenrose logo"
              className="w-full h-auto"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-top-4 duration-1000 delay-300 drop-shadow-2xl">
            Golden Rose
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 font-light animate-in slide-in-from-left-4 duration-1000 delay-500 drop-shadow-lg px-2">
            A harmonia entre conforto, segurança e bem-estar
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 animate-in slide-in-from-right-4 duration-1000 delay-700 drop-shadow-lg">
            O Golden Rose é mais do que um condomínio: é um verdadeiro lar,
            pensado para quem valoriza conforto, modernidade e qualidade de
            vida.
          </p>
        </div>{" "}
        <div className="absolute inset-0 bg-black/50 animate-in fade-in duration-2000"></div>
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Location Section */}
        <AnimatedSection className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#772f1a] text-center mb-3 sm:mb-4">
              Localização Privilegiada
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-2">
              Às portas da vibrante Cidade do Kilamba, em Luanda, nasce o Golden
              Rose, um condomínio moderno concebido para quem valoriza
              acessibilidade, elegância e segurança.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <div className="bg-gradient-to-r from-[#772f1a]/10 to-[#ee9b00]/10 rounded-xl p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#772f1a] mb-3 sm:mb-4">
                    Com localização privilegiada
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                    Está a escassos minutos de centros comerciais, escolas,
                    hospitais e serviços essenciais, proporcionando não só
                    comodidade e mobilidade, mas também a garantia de
                    valorização do seu investimento.
                  </p>
                  <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#ee9b00] mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="font-mono text-xs sm:text-sm">
                      8°59'07"S 13°16'16"E
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => setIsLocationGalleryOpen(true)}
                  className="w-full bg-[#ee9b00] hover:bg-[#ee9b00]/90 text-white py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105"
                >
                  Ver Imagens da Localização
                </Button>
              </div>

              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <img
                  src="/goldenrose/location-overview.png"
                  alt="Golden Rose Location Overview"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() =>
                    openGallery(
                      ["/goldenrose/location-overview.png", ...locationImages],
                      0,
                    )
                  }
                />
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {locationImages.slice(0, 2).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Location ${index + 1}`}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => openGallery(locationImages, index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* New Video & Lifestyle Section */}
        <AnimatedSection className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-gradient-to-br from-[#772f1a]/5 via-white to-[#ee9b00]/5 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#772f1a] text-center mb-3 sm:mb-4">
              Viva o Equilíbrio Perfeito
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-2">
              Entre qualidade de vida e modernidade, numa área de 9 hectares
              cuidadosamente planeada. Descubra como será viver no Golden Rose
              através do nosso tour virtual.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Video Section */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl group">
                  <video
                    controls
                    className="w-full aspect-video object-cover rounded-xl"
                    poster="/goldenrose/video-poster-improved.png"
                  >
                    <source src="/video/rose golde .mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-white">
                    <h4 className="font-semibold text-xs sm:text-sm">
                      Tour Virtual Golden Rose
                    </h4>
                    <p className="text-xs text-white/80 hidden sm:block">
                      Conheça cada detalhe do projeto
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                  <h4 className="text-base sm:text-lg font-semibold text-[#772f1a] mb-2 sm:mb-3">
                    Destaques do Vídeo
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ee9b00] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      Vista aérea do condomínio
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ee9b00] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      Tour pelas comodidades
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ee9b00] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      Apresentação das tipologias
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ee9b00] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      Localização e acessos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lifestyle Images from uploaded reference */}
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#772f1a] text-center mb-4 sm:mb-6">
                  Estilo de Vida Golden Rose
                </h3>

                {/* Main lifestyle showcase image */}
                <img
                  src="/goldenrose/lifestyle-section.png"
                  alt="Golden Rose Lifestyle Overview"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() =>
                    openGallery(
                      [
                        "/goldenrose/lifestyle-section.png",
                        ...condominiumImages,
                      ],
                      0,
                    )
                  }
                />

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="space-y-2 sm:space-y-4">
                    <img
                      src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80"
                      alt="Lifestyle - Pool Area"
                      className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => openGallery(amenitiesImages, 0)}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                      alt="Lifestyle - Garden"
                      className="w-full h-20 sm:h-24 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => openGallery(amenitiesImages, 3)}
                    />
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <img
                      src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&q=80"
                      alt="Lifestyle - Family Area"
                      className="w-full h-20 sm:h-24 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => openGallery(amenitiesImages, 2)}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80"
                      alt="Lifestyle - Fitness"
                      className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => openGallery(amenitiesImages, 1)}
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#772f1a]/10 to-[#ee9b00]/10 rounded-xl p-4 sm:p-6 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-[#772f1a] mb-1 sm:mb-2">
                    9 Hectares de Pura Elegância
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Um projeto pensado nos mínimos detalhes para proporcionar
                    qualidade de vida excepcional
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 sm:mt-10 lg:mt-12">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md inline-block w-full sm:w-auto">
                <h4 className="text-lg sm:text-xl font-semibold text-[#772f1a] mb-2 sm:mb-3">
                  Interessado em saber mais?
                </h4>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button className="bg-[#772f1a] hover:bg-[#772f1a]/90 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Agendar Visita
                  </Button>
                  <Button className="bg-[#ee9b00] hover:bg-[#ee9b00]/90 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Solicitar Informações
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Structure Section */}
        <AnimatedSection className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-4xl font-bold text-[#772f1a] text-center mb-4">
              Estrutura Moderna e Funcional
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              O Golden Rose é um condomínio de arquitetura contemporânea,
              desenhado para integrar soluções modernas e funcionais em perfeita
              harmonia com o quotidiano das famílias.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🏠",
                  title: "Acesso controlado",
                  desc: "Segurança 24h",
                },
                {
                  icon: "🌳",
                  title: "Ruas arborizadas",
                  desc: "Calmas e confortáveis",
                },
                {
                  icon: "🚗",
                  title: "Estacionamento",
                  desc: "Privativo e visitantes",
                },
                {
                  icon: "💡",
                  title: "Iluminação",
                  desc: "Moderna e inteligente",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-[#ee9b00]/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#ee9b00]/30 transition-all duration-300 hover:scale-110">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-semibold text-[#772f1a] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Blocks Layout */}
        <AnimatedSection className="mb-16 relative h-screen -mx-6">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/32270941/pexels-photo-32270941.jpeg"
              alt="Golden Rose Complex"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between px-8">
            {/* Title in center */}
            <div className="flex-1 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white text-center animate-in slide-in-from-top-8 duration-1000">
                Disposição dos Blocos
              </h2>
            </div>

            {/* Blocks at bottom extending outside */}
            <div className="pb-0 -mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Blocos 1, 2, 3 e 4",
                    desc: "Residências de tipologia T3",
                  },
                  {
                    title: "Blocos 5 e 6",
                    desc: "Residências de tipologia T4",
                  },
                  {
                    title: "Bloco 7",
                    desc: "Espaços comerciais: lojas, salão de beleza, pastelaria, geladaria",
                  },
                  {
                    title: "Bloco 8",
                    desc: "Administração, creche, clínica, agência bancária",
                  },
                  {
                    title: "Blocos 9, 10 e 11",
                    desc: "Residências de tipologia V4",
                  },
                ].map((block, index) => (
                  <Card
                    key={index}
                    className="border-[#ee9b00]/20 shadow-lg bg-white/95 backdrop-blur-sm transform translate-y-8 hover:translate-y-6 transition-all duration-500 hover:shadow-2xl animate-in slide-in-from-bottom-8 duration-1000"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#772f1a] mb-4">
                        {block.title}
                      </h3>
                      <p className="text-gray-700">{block.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Amenities - Enhanced User-Friendly Section */}
        <AnimatedSection className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#772f1a] text-center mb-3 sm:mb-4">
              Comodidades
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-2">
              Desfrute de um conjunto completo de comodidades pensadas para o
              seu bem-estar e lazer da família.
            </p>

            {/* Featured Amenities Image */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <img
                src="/goldenrose/amenities-section.png"
                alt="Golden Rose Amenities Overview"
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() =>
                  openGallery(
                    ["/goldenrose/amenities-section.png", ...amenitiesImages],
                    0,
                  )
                }
              />
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {[
                {
                  title: "Campo Multiuso",
                  desc: "Ginásio comunitário a céu aberto",
                  icon: "⚽",
                  image:
                    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&q=80",
                },
                {
                  title: "Piscina",
                  desc: "Explanada e salão de festas",
                  icon: "🏊‍♂️",
                  image:
                    "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80",
                },
                {
                  title: "Parque Infantil",
                  desc: "Área de lazer para crianças",
                  icon: "🎪",
                  image:
                    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
                },
                {
                  title: "Jardim",
                  desc: "Espelho d'água e áreas verdes",
                  icon: "🌳",
                  image:
                    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&q=80",
                },
              ].map((amenity, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#772f1a]/5 to-[#ee9b00]/5 rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group animate-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => openGallery(amenitiesImages, index)}
                >
                  <div className="relative mb-4">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center text-lg sm:text-xl">
                      {amenity.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#772f1a] mb-2 text-sm sm:text-base">
                    {amenity.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {amenity.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="text-center">
              <Button
                onClick={() => setIsAmenitiesGalleryOpen(true)}
                className="bg-[#ee9b00] hover:bg-[#ee9b00]/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom-4 duration-1000 delay-500"
              >
                Ver Todas as Comodidades
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Typologies Section - Original Simple Layout */}
        <AnimatedSection className="mb-16">
          <h2 className="text-4xl font-bold text-[#772f1a] text-center mb-12">
            Tipologias Disponíveis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* T3 */}
            <Card className="border-[#ee9b00]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-left-8 duration-1000">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#772f1a] mb-4">
                  T3
                </h3>
                <p className="text-gray-700 mb-4">331,51m² de área habitável</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Três suítes espaçosas</li>
                  <li>• Sala de estar e jantar integrada</li>
                  <li>• Cozinha generosa</li>
                  <li>• Escritório versátil</li>
                  <li>• Piscina e área de lazer</li>
                  <li>• 6 WCs no total</li>
                </ul>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {t3Images.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`T3 ${index + 1}`}
                      className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                      onClick={() => setIsT3ModalOpen(true)}
                    />
                  ))}
                </div>
                <Button
                  onClick={() => setIsT3ModalOpen(true)}
                  className="w-full bg-[#772f1a] hover:bg-[#772f1a]/90 text-white transition-all duration-300 hover:scale-105"
                >
                  Ver Galeria T3
                </Button>
              </CardContent>
            </Card>

            {/* T4 */}
            <Card className="border-[#ee9b00]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#772f1a] mb-4">
                  T4
                </h3>
                <p className="text-gray-700 mb-4">321,40m² de área habitável</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Suite Master espaçosa</li>
                  <li>• Quartos com WC integrados</li>
                  <li>• Sala íntima</li>
                  <li>• Mezanino</li>
                  <li>• Piscina e esplanada</li>
                  <li>• Escritório</li>
                </ul>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {t4Images.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`T4 ${index + 1}`}
                      className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                      onClick={() => setIsT4ModalOpen(true)}
                    />
                  ))}
                </div>
                <Button
                  onClick={() => setIsT4ModalOpen(true)}
                  className="w-full bg-[#772f1a] hover:bg-[#772f1a]/90 text-white transition-all duration-300 hover:scale-105"
                >
                  Ver Galeria T4
                </Button>
              </CardContent>
            </Card>

            {/* V4 */}
            <Card className="border-[#ee9b00]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-right-8 duration-1000 delay-400">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#772f1a] mb-4">
                  V4
                </h3>
                <p className="text-gray-700 mb-4">321,40m² de área habitável</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Vivenda de dois pisos</li>
                  <li>• Garagem para 4 viaturas</li>
                  <li>• Área de 600m²</li>
                  <li>• Suítes modernas</li>
                  <li>• Piscina e esplanada</li>
                  <li>• Mezanino moderno</li>
                </ul>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {v4Images.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`V4 ${index + 1}`}
                      className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                      onClick={() => setIsV4ModalOpen(true)}
                    />
                  ))}
                </div>
                <Button
                  onClick={() => setIsV4ModalOpen(true)}
                  className="w-full bg-[#772f1a] hover:bg-[#772f1a]/90 text-white transition-all duration-300 hover:scale-105"
                >
                  Ver Galeria V4
                </Button>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Contact Section - Enhanced User-Friendly */}
        <AnimatedSection className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-gradient-to-br from-[#772f1a] via-[#8b3a1f] to-[#ee9b00] text-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Featured Contact Image */}
            <div className="mb-6 sm:mb-8 text-center">
              <img
                src="/goldenrose/contact-section.png"
                alt="Golden Rose Contact Information"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
              Contactos
            </h2>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Location */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-3 mt-1 flex-shrink-0 text-[#ee9b00]" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">
                      Localização
                    </h3>
                    <p className="text-sm sm:text-base text-white/90">
                      Cidade do Kilamba, Zona Crescente, Bloco 8
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start mb-3">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 mr-3 mt-1 flex-shrink-0 text-[#ee9b00]" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 break-all">
                      geral.goldenrose@grupogirassol.co.ao
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-[#ee9b00]" />
                <h3 className="font-semibold text-base sm:text-lg">
                  Telefones
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {["945 536 877", "945 537 677", "945 537 787"].map(
                  (phone, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <span className="text-sm sm:text-base font-medium">
                        {phone}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="bg-white text-[#772f1a] hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-left-4 duration-1000 delay-600">
                <Phone className="h-4 w-4 mr-2" />
                Agendar Visita
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#772f1a] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4 duration-1000 delay-800"
              >
                <Upload className="h-4 w-4 mr-2" />
                Descarregar Brochura
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <p className="text-xs sm:text-sm text-white/80">
                Horário de atendimento: Segunda a Sexta, 8h às 17h | Sábado, 8h
                às 12h
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Photo Gallery */}
        <AnimatedSection className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#772f1a] text-center mb-3 sm:mb-4">
              Galeria do Condomínio
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-2">
              Explore cada detalhe do Golden Rose através da nossa galeria
              completa de imagens.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {condominiumImages.slice(0, 12).map((image, index) => (
                <div
                  key={index}
                  className="relative group animate-in fade-in slide-in-from-bottom-2 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={image}
                    alt={`Golden Rose Gallery ${index + 1}`}
                    className="w-full h-24 sm:h-32 lg:h-40 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => openGallery(condominiumImages, index)}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-xs sm:text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Ver imagem
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => openGallery(condominiumImages, 0)}
                className="bg-[#772f1a] hover:bg-[#772f1a]/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom-4 duration-1000 delay-500"
              >
                Ver Galeria Completa ({condominiumImages.length} fotos)
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={currentGalleryImages}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        initialIndex={galleryStartIndex}
      />

      {/* Location Gallery Modal */}
      <ImageGalleryModal
        images={locationImages}
        isOpen={isLocationGalleryOpen}
        onClose={() => setIsLocationGalleryOpen(false)}
        initialIndex={0}
      />

      {/* Amenities Gallery Modal */}
      <ImageGalleryModal
        images={amenitiesImages}
        isOpen={isAmenitiesGalleryOpen}
        onClose={() => setIsAmenitiesGalleryOpen(false)}
        initialIndex={0}
      />

      {/* Property Type Modals */}
      <PropertyImageModal
        images={t3Images}
        isOpen={isT3ModalOpen}
        onClose={() => setIsT3ModalOpen(false)}
        title="Tipologia T3 - Galeria de Imagens"
      />

      <PropertyImageModal
        images={t4Images}
        isOpen={isT4ModalOpen}
        onClose={() => setIsT4ModalOpen(false)}
        title="Tipologia T4 - Galeria de Imagens"
      />

      <PropertyImageModal
        images={v4Images}
        isOpen={isV4ModalOpen}
        onClose={() => setIsV4ModalOpen(false)}
        title="Tipologia V4 - Galeria de Imagens"
      />

      {/* T3 Modal */}
      {isT3ModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#772f1a]">
                  Galeria T3
                </h3>
                <Button
                  onClick={() => setIsT3ModalOpen(false)}
                  variant="outline"
                  size="sm"
                >
                  ✕
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {t3Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`T3 ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                    onClick={() => openGallery(t3Images, index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* T4 Modal */}
      {isT4ModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#772f1a]">
                  Galeria T4
                </h3>
                <Button
                  onClick={() => setIsT4ModalOpen(false)}
                  variant="outline"
                  size="sm"
                >
                  ✕
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {t4Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`T4 ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                    onClick={() => openGallery(t4Images, index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* V4 Modal */}
      {isV4ModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#772f1a]">
                  Galeria V4
                </h3>
                <Button
                  onClick={() => setIsV4ModalOpen(false)}
                  variant="outline"
                  size="sm"
                >
                  ✕
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {v4Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`V4 ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                    onClick={() => openGallery(v4Images, index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <p className=" text-gray-800  text-center">
        ©{new Date().getFullYear()} Goldenrose. Todos os direitos reservados.{" "}
        <br />
        <span className={"text-sm"}>
          Designed and Developed by{" "}
          <a
            href={"https://autisync.com/"}
            className={"text-gray-900 hover:text-[#E8A341]"}
          >
            Autisync{" "}
          </a>
        </span>
      </p>
    </div>
  );
}
