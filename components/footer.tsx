"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const siteMapLinks = [
    { name: "Servicios", href: "/servicios" },
    { name: "Paquetes", href: "/paquetes" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" }
];

export default function Footer() {
    // Solución 1: Usar useState en lugar de useMemo para evitar hidratación incorrecta
    const [currentYear, setCurrentYear] = useState("");

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString()); // Se ejecuta solo en el cliente
    }, []);

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Image
                            src="/late-icon.svg"
                            alt="Logo de LATE en Footer"
                            width={150}
                            height={120}
                            priority
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Laboratorio Tecnológico
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">Mapa de sitio</h2>
                        <ul className="space-y-2">
                            {siteMapLinks.map((siteMapLink, index) => (
                                <li key={index}>
                                    <Link href={siteMapLink.href} className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">
                                        {siteMapLink.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">Contáctanos</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <Image
                                    src="/WhatsApp_icon.png"
                                    alt="WhatsApp Icon"
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <a
                                    href="https://wa.me/+59892552793"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    +598 92 552 793
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="text-blue-600 dark:text-blue-400" />
                                <a
                                    href="mailto:info@late.uy"
                                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    info@late.uy
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin className="text-blue-600 dark:text-blue-400" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    Martín García 1602 Apto. 474, 11800 - Montevideo, Uruguay
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800 py-2 text-center text-sm text-gray-600 dark:text-gray-400">
                &copy; {currentYear} LATE
            </div>
        </footer>
    );
}
