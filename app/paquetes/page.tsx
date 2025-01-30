"use client";

import Link from "next/link";
import { PACKAGES, Package } from "@/lib/packages";
import { Package as PackageIcon } from "lucide-react";

export default function PackagesPage() {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <section className="relative h-80 w-full bg-gray-800 flex items-center justify-center">
                <div className="text-center container px-4">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        Nuestros Paquetes
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Soluciones integrales para mejorar tu presencia digital
                    </p>
                </div>
            </section>

            {/* Lista de Paquetes */}
            <section className="py-16 px-4">
                <div className="container max-w-7xl mx-auto">
                    {/* Usamos flex, centramos items y permitimos wrapping */}
                    <div className="flex flex-wrap justify-center items-start gap-8">
                        {PACKAGES.map((pkg, index) => (
                            <PackageCard key={index} pkg={pkg} />
                        ))}

                        {/* Tarjeta estática para ver más servicios */}
                        <div className="flex flex-col items-center justify-center max-w-md w-full min-h-[360px] p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-center transition-transform hover:scale-105">
                            <PackageIcon className="h-12 w-12 text-gray-700 dark:text-gray-100 mb-4 animate-bounce" />
                            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                                Más opciones
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                ¿Buscas servicios adicionales o un plan más extenso? Te invitamos
                                a descubrir todas nuestras soluciones y elegir la más adecuada
                                para tu proyecto.
                            </p>
                            <Link
                                href="/servicios"
                                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                Ver más servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

/** Componente Tarjeta de Paquete */
function PackageCard({ pkg }: { pkg: Package }) {
    return (
        <div className="flex flex-col items-center justify-between max-w-md w-full min-h-[360px] p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-center transition-transform hover:scale-105">
            {/* Ícono */}
            <div className="mb-4 text-5xl animate-pulse">
                {typeof pkg.icon === "string" ? pkg.icon : pkg.icon}
            </div>

            {/* Contenido */}
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {pkg.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {pkg.description}
                </p>
            </div>

            {/* Botón de contacto */}
            <Link
                href={`/contacto?ref=${pkg.refQuery}`}
                className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
                Más información
            </Link>
        </div>
    );
}
