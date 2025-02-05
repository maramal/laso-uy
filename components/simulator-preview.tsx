import React from "react";
import Link from "next/link";

export default function SimulatorPreview() {
    return (
        <section
            aria-labelledby="simulator-heading"
            className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <div
                className="max-w-2xl w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
                <h2 id="simulator-heading" className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-4">
                    ¡Prueba Nuestro Simulador!
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
                    Descubre cómo podría verse tu sitio si lo creáramos para vos. Experimentá una previsualización interactiva y atractiva.
                </p>
                <div className="flex justify-center">
                    <Link 
                        href="https://simulador.late.uy"
                        aria-label="Ir al simulador para ver una previsualización interactiva"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-105"
                    >
                        Ir al Simulador
                    </Link>
                </div>
            </div>
        </section>
    );
};
