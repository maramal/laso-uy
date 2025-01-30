import { Metadata } from "next";

// Metadatos para SEO (Next.js App Router)
export const metadata: Metadata = {
    title: "Nosotros | LATE",
    description:
        "Conoce a nuestro equipo de jóvenes uruguayos apasionados por la tecnología y únete a nosotros para impulsar la innovación.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <section className="relative flex h-[50vh] items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 text-white">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        Sobre Nosotros
                    </h1>
                    <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
                        Unidos por la pasión y la innovación tecnológica
                    </p>
                </div>
            </section>

            {/* Contenido principal */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    {/* Sección: Quiénes somos */}
                    <div className="mb-12 space-y-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                            ¿Quiénes somos?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mx-auto max-w-3xl">
                            Somos un equipo formado por desarrolladores full stack, diseñadores
                            gráficos, community managers y especialistas en UX. Creemos firmemente 
                            en el poder de la colaboración y la diversidad para impulsar proyectos 
                            de alto impacto. Nos une la ilusión de llevar la tecnología a cada 
                            rincón y de transformar ideas en soluciones concretas.
                        </p>
                    </div>

                    {/* Sección: Filosofía / Valores */}
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4 rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                Nuestra Filosofía
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Colaboración, innovación y excelencia. Estos pilares nos guían en
                                cada proyecto que abordamos. Trabajamos codo a codo para ofrecer
                                resultados de calidad, manteniéndonos abiertos a las últimas
                                tendencias tecnológicas y al aprendizaje continuo.
                            </p>
                        </div>

                        <div className="space-y-4 rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                Nuestro Compromiso
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Apoyar a nuestros clientes y socios en cada etapa, escuchando
                                sus ideas y aportando soluciones que marquen la diferencia.
                                Valoramos la transparencia, la cercanía y el respeto mutuo
                                para construir relaciones duraderas.
                            </p>
                        </div>
                    </div>

                    {/* Sección: Únete al equipo */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                            ¡Unite a nuestro equipo!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                            Queremos crecer junto a personas que compartan nuestra pasión
                            por la tecnología y la innovación. Si eres desarrollador(a) full stack,
                            diseñador(a) gráfico, community manager, UX/UI designer u otro perfil
                            creativo, te queremos conocer.
                        </p>
                        <a
                            href="/contacto"
                            className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-3 text-white font-medium transition-colors"
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
