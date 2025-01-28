"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Languages, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image"

type NavigationLink = {
    name: string;
    href: string;
};

const NAV_LINKS: NavigationLink[] = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    // { name: "Portafolios", href: "/portafolios" },
    { name: "Contacto", href: "/contacto" },
];

export function NavigationBar() {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 sm:px-6">

                {/* Mobile menu */}
                <div className="md:hidden">
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        {/* Botón hamburguesa */}
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Alternar Menú</span>
                            </Button>
                        </SheetTrigger>

                        {/* Contenido que se muestra al abrir el menú */}
                        <SheetContent side="left" className="p-4">
                            <SheetHeader>
                                <SheetTitle>Menú</SheetTitle>
                            </SheetHeader>

                            <ul className="mt-4 space-y-2">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)} // opcional: cerrar al hacer clic
                                            className="block rounded px-2 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Cambiar tema opcionalmente en el menú móvil */}
                            <div className="mt-6">
                                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Alternar Modo</span>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Branding */}
                <Link
                    href="/"
                    className="ml-2 text-lg font-semibold tracking-tight hover:text-primary md:ml-2"
                >
                    <Image src="/laso-icon.svg" alt="Logo de LASO" width={80} height={50} />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden flex-1 justify-center md:flex">
                    <ul className="flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group relative pb-2 text-sm font-medium transition-colors hover:text-primary"
                                >
                                    {link.name}
                                    <span className="absolute top-full left-1/2 mt-0.5 h-1 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Theme controls */}
                <div className="ml-auto hidden items-center gap-2 md:flex">
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Alternar Modo</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
