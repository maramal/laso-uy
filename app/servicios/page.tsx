import { SERVICES } from '@/lib/services';
import Image from 'next/image';

export const metadata = {
    title: 'Servicios | LASO',
    description: 'Descubre nuestros servicios'
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen w-full dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative h-80 w-full bg-gray-800">
                <div className="container flex h-full items-center justify-center text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl">Nuestros Servicios</h1>
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
                            <div className={`relative h-80 rounded-xl overflow-hidden ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div className="text-blue-600 dark:text-blue-400">
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl font-bold dark:text-white">
                                    {service.title}
                                </h2>
                                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                                    {service.body}
                                </div>
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
                            <h3 className="text-xl font-semibold mb-4 dark:text-white">Diseño Centrado</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Prototipado interactivo para validar conceptos antes del desarrollo
                            </p>
                        </div>

                        <div className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 dark:text-white">Desarrollo Ágil</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Iteraciones semanales con entregables funcionales
                            </p>
                        </div>

                        <div className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 dark:text-white">Optimización Continua</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Monitoreo y mejoras post-implementación
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}