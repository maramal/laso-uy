"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Typewriter from "typewriter-effect"

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full">
            {/* Contenedor del video de fondo */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/hero-bg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                />
                {/* Capa superpuesta semitransparente (oscurece el video) */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenido principal (texto y botón) */}
            <div className="relative z-10 flex h-full items-center justify-center text-center">
                <div className="max-w-4xl px-4">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        <Typewriter
                            onInit={(typewriter) =>
                                typewriter.typeString('Transformando Ideas en Realidad Digital').start()}
                        />
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 md:text-xl">
                        Soluciones integrales desarrolladas a medida acorde a tus necesidades de negocio
                    </p>
                    <Button className="mt-8 h-12 px-8 text-lg">
                        <Link href="/servicios">Comenzar ahora</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
