'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Globe,
    Code2,
    Server,
    Wrench,
    LayoutDashboard,
    Shield,
    Zap,
    CheckCircle2,
    ArrowRight,
    Cpu,
} from 'lucide-react';
import { useNavigate } from 'react-router';

export default function servicePages() {
    const navigate = useNavigate();
    return (
        <>
            {/* ====================== HERO SECTION ====================== */}
            <section className="w-full py-20 md:py-28 lg:py-36 bg-linear-to-b from-background to-muted/30">
                <div className="Hero px-4 md:px-6">
                    <div className="absolute z-0 inset-0 overflow-hidden opacity-20">
                        <svg id="background-svg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#ffffff' width='2000' height='1500' /><defs><rect stroke='#ffffff' stroke-width='0.4' width='1' height='1' id='s' /><pattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><use fill='#fcfcfc' href='#s' y='2' /><use fill='#fcfcfc' href='#s' x='1' y='2' /><use fill='#fafafa' href='#s' x='2' y='2' /><use fill='#fafafa' href='#s' /><use fill='#f7f7f7' href='#s' x='2' /><use fill='#f7f7f7' href='#s' x='1' y='1' /></pattern><pattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f5f5f5'><use href='#s' /><use href='#s' y='5' /><use href='#s' x='1' y='10' /><use href='#s' x='2' y='1' /><use href='#s' x='2' y='4' /><use href='#s' x='3' y='8' /><use href='#s' x='4' y='3' /><use href='#s' x='4' y='7' /><use href='#s' x='5' y='2' /><use href='#s' x='5' y='6' /><use href='#s' x='6' y='9' /></g></pattern><pattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f5f5f5'><use href='#s' y='5' /><use href='#s' y='8' /><use href='#s' x='1' y='1' /><use href='#s' x='1' y='9' /><use href='#s' x='1' y='12' /><use href='#s' x='2' /><use href='#s' x='2' y='4' /><use href='#s' x='3' y='2' /><use href='#s' x='3' y='6' /><use href='#s' x='3' y='11' /><use href='#s' x='4' y='3' /><use href='#s' x='4' y='7' /><use href='#s' x='4' y='10' /></g></pattern><pattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f2f2f2'><use href='#s' y='11' /><use href='#s' x='2' y='9' /><use href='#s' x='5' y='12' /><use href='#s' x='9' y='4' /><use href='#s' x='12' y='1' /><use href='#s' x='16' y='6' /></g></pattern><pattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#ffffff'><use href='#s' y='9' /><use href='#s' x='16' y='5' /><use href='#s' x='14' y='2' /><use href='#s' x='11' y='11' /><use href='#s' x='6' y='14' /></g><g fill='#efefef'><use href='#s' x='3' y='13' /><use href='#s' x='9' y='7' /><use href='#s' x='13' y='10' /><use href='#s' x='15' y='4' /><use href='#s' x='18' y='1' /></g></pattern><pattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='2' y='5' /><use href='#s' x='16' y='38' /><use href='#s' x='46' y='42' /><use href='#s' x='29' y='20' /></g></pattern><pattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='33' y='13' /><use href='#s' x='27' y='54' /><use href='#s' x='55' y='55' /></g></pattern><pattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='11' y='8' /><use href='#s' x='51' y='13' /><use href='#s' x='17' y='73' /><use href='#s' x='99' y='57' /></g></pattern></defs><rect fill='url(#a)' width='100%' height='100%' /><rect fill='url(#b)' width='100%' height='100%' /><rect fill='url(#h)' width='100%' height='100%' /><rect fill='url(#c)' width='100%' height='100%' /><rect fill='url(#d)' width='100%' height='100%' /><rect fill='url(#e)' width='100%' height='100%' /><rect fill='url(#f)' width='100%' height='100%' /><rect fill='url(#g)' width='100%' height='100%' /></svg>
                    </div>
                    <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
                        <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
                            Our Services
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
                            End-to-End Digital & Physical Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            From pixel-perfect web applications to precision CNC machining — we deliver complete solutions with hosting, support, and technical expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* ====================== SERVICES GRID ====================== */}
            <section className="w-full py-16 md:py-24 lg:py-32">
                <div className=" px-4 md:px-6">
                    <div className="grid gap-8 md:gap-12 lg:grid-cols-3">

                        {/* SERVICE 1: Websites & WebApps */}
                        <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="space-y-4 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                        <Globe className="h-7 w-7 text-primary" />
                                    </div>
                                    <Badge variant="outline" className="text-xs font-medium">
                                        Full-Stack
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">
                                    Websites & Web Applications
                                </CardTitle>
                                <CardDescription className="text-base">
                                    Custom-built, responsive digital experiences with managed hosting and ongoing support.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Modern React/Next.js frontends</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Secure Node.js/Express or Python backends</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Cloud hosting (Vercel, AWS, DigitalOcean)</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">SSL, CDN, monitoring & updates</p>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
                                        <span className="text-sm font-medium">Multiple products?</span>
                                    </div>
                                    <Badge variant="secondary" className="text-xs">
                                        Aggregated Dashboard Included
                                    </Badge>
                                </div>

                                <Button className="w-full group-hover:bg-primary/90 transition-colors" size="lg" onClick={() => {navigate("/#Contact")}}>
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* SERVICE 2: Technical Consulting */}
                        <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="space-y-4 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                        <Wrench className="h-7 w-7 text-primary" />
                                    </div>
                                    <Badge variant="outline" className="text-xs font-medium">
                                        Expert Guidance
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">
                                    Technical Consulting
                                </CardTitle>
                                <CardDescription className="text-base">
                                    Strategic advice, architecture reviews, and hands-on development support.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">System architecture & scalability</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Code audits & performance optimization</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Tech stack selection & migration</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Team training & process improvement</p>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex items-center gap-3 text-sm">
                                    <Shield className="h-5 w-5 text-primary" />
                                    <span className="font-medium">Retainer or project-based</span>
                                </div>

                                <Button className="w-full group-hover:bg-primary/90 transition-colors" size="lg" onClick={() => {navigate("/#Contact")}}>
                                    Book a Consultation
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* SERVICE 3: CNC Machining */}
                        <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="space-y-4 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                        <Cpu className="h-7 w-7 text-primary" />
                                    </div>
                                    <Badge variant="outline" className="text-xs font-medium">
                                        Precision Manufacturing
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">
                                    CNC Machining Services
                                </CardTitle>
                                <CardDescription className="text-base">
                                    High-precision parts from aluminum, steel, plastics, and composites.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">3-axis CNC milling up to 500x400x200mm</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Prototypes & small-batch production</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">CAD design review & optimization</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground/80">Quality inspection & material certs</p>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-2 text-sm">
                                    <p className="font-medium flex items-center gap-2">
                                        <Zap className="h-4 w-4 text-primary" />
                                        Pricing per job — quote in 24h
                                    </p>
                                    <p className="text-muted-foreground">Material + setup + runtime</p>
                                </div>

                                <Button className="w-full group-hover:bg-primary/90 transition-colors" size="lg" onClick={() => {navigate("/#Contact")}}>
                                    Get a Quote
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* ====================== WHY CHOOSE US ====================== */}
            <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
                <div className="hero px-4 md:px-6">
                    <div className="flex gap-12 items-center justify-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                One Partner for Digital & Physical
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We bridge software and hardware — design your web platform and manufacture the custom enclosure in-house. No middlemen, faster iteration, better Integration.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="flex-grid">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Server className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="font-medium">Managed Hosting</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">99.9% uptime guaranteed</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Code2 className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="font-medium">Full Ownership</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">Source code & IP belong to you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}