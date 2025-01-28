"use client"

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "John Smith",
        role: "CEO Tech Corp",
        text: "Their development team delivered beyond our expectations. The solution scaled perfectly with our growth."
    },
    {
        name: "Maria García",
        role: "CTO HealthStart",
        text: "Outstanding UX design that significantly improved our user retention rates."
    },
    {
        name: "David Miller",
        role: "Product Lead EduSoft",
        text: "Reliable partners who understood our complex requirements from day one."
    }
];

export default function TestimonialsSection() {
    const [testimonialRef, testimonialApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    
    return (
        <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Testimonios</h2>

                <div
                    className="relative overflow-hidden"
                    ref={testimonialRef}
                    onMouseEnter={() => testimonialApi?.plugins()?.autoplay?.stop()}
                    onMouseLeave={() => {
                        if (Array.isArray(testimonialApi?.plugins()?.autoplay)) {
                            testimonialApi?.plugins()?.autoplay?.play()
                        }
                    }}
                >
                    <div className="embla__container flex gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className="embla__slide flex-[0_0_300px] md:flex-[0_0_400px]">
                                <Card className="h-full dark:bg-gray-700 dark:border-gray-600 shadow-lg dark:shadow-gray-700/50">
                                    <CardContent className="p-8">
                                        <Quote className="h-8 w-8 text-gray-400 dark:text-gray-300 mb-4" />
                                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{testimonial.text}</p>
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-blue-600 rounded-full" />
                                            <div>
                                                <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                                                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}