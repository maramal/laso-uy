"use client";

import { useState, useRef, useEffect } from "react";
import { SERVICES } from "@/lib/services";
import Image from "next/image";

// Modal basado en <dialog> con showModal() y cierre al hacer clic afuera
function Modal({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!dialogRef.current) return;

        if (isOpen && !dialogRef.current.open) {
            dialogRef.current.showModal();
        } else if (!isOpen && dialogRef.current.open) {
            dialogRef.current.close();
        }
    }, [isOpen]);

    // Si se cierra el diálogo manualmente o con un clic fuera, notificamos al padre
    const handleClose = () => {
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        // Si el usuario hace clic exactamente sobre el <dialog> (fondo), cerramos
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            // Al cerrarse nativamente (esc o .close()), notificamos al padre
            onClose={handleClose}
            // Detectamos clic en el fondo (backdrop)
            onClick={handleBackdropClick}
            className="backdrop:bg-black/50 p-0 rounded-md max-w-2xl w-full"
        >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-md relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                    Cerrar
                </button>
                {children}
            </div>
        </dialog>
    );
}

export default function ServicesPage() {
    const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(
        null
    );

    return (
        <>
            {/* Etiqueta <title> para SEO en client side (opcional) */}
            <title>Servicios | LATE</title>

            <div className="min-h-screen w-full dark:bg-gray-900">
                {/* Hero Section */}
                <section className="relative h-80 w-full bg-gray-800">
                    <div className="container flex h-full items-center justify-center text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold text-white sm:text-5xl">
                                Nuestros Servicios
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Soluciones tecnológicas personalizadas para potenciar tu negocio
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services List */}
                <section className="py-20 px-4">
                    <div className="container max-w-7xl mx-auto space-y-20">
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                {/* Imagen con animación de zoom */}
                                <div
                                    className={`relative h-80 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 group ${index % 2 === 0 ? "md:order-last" : ""
                                        }`}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        quality={100}
                                        priority
                                    />
                                </div>

                                {/* Contenido */}
                                <div className="space-y-6">
                                    <div className="text-blue-600 dark:text-blue-400">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold dark:text-white">
                                        {service.title}
                                    </h2>
                                    {/* Descripción simplificada */}
                                    <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                                        {service.shortBody}
                                    </div>

                                    {/* Botón "Más información" */}
                                    <button
                                        onClick={() => setActiveServiceIndex(index)}
                                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                    >
                                        Más información
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="container max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                            Nuestra Metodología
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                                    Diseño Centrado
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Prototipado interactivo para validar conceptos antes del
                                    desarrollo
                                </p>
                            </div>

                            <div className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                                    Desarrollo Ágil
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Iteraciones semanales con entregables funcionales
                                </p>
                            </div>

                            <div className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                                    Optimización Continua
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Monitoreo y mejoras post-implementación
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal para detalles técnicos */}
                <Modal
                    isOpen={activeServiceIndex !== null}
                    onClose={() => setActiveServiceIndex(null)}
                >
                    {activeServiceIndex !== null &&
                        SERVICES[activeServiceIndex].technicalDetail}
                </Modal>
            </div>
        </>
    );
}
