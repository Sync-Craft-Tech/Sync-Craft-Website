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
import { Link } from "react-router-dom";

import logo from "/SyncCraft-logo.svg";

const navigationItems = [
    { title: 'Services', Location: `${import.meta.env.BASE_URL}#Services` },
    { title: 'Contact Us', Location: `${import.meta.env.BASE_URL}#Contact` }
];

const navLinkClass = "text-base font-medium transition-colors hover:text-primary";

const NavbarComponents = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 bg-background/80 backdrop-blur-xl shadow-lg border rounded-full w-auto px-6 py-2 transition hover:scale-[1.02] hover:shadow-xl">
                <div className="flex h-16 items-center justify-between gap-8">
                    {/* Logo */}
                    <Link to="/#Home" className="flex items-center gap-4">
                        <img 
                            src={logo}
                            alt="SyncCraft logo"
                            className="h-8 w-8 object-contain"
                        />
                        <span className="text-xl font-bold">SyncCraft</span>
                    </Link>

                    {/* Desktop Nav */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="flex gap-8">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink
                                        href={item.Location}
                                        className={`${navLinkClass} group inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground`}
                                        onClick={() => {
                                            document.getElementById(item.Location)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile Trigger */}
                    <div className="flex items-center gap-4">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon" className="relative">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-80 p-0">
                                <div className="flex items-center justify-between p-6 border-b">
                                    <a href="#home" className="flex items-center gap-4">
                                        <div className="h-8 w-8 rounded-lg bg-primary" />
                                        <span className="text-xl font-bold">SyncCraft</span>
                                    </a>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Close</span>
                                    </Button>
                                </div>

                                <nav className="flex flex-col space-y-2 p-6">
                                    {navigationItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            to={item.Location}
                                            className={`${navLinkClass} py-2`}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavbarComponents;
