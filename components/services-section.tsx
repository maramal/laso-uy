"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SERVICES } from '@/lib/services';

export default function ServicesSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scrollNext = useCallback((api: any) => api?.scrollNext(), []);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scrollPrev = useCallback((api: any) => api?.scrollPrev(), []);

    if (!isMounted) return null

    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" id="services">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Nuestros servicios</h2>

                <div className="relative overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex gap-8">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="embla__slide flex-[0_0_300px] md:flex-[0_0_400px]">
                                <Card className="h-full transition-transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700 shadow-lg dark:shadow-gray-700/50">
                                    <CardContent className="p-8">
                                        {/* Aquí se centran los íconos */}
                                        <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400 animate-pulse">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 dark:text-white text-center">{service.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="dark:text-white dark:hover:bg-gray-700"
                            onClick={() => scrollPrev(emblaApi)}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="dark:text-white dark:hover:bg-gray-700"
                            onClick={() => scrollNext(emblaApi)}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
