import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, X, MapPin, Phone, Mail } from 'lucide-react';

const condominiumImages = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80'
];

const locationImages = [
    '/Goldenrose_/T1.png',
    '/Goldenrose_/T2.png',
    '/Goldenrose_/T3.png',
    '/Goldenrose_/A1.png'
];

const amenitiesImages = [
    'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    'https://images.unsplash.com/photo-1642772253959-e316335bac79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1810',
    'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    'https://images.unsplash.com/photo-1730575208519-04fe3bee68e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1450'
    // 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
];

const t3Images = [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80',
    'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80'
];

const t4Images = [
    'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&q=80',
    'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=800&q=80',
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80',
    'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80'
];

const v4Images = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
];

interface ImageGalleryModalProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

function ImageGalleryModal({ images, isOpen, onClose, initialIndex = 0 }: ImageGalleryModalProps) {
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
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-6xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
                <Button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
                    size="icon"
                >
                    <X className="h-6 w-6" />
                </Button>

                <div className="relative">
                    <img
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="w-full h-[70vh] object-cover rounded-lg transition-all duration-500 ease-in-out"
                    />

                    <Button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
                        size="icon"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
                        size="icon"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>

                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => selectImage(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                                index === currentIndex
                                    ? 'border-[#ee9b00] ring-2 ring-[#ee9b00]/50 scale-105'
                                    : 'border-white/30 hover:border-white/60'
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

function PropertyImageModal({ images, isOpen, onClose, title }: PropertyImageModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-6xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
                <Button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
                    size="icon"
                >
                    <X className="h-6 w-6" />
                </Button>

                <div className="bg-white rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-[#772f1a] mb-6 text-center animate-in slide-in-from-top-2 duration-300">{title}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative group animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                                <img
                                    src={image}
                                    alt={`${title} image ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Ver detalhes</span>
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
        <div className="relative w-full h-96 rounded-lg overflow-hidden group shadow-2xl">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer transition-all duration-700 hover:scale-110"
                onClick={() => onImageClick(currentIndex)}
            />

            <Button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#772f1a]/80 hover:bg-[#772f1a] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                size="icon"
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#772f1a]/80 hover:bg-[#772f1a] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                size="icon"
            >
                <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                            index === currentIndex
                                ? 'bg-[#ee9b00] scale-125'
                                : 'bg-white/50 hover:bg-white/80'
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
            { threshold }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return [setRef, isInView] as const;
}

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const [ref, isInView] = useInView();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
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
    const [currentGalleryImages, setCurrentGalleryImages] = useState(condominiumImages);

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
            type: 'image',
            src: 'https://cdn.pixabay.com/photo/2020/05/06/23/07/angola-5139571_1280.jpg',
            alt: 'Modern residential building'
        },
        {
            type: 'image',
            src: 'https://cdn.pixabay.com/photo/2017/07/18/10/51/angola-2515461_1280.jpg',
            alt: 'Luxury apartment complex'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80',
            alt: 'Contemporary residential development'
        },
        {
            type: 'image',
            src: '/aereakilamba.jpg',
            alt: 'Urban residential complex'
        }
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
                                index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {media.type === 'video' ? (
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

                <div className="text-center z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="w-72 h-auto mx-auto flex items-center justify-center">
                        <img
                            src="/GoldenRoseIcon.svg"
                            alt="Goldenrose logo"
                            className="w-full h-auto"
                        />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-in slide-in-from-top-4 duration-1000 delay-300 drop-shadow-2xl">
                        Golden Rose
                    </h1>

                    <p className="text-2xl md:text-3xl mb-4 font-light animate-in slide-in-from-left-4 duration-1000 delay-500 drop-shadow-lg">
                        A harmonia entre conforto, segurança e bem-estar
                    </p>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 animate-in slide-in-from-right-4 duration-1000 delay-700 drop-shadow-lg">
                        O Golden Rose é mais do que um condomínio: é um verdadeiro lar, pensado para quem valoriza conforto,
                        modernidade e qualidade de vida.
                    </p>
                </div>                <div className="absolute inset-0 bg-black/50 animate-in fade-in duration-2000"></div>

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
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">


                {/* Location Section */}
                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-in slide-in-from-left-8 duration-1000">
                            <h2 className="text-4xl font-bold text-[#772f1a] mb-6">Localização Privilegiada</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Às portas da vibrante Cidade do Kilamba, em Luanda, nasce o Golden Rose,
                                um condomínio moderno concebido para quem valoriza acessibilidade, elegância e segurança.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Com localização privilegiada, está a escassos minutos de centros comerciais,
                                escolas, hospitais e serviços essenciais, proporcionando não só comodidade e
                                mobilidade, mas também a garantia de valorização do seu investimento.
                            </p>
                            <div className="flex items-center text-[#772f1a] font-semibold mb-4 animate-in slide-in-from-left-4 duration-1000 delay-300">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>8°59'07"S 13°16'16"E</span>
                            </div>
                            <Button
                                onClick={() => setIsLocationGalleryOpen(true)}
                                className="bg-[#ee9b00] hover:bg-[#ee9b00]/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-left-4 duration-1000 delay-500"
                            >
                                Ver Imagens da Localização
                            </Button>
                            {/*Viva o equilíbrio perfeito section*/}
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 slide-in-from-right-8 duration-1000">
                            <h3 className="text-2xl font-semibold text-[#772f1a] mb-6">Viva o equilíbrio perfeito</h3>
                            <p className="text-gray-700">
                                Entre qualidade de vida e modernidade, numa área de 9 hectares cuidadosamente planeada.
                            </p>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                {amenitiesImages.slice(0, 4).map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Location ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105 hover:shadow-md"
                                        onClick={() => openGallery(amenitiesImages, index)}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Structure Section */}
                <AnimatedSection className="mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500">
                        <h2 className="text-4xl font-bold text-[#772f1a] text-center mb-8">Estrutura Moderna e Funcional</h2>
                        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
                            O Golden Rose é um condomínio de arquitectura contemporânea, desenhado para integrar soluções
                            modernas e funcionais em perfeita harmonia com o quotidiano das famílias.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🏠', title: 'Acesso controlado', desc: 'Segurança 24h' },
                                { icon: '🌳', title: 'Ruas arborizadas', desc: 'Calmas e confortáveis' },
                                { icon: '🚗', title: 'Estacionamento', desc: 'Privativo e visitantes' },
                                { icon: '💡', title: 'Iluminação', desc: 'Moderna e inteligente' }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-4 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${index * 200}ms` }}>
                                    <div className="w-16 h-16 bg-[#ee9b00]/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#ee9b00]/30 transition-all duration-300 hover:scale-110">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h4 className="font-semibold text-[#772f1a] mb-2">{item.title}</h4>
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
                            <h2 className="text-5xl md:text-6xl font-bold text-white text-center animate-in slide-in-from-top-8 duration-1000">Disposição dos Blocos</h2>
                        </div>

                        {/* Blocks at bottom extending outside */}
                        <div className="pb-0 -mb-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {[
                                    { title: 'Blocos 1, 2, 3 e 4', desc: 'Residências de tipologia T3' },
                                    { title: 'Blocos 5 e 6', desc: 'Residências de tipologia T4' },
                                    { title: 'Bloco 7', desc: 'Espaços comerciais: lojas, salão de beleza, pastelaria, geladaria' },
                                    { title: 'Bloco 8', desc: 'Administração, creche, clínica, agência bancária' },
                                    { title: 'Blocos 9, 10 e 11', desc: 'Residências de tipologia V4' }
                                ].map((block, index) => (
                                    <Card key={index} className="border-[#ee9b00]/20 shadow-lg bg-white/95 backdrop-blur-sm transform translate-y-8 hover:translate-y-6 transition-all duration-500 hover:shadow-2xl animate-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 200}ms` }}>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-semibold text-[#772f1a] mb-4">{block.title}</h3>
                                            <p className="text-gray-700">{block.desc}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Amenities */}
                <AnimatedSection className="mb-16">
                    <div className=" p-8">
                        <h2 className="text-4xl font-bold text-[#772f1a] text-center mb-12">Comodidades</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[
                                { title: 'Campo Multiuso', desc: 'Ginásio comunitário a céu aberto' },
                                { title: 'Piscina', desc: 'Explanada e salão de festas' },
                                { title: 'Parque Infantil', desc: 'Área de lazer para crianças' },
                                { title: 'Jardim', desc: 'Espelho d\'água' }
                            ].map((amenity, index) => (
                                <div key={index} className="text-center p-4 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                                    <h4 className="font-semibold text-[#772f1a] mb-2">{amenity.title}</h4>
                                    <p className="text-sm text-gray-600">{amenity.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                            {amenitiesImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Amenity ${index + 1}`}
                                    className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom-4 duration-1000"
                                    onClick={() => openGallery(amenitiesImages, index)}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                />
                            ))}
                        </div>

                        <div className="text-center">
                            <Button
                                onClick={() => setIsAmenitiesGalleryOpen(true)}
                                className="bg-[#ee9b00] hover:bg-[#ee9b00]/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom-4 duration-1000 delay-500"
                            >
                                Ver Todas as Comodidades
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Property Types */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-4xl font-bold text-[#772f1a] text-center mb-12">Tipologias Disponíveis</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* T3 */}
                        <Card className="border-[#ee9b00]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-left-8 duration-1000">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-semibold text-[#772f1a] mb-4">T3</h3>
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
                                <h3 className="text-2xl font-semibold text-[#772f1a] mb-4">T4</h3>
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
                                <h3 className="text-2xl font-semibold text-[#772f1a] mb-4">V4</h3>
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

                {/* Contact Section */}
                <AnimatedSection className="text-center bg-gradient-to-r from-[#772f1a] to-[#ee9b00] text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 mb-16">
                    <h2 className="text-3xl font-bold mb-6">Contactos</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-center animate-in slide-in-from-left-4 duration-1000">
                            <MapPin className="h-5 w-5 mr-3" />
                            <span>Cidade do Kilamba, Zona Crescente, Bloco 8</span>
                        </div>
                        <div className="flex items-center justify-center space-x-6 animate-in slide-in-from-right-4 duration-1000 delay-200">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                <span>945 536 877</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                <span>945 537 677</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                <span>945 537 787</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-400">
                            <Mail className="h-5 w-5 mr-3" />
                            <span>geral.goldenrose@grupogirassol.co.ao</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-[#772f1a] hover:bg-gray-100 px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-left-4 duration-1000 delay-600">
                            Agendar Visita
                        </Button>
                        <Button variant="outline" className="border-white text-gray-800 hover:bg-white/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4 duration-1000 delay-800">
                            Descarregar Brochura
                        </Button>
                    </div>
                </AnimatedSection>

                {/* Photo Gallery Section */}
                <AnimatedSection className="mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <h2 className="text-4xl font-bold text-[#772f1a] text-center mb-4">Galeria do Condomínio</h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Explore cada detalhe do Golden Rose através da nossa galeria completa.
                            Descubra a elegância e modernidade que definem este projeto único.
                        </p>

                        {/* Main Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                            {condominiumImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => openGallery(condominiumImages, index)}
                                >
                                    <img
                                        src={image}
                                        alt={`Golden Rose Condominium ${index + 1}`}
                                        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                Ver imagem completa
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-[#ee9b00] text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {index + 1} / {condominiumImages.length}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Gallery Sections */}
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Location Gallery Preview */}
                            <div className="bg-gradient-to-br from-[#772f1a]/5 to-[#ee9b00]/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#772f1a] mb-4 text-center">Localização</h3>
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {locationImages.slice(0, 4).map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Location ${index + 1}`}
                                            className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                                            onClick={() => openGallery(locationImages, index)}
                                        />
                                    ))}
                                </div>
                                <Button
                                    onClick={() => setIsLocationGalleryOpen(true)}
                                    className="w-full bg-[#772f1a] hover:bg-[#772f1a]/90 text-white transition-all duration-300 hover:scale-105"
                                    size="sm"
                                >
                                    Ver Localização ({locationImages.length} fotos)
                                </Button>
                            </div>

                            {/* Amenities Gallery Preview */}
                            <div className="bg-gradient-to-br from-[#772f1a]/5 to-[#ee9b00]/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#772f1a] mb-4 text-center">Comodidades</h3>
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {amenitiesImages.slice(0, 4).map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Amenity ${index + 1}`}
                                            className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                                            onClick={() => openGallery(amenitiesImages, index)}
                                        />
                                    ))}
                                </div>
                                <Button
                                    onClick={() => setIsAmenitiesGalleryOpen(true)}
                                    className="w-full bg-[#772f1a] hover:bg-[#772f1a]/90 text-white transition-all duration-300 hover:scale-105"
                                    size="sm"
                                >
                                    Ver Comodidades ({amenitiesImages.length} fotos)
                                </Button>
                            </div>

                            {/* Property Types Gallery Preview */}
                            <div className="bg-gradient-to-br from-[#772f1a]/5 to-[#ee9b00]/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#772f1a] mb-4 text-center">Tipologias</h3>
                                <div className="grid grid-cols-3 gap-1 mb-4">
                                    <img
                                        src={t3Images[0]}
                                        alt="T3"
                                        className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                                        onClick={() => setIsT3ModalOpen(true)}
                                    />
                                    <img
                                        src={t4Images[0]}
                                        alt="T4"
                                        className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                                        onClick={() => setIsT4ModalOpen(true)}
                                    />
                                    <img
                                        src={v4Images[0]}
                                        alt="V4"
                                        className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
                                        onClick={() => setIsV4ModalOpen(true)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Button
                                        onClick={() => setIsT3ModalOpen(true)}
                                        className="w-full bg-[#772f1a] hover:bg-[#772f1a]/90 text-white transition-all duration-300 hover:scale-105"
                                        size="sm"
                                    >
                                        T3 ({t3Images.length} fotos)
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Stats */}
                        <div className="text-center bg-gradient-to-r from-[#772f1a]/10 to-[#ee9b00]/10 rounded-xl p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#772f1a]">{condominiumImages.length}</div>
                                    <div className="text-sm text-gray-600">Fotos do Condomínio</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#772f1a]">{locationImages.length}</div>
                                    <div className="text-sm text-gray-600">Fotos da Localização</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#772f1a]">{amenitiesImages.length}</div>
                                    <div className="text-sm text-gray-600">Fotos das Comodidades</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#772f1a]">{t3Images.length + t4Images.length + v4Images.length}</div>
                                    <div className="text-sm text-gray-600">Fotos das Tipologias</div>
                                </div>
                            </div>
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
            <p className=" text-gray-800  text-center">
                ©{new Date().getFullYear()} Goldenrose. Todos os direitos reservados. <br/>
                <span className={'text-sm'}>Designed and Developed by <a href={"https://autisync.com/"} className={'text-gray-900 hover:text-[#E8A341]'}>Autisync </a>
</span>
            </p>
        </div>
    );
}