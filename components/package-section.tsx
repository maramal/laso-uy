"use client";

import Link from "next/link";
import { PACKAGES } from "@/lib/packages";

/** 
 * Tipo de paquete (ajusta según tu definición en lib/packages.tsx).
 * Aquí asumimos que cada paquete tiene:
 *  - icon:   ReactNode
 *  - title:  string
 *  - description: string
 *  - refQuery: string
 */
interface PackageProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    refQuery: string;
}

function PackageCard({ icon, title, description, refQuery }: PackageProps) {
    return (
        <div className="flex flex-col items-center p-6 w-full max-w-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            {/* Ícono con animación */}
            <div className="mb-4 text-4xl animate-pulse">
                {typeof icon === "string" ? icon : icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {description}
            </p>

            <Link
                href={`/contacto?ref=${refQuery}`}
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
                Más información
            </Link>
        </div>
    );
}

export function PackageSection() {
    return (
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div className="container max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
                    Paquetes Destacados
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-10">
                    Conoce nuestros planes ideales para impulsar tu negocio en línea.
                </p>

                {/* Contenedor flex para centrar tarjetas */}
                <div className="flex flex-wrap justify-center items-start gap-8">
                    {PACKAGES.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            icon={pkg.icon}
                            title={pkg.title}
                            description={pkg.description}
                            refQuery={pkg.refQuery}
                        />
                    ))}
                </div>

                {/* Botón "Ver todos los paquetes" */}
                <div className="text-center mt-12">
                    <Link
                        href="/paquetes"
                        className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        Ver todos los paquetes
                    </Link>
                </div>
            </div>
        </section>
    );
}
