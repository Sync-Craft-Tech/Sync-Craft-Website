import React, { useState } from 'react'
import './App.css'

import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

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
    description: 'PWA for field technicians – offline sync & push notifications.',
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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  }

  const navigationItems = [
    { title: 'Services', href: '#Services' },
    { title: 'About', href: '#About' },
    { title: 'Contact', href: '#Contact' },
  ];


  return (
    <>
      {/* ====================== NAVBAR ====================== */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold">SyncCraft</span>
          </a>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>Contact Us</Button>

            {/* Mobile Hamburger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-80 p-0 transition-transform duration-300 ease-in-out"
              >
                {/* Header inside sheet */}
                <div className="flex items-center justify-between p-6 border-b">
                  <a href="#home" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-primary" />
                    <span className="text-xl font-bold">SyncCraft</span>
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col space-y-2 p-6">
                  {navigationItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary py-2"
                    >
                      {item.title}
                    </a>
                  ))}
                  <Button className="mt-6 w-full" onClick={() => {
                    setIsOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}>Contact Us</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ====================== HERO ====================== */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="hero px-4 md:px-6">
          <div className="absolute z-0 inset-0 overflow-hidden opacity-20">
            <svg id="background-svg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#ffffff' width='2000' height='1500' /><defs><rect stroke='#ffffff' stroke-width='0.4' width='1' height='1' id='s' /><pattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><use fill='#fcfcfc' href='#s' y='2' /><use fill='#fcfcfc' href='#s' x='1' y='2' /><use fill='#fafafa' href='#s' x='2' y='2' /><use fill='#fafafa' href='#s' /><use fill='#f7f7f7' href='#s' x='2' /><use fill='#f7f7f7' href='#s' x='1' y='1' /></pattern><pattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f5f5f5'><use href='#s' /><use href='#s' y='5' /><use href='#s' x='1' y='10' /><use href='#s' x='2' y='1' /><use href='#s' x='2' y='4' /><use href='#s' x='3' y='8' /><use href='#s' x='4' y='3' /><use href='#s' x='4' y='7' /><use href='#s' x='5' y='2' /><use href='#s' x='5' y='6' /><use href='#s' x='6' y='9' /></g></pattern><pattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f5f5f5'><use href='#s' y='5' /><use href='#s' y='8' /><use href='#s' x='1' y='1' /><use href='#s' x='1' y='9' /><use href='#s' x='1' y='12' /><use href='#s' x='2' /><use href='#s' x='2' y='4' /><use href='#s' x='3' y='2' /><use href='#s' x='3' y='6' /><use href='#s' x='3' y='11' /><use href='#s' x='4' y='3' /><use href='#s' x='4' y='7' /><use href='#s' x='4' y='10' /></g></pattern><pattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f2f2f2'><use href='#s' y='11' /><use href='#s' x='2' y='9' /><use href='#s' x='5' y='12' /><use href='#s' x='9' y='4' /><use href='#s' x='12' y='1' /><use href='#s' x='16' y='6' /></g></pattern><pattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#ffffff'><use href='#s' y='9' /><use href='#s' x='16' y='5' /><use href='#s' x='14' y='2' /><use href='#s' x='11' y='11' /><use href='#s' x='6' y='14' /></g><g fill='#efefef'><use href='#s' x='3' y='13' /><use href='#s' x='9' y='7' /><use href='#s' x='13' y='10' /><use href='#s' x='15' y='4' /><use href='#s' x='18' y='1' /></g></pattern><pattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='2' y='5' /><use href='#s' x='16' y='38' /><use href='#s' x='46' y='42' /><use href='#s' x='29' y='20' /></g></pattern><pattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='33' y='13' /><use href='#s' x='27' y='54' /><use href='#s' x='55' y='55' /></g></pattern><pattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='11' y='8' /><use href='#s' x='51' y='13' /><use href='#s' x='17' y='73' /><use href='#s' x='99' y='57' /></g></pattern></defs><rect fill='url(#a)' width='100%' height='100%' /><rect fill='url(#b)' width='100%' height='100%' /><rect fill='url(#h)' width='100%' height='100%' /><rect fill='url(#c)' width='100%' height='100%' /><rect fill='url(#d)' width='100%' height='100%' /><rect fill='url(#e)' width='100%' height='100%' /><rect fill='url(#f)' width='100%' height='100%' /><rect fill='url(#g)' width='100%' height='100%' /></svg>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build Something
                  <span className="text-primary"> Amazing</span> Today
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Create beautiful, modern applications with our powerful
                  platform. Start building your next big idea with confidence
                  and style.
                </p>
              </div>

            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary/20 blur-3xl" />
                <div className="relative bg-muted border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <svg className="h-24 w-24 mx-auto animate-bounce"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true">
                      <circle cx="50" cy="50" r="50" className="text-primary opacity-10" fill="currentColor" />
                      <circle cx="50" cy="50" r="32" className="text-primary" fill="currentColor" />


                    </svg>
                    <p className="text-muted-foreground"> ---INSERT SOME IMAGE/LOGO---</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== PROJECTS CAROUSEL ====================== */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
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

      {/* ====================== CONTACT ====================== */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="hero px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or want to work together? We'd love to hear
                from you.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl mt-12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* ====================== FOOTER ====================== */}
      <footer className="w-full border-t py-12 md:py-16">
        <div className="footer px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-3 flex-1">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary" />
                <span className="text-xl font-bold">SyncCraft</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building amazing experiences for the modern web.
              </p>
            </div>

            {['Company', 'Legal'].map((col) => (
              <div key={col} className="space-y-2 flex-1">
                <h3 className="text-sm font-semibold">{col}</h3>
                <ul className="space-y-1">
                  {(col === 'Company'
                    ? ['About']
                    : col === 'Legal'
                      ? ['Privacy', 'Terms', 'Cookie Policy']
                      : [])
                    .map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 SyncCraft. All rights reserved.</p>
            <p>Thanks to <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App
