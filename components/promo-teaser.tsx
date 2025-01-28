"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PromoTeaser() {
    return (
        <section className="pb-10 w-full px-4">
            <div className="max-w-3xl mx-auto">
                <div
                    className="
            rounded-lg 
            shadow-lg 
            p-8 
            bg-gradient-to-r 
            from-indigo-500 
            via-purple-500 
            to-pink-500 
            dark:from-indigo-600 
            dark:via-purple-600 
            dark:to-pink-600 
            text-center 
            transform 
            transition-all 
            hover:scale-[1.02] 
            hover:shadow-2xl 
            space-y-4
          "
                >
                    <h2 className="text-4xl font-bold text-white">
                        Promo Inauguración
                    </h2>
                    <p className="text-white text-lg">
                        ¡Contrata tu página web básica con dominio, hosting, diseño
                        básico y SEO! Por solo <strong>$2500 mensuales</strong> para tu negocio.
                    </p>
                    <Link href="/promo">
                        <Button
                            className="
                                bg-gradient-to-r 
                                from-orange-500 
                                to-red-500 
                                text-white 
                                font-bold 
                                px-6 
                                py-3 
                                rounded-md 
                                transition-transform 
                                duration-300 
                                hover:-translate-y-1
                                mt-4
                            "
                        >
                            ¡Aprovecha ahora!
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
