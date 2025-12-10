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