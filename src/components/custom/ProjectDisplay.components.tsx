import { useEffect, useRef } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';

// --- Sample project data --- //
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack React + Node marketplace with Stripe integration.',
        img: '/projects/ecommerce.jpg',
    },
    {
        title: 'SaaS Dashboard',
        description: 'Real-time analytics dashboard built with Next.js & Tailwind.',
        img: '/projects/dashboard.jpg',
    },
    {
        title: 'Corporate Website',
        description: 'SEO-optimized, fully responsive site for a Fortune-500 client.',
        img: '/projects/corporate.jpg',
    },
    {
        title: 'Mobile-First WebApp',
        description: 'PWA for field technicians - offline sync & push notifications.',
        img: '/projects/pwa.jpg',
    },
    {
        title: 'Consulting Portal',
        description: 'Booking system + video calls for remote consulting services.',
        img: '/projects/consulting.jpg',
    },
    {
        title: 'AI-Powered Tool',
        description: 'Custom GPT wrapper with secure API gateway for enterprise.',
        img: '/projects/ai-tool.jpg',
    },
];

const ProjectDisplayComponents = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    // Mark the currently centered slide
    useEffect(() => {
        const viewport = carouselRef.current?.querySelector('.embla__viewport');
        if (!viewport) return;

        const slides = viewport.querySelectorAll<HTMLElement>('.embla__slide');

        const updateCenter = () => {
            slides.forEach((s) => s.removeAttribute('data-center'));
            const centerIdx = Math.round(
                (viewport.scrollLeft + viewport.clientWidth / 2) /
                (slides[0]?.clientWidth || 1)
            );
            slides[centerIdx]?.setAttribute('data-center', 'true');
        };

        viewport.addEventListener('scroll', updateCenter);
        updateCenter();

        return () => viewport.removeEventListener('scroll', updateCenter);
    }, []);

    return (
        <>
            {/* ====================== PROJECTS CAROUSEL ====================== */}
            <section id="Projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
                <div className="hero px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Our Recent Projects
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Websites, web-apps, and consulting solutions we delivered for
                            happy clients.
                        </p>
                    </div>

                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnInteraction: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {projects.map((proj, idx) => (
                                <CarouselItem
                                    key={idx}
                                    className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 transition-all duration-300"
                                    style={{
                                        transform: 'scale(1)',
                                        opacity: 1,
                                    }}
                                >
                                    <Card className="h-full overflow-hidden">
                                        <CardContent className="p-0">
                                            <div className="aspect-video bg-muted/50 relative">
                                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                                    <span className="text-sm text-gray-500">
                                                        {proj.img.replace('/projects/', '').replace('.jpg', '')}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-4 space-y-2">
                                                <h3 className="font-semibold text-lg">{proj.title}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {proj.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation arrows */}
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 bg-background/80 backdrop-blur-sm border shadow-md hover:bg-background" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 bg-background/80 backdrop-blur-sm border shadow-md hover:bg-background" />
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default ProjectDisplayComponents