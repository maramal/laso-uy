"use client"

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"

const PORTFOLIO_ITEMS = [
    { name: "E-commerce Platform", image: "/portfolio/ecommerce.jpg" },
    { name: "Healthcare System", image: "/portfolio/healthcare.jpg" },
    { name: "Education Portal", image: "/portfolio/education.jpg" },
    { name: "Fintech Solution", image: "/portfolio/fintech.jpg" }
];

export default function PortfolioSection() {
    const [portfolioRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })]);

    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900" id="portfolio">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Nuestro trabajo</h2>

                <div className="relative overflow-hidden" ref={portfolioRef}>
                    <div className="embla__container flex gap-8">
                        {PORTFOLIO_ITEMS.map((item, index) => (
                            <div key={index} className="embla__slide flex-[0_0_300px] md:flex-[0_0_400px]">
                                <div className="relative aspect-video group overflow-hidden rounded-lg shadow-lg dark:shadow-gray-700/50">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}