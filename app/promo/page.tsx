import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: 'Promo Inauguración | LASO',
    description: 'Promoción de Inauguración'
}

export default function PromotionsPage() {
    const promoInfo = {
        title: "¡Promo Inauguración!",
        monthlyPrice: "$2500 (pesos uruguayos) mensuales",
        bulletPoints: [
            "Dominio y Hosting incluidos",
            "Diseño básico ajustable (sin costo de diseño)",
            "Puntuación alta en SEO (no avanzado)",
            "4 secciones: Inicio, Nosotros, Servicios y Contacto",
            "Formulario de contacto que envía a tu correo",
            "Selección de 2 colores principales",
            "Selección de 2 tipografías gratuitas",
        ],
        disclaimer: [
            "No incluye tienda online (comercio electrónico).",
            "No incluye integraciones de pago avanzadas.",
            "No incluye funcionalidades adicionales fuera de las 4 secciones.",
            "No incluye diseño de logotipo/branding (se usa el que tengas).",
            "Cualquier desarrollo extra se cotiza aparte.",
        ],
    }

    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <section className="relative w-full py-16 bg-gradient-to-r from-pink-500 to-orange-400 dark:from-pink-600 dark:to-orange-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">{promoInfo.title}</h1>
                    <p className="text-xl font-semibold mb-6">
                        Página web básica por <span className="underline">{promoInfo.monthlyPrice}</span>
                    </p>
                    <p className="mx-auto max-w-2xl">
                        ¡Ideal para emprendedores y pequeñas empresas que necesiten presencia online!
                        Diseño sencillo, hosting y dominio incluidos, y además un SEO básico
                        con puntuación alta para que puedas arrancar con buen posicionamiento.
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12">
                <div className="bg-gradient-to-br from-indigo-200 to-violet-300 dark:from-indigo-700 dark:to-violet-600 rounded-lg p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">¿Qué incluye esta promoción?</h2>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        {promoInfo.bulletPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-bold mb-2">¿Qué no incluye?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {promoInfo.disclaimer.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8">
                    <p className="mb-4">
                        Si necesitas algo más complejo, como e-commerce, integraciones de pago, o
                        funciones adicionales, podemos cotizarlo por separado. El objetivo de
                        esta promoción es ofrecerte una web básica (4 secciones) que sirva
                        como base para tu presencia online y, al mismo tiempo, ahorrarte
                        la inversión en diseño o desarrollo inicial.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href="/contacto?ref=promo">¡Contratar ahora!</Link>
                    </Button>
                </div>
            </main>
        </div>
    )
}
