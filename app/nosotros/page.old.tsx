import Image from "next/image";

export const metadata = {
    title: "Nosotros | LASO",
    description: "Descubre quienes trabajan en LASO."
};

export default function AboutUsPage() {
    return (
        <div className="min-h-screen w-full dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative h-80 w-full bg-gray-800 flex items-center justify-center">
                <div className="container text-center">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">Nosotros</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Conoce a las personas que dan vida a nuestra empresa
                    </p>
                </div>
            </section>

            {/* Contenido principal */}
            <section className="py-20 px-4">
                <div className="container max-w-7xl mx-auto space-y-20">
                    {/* Martin */}
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden group mx-auto">
                            <Image
                                src="/Martin_Fernandez.png"
                                alt="Fotografía de Martin Fernandez"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold dark:text-white">
                                Martín Fernández
                            </h2>
                            <p className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                                Martín es un desarrollador full-stack con amplia experiencia en
                                tecnologías web y pasión por la innovación. Aporta soluciones
                                creativas y eficientes para cada proyecto.
                            </p>
                            <p className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                                Su enfoque principal es la mejora continua, la escalabilidad y la
                                accesibilidad, asegurando que cada producto final cumpla con los
                                más altos estándares de calidad.
                            </p>
                        </div>
                    </div>

                    {/* Sabrina */}
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="space-y-6 order-last md:order-first">
                            <h2 className="text-3xl font-bold dark:text-white">
                                Sabrina Yanque
                            </h2>
                            <p className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                                Sabrina es Community Manager y diseñadora gráfica, con un enfoque
                                especial en la experiencia de usuario y la estética. Cada proyecto
                                es para ella una oportunidad de conectar con el público de manera
                                creativa y efectiva.
                            </p>
                            <p className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                                Su objetivo es ofrecer soluciones tecnológicas y visuales que no
                                solo destaquen, sino que también satisfagan las necesidades
                                reales de las personas.
                            </p>
                        </div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden group mx-auto">
                            <Image
                                src="/Sabrina_Yanque.png"
                                alt="Fotografía de Sabrina Yanque"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
