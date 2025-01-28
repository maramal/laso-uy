"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { useMemo } from "react";

export default function Footer() {
    // Obtenemos el año actual:
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
            {/* Sección principal del Footer */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Grid responsivo: 1 columna en móviles, 3 en pantallas md o superiores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna 1: Nombre de la empresa */}
                    <div>
                        <Image
                            src="/laso-icon.svg"
                            alt="Logo de LASO en Footer"
                            width={150}
                            height={120}
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Laboratorio de Software
                        </p>
                    </div>

                    {/* Columna 2: Enlaces de navegación */}
                    <div>
                        <h2 className="text-xl font-bold mb-2">Mapa de sitio</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/servicios"
                                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/nosotros"
                                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Información de contacto */}
                    <div>
                        <h2 className="text-xl font-bold mb-2">Contáctanos</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <Image
                                    src="/WhatsApp_icon.png"
                                    alt="WhatsApp Icon"
                                    width={20}
                                    height={20}
                                />
                                <Link
                                    href="https://wa.me/+59899344948"
                                    target="_blank"
                                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    +598 99 344 948
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="text-blue-600 dark:text-blue-400" />
                                <Link
                                    href="mailto:info@laso.uy"
                                    target="_blank"
                                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    info@laso.uy
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin className="text-blue-600 dark:text-blue-400" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    Martín García 1602 Apto. 474
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Subfooter */}
            <div className="bg-gray-200 dark:bg-gray-800 py-2 text-center text-sm text-gray-600 dark:text-gray-400">
                &copy; {currentYear} LASO
            </div>
        </footer>
    );
}
