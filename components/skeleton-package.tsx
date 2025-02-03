"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonPackage() {
    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Título */}
                <Skeleton className="h-8 w-48 mx-auto mb-6" />
                {/* Subtítulo */}
                <Skeleton className="h-4 w-64 mx-auto mb-10" />

                {/* Contenedor de tarjetas */}
                <div className="flex flex-wrap justify-center items-start gap-8">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="w-full max-w-xs">
                            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                                {/* Ícono */}
                                <Skeleton className="h-12 w-12 rounded-full mb-4 animate-pulse" />
                                {/* Título */}
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                {/* Descripción */}
                                <Skeleton className="h-4 w-5/6 mb-4" />
                                <Skeleton className="h-4 w-2/3 mb-4" />
                                {/* Botón */}
                                <Skeleton className="h-10 w-32 mt-4 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón final */}
                <div className="text-center mt-12">
                    <Skeleton className="h-12 w-48 mx-auto rounded-md" />
                </div>
            </div>
        </section>
    )
}