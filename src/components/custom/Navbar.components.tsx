import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import logo from "/SyncCraft-logo.svg";

const navigationItems = [
    { title: 'Services', Location: 'Services' },
    { title: 'About', Location: 'About' },
    { title: 'Contact', Location: `${import.meta.env.BASE_URL}#Contact` },
];

const NavbarComponents = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    return (
        <>
            {/* ====================== NAVBAR ====================== */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="flex h-16 items-center justify-between px-4 md:px-6">
                    {/* Logo */}
                    <Link to="/#Home" className="flex items-center space-x-2">
                        <img 
                        src={logo}
                        alt="SyncCraft logo"
                        className="h-8 w-8 object-contain"/>
                        <span className="text-xl font-bold">SyncCraft</span>
                    </Link>

                    {/* Desktop Nav */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink
                                        href={item.Location}
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
                            navigate(import.meta.env.BASE_URL + "/#Contact");
                            document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
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
                                        <Link
                                            key={item.title}
                                            to={item.Location}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium transition-colors hover:text-primary py-2"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                    <Button className="mt-6 w-full" onClick={() => {
                                        setIsOpen(false);
                                        document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
                                        
                                    }}>Contact Us</Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavbarComponents