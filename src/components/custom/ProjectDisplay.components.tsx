// TODO: Improve look and fix any jitter issues
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

                    <div className="relative w-full">
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true,
                                containScroll: 'trimSnaps',
                                //this helps reduce jitter while the carousel is scrolling
                                watchDrag: true,
                                skipSnaps: false,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 4500,
                                    stopOnInteraction: true,
                                }),
                            ]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {projects.map((proj, idx) => (
                                    <CarouselItem
                                        key={idx}
                                        //"will-change-transform" and "transform: translate3d(0,0,0)" help with performance and reduce jitter by enabling GPU acceleration. Hopefully this will fix the jumping issue. 
                                        className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 transition-transform duration-500 will-change-transform"
                                        style={{
                                            transform: 'translate3d(0, 0, 0)',
                                            //this is to hide any flickering during transitions
                                            backfaceVisibility: 'hidden',
                                            perspective: '1000px',
                                        }}
                                    >
                                        <Card className="h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                            <CardContent className="p-0">
                                                <div className="aspect-video relative overflow-hidden">
                                                    {/* image */}
                                                    <img
                                                        src={proj.img}
                                                        alt={proj.title}
                                                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                                                        loading="lazy"
                                                    />

                                                    {/* subtle gradient overlay and caption */}
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                                    <div className="absolute left-4 bottom-4 right-4 text-left text-white pointer-events-auto">
                                                        <h3 className="font-semibold text-lg drop-shadow-sm">
                                                            {proj.title}
                                                        </h3>
                                                        <p className="text-sm opacity-90 mt-1 drop-shadow-sm">
                                                            {proj.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* meta / actions area */}
                                                <div className="p-4 flex items-center justify-between gap-4">
                                                    <div className="text-sm text-muted-foreground">
                                                        <span className="font-medium">Role:</span> Design & Dev
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            className="text-sm px-3 py-1 rounded-md border bg-background/60 hover:bg-background text-muted-foreground transition"
                                                            aria-label={`View ${proj.title}`}
                                                        >
                                                            View Case
                                                        </button>
                                                        <button
                                                            className="text-sm px-3 py-1 rounded-md border border-transparent bg-primary text-white hover:brightness-95 transition"
                                                            aria-label={`Contact about ${proj.title}`}
                                                        >
                                                            Get in Touch
                                                        </button>
                                                    </div>
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

                        {/* simple indicators */}
                        <div className="mt-6 flex items-center justify-center gap-2">
                            {projects.map((_, i) => (
                                <span
                                    key={i}
                                    className="h-2 w-8 rounded-full bg-background/60 opacity-60"
                                    aria-hidden
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectDisplayComponents