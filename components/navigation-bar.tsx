"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";

type NavigationLink = {
    name: string;
    href: string;
};

const NAV_LINKS: NavigationLink[] = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Paquetes", href: "/paquetes" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" }
];

export function NavigationBar() {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (!mounted) return;
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
                {/* Botón hamburguesa */}
                <div className="md:hidden">
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost" 
                                size="icon"
                                aria-label="Alternar menú"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Alternar Menú</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-4">
                            <SheetHeader>
                                <SheetTitle>Menú</SheetTitle>
                            </SheetHeader>

                            <ul className="mt-4 space-y-2">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block rounded px-2 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Botón tema móvil - Render condicional completo */}
                            {mounted && (
                                <div className="mt-6">
                                    <Button
                                        variant="ghost" 
                                        onClick={toggleTheme} 
                                        className="w-full"
                                        aria-label="Alternar modo"
                                    >
                                        {theme === "dark" ? (
                                            <>
                                                <Sun className="h-5 w-5 mr-2" />
                                                Modo claro
                                            </>
                                        ) : (
                                            <>
                                                <Moon className="h-5 w-5 mr-2" />
                                                Modo oscuro
                                            </>
                                        )}
                                    </Button>
                                </div>
                            )}
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <Link
                    href="/"
                    className="ml-2 text-lg font-semibold tracking-tight hover:text-primary md:ml-2"
                >
                    <Image src="/late-icon.svg" alt="Logo de LATE" width={80} height={50} />
                </Link>

                {/* Navegación Desktop */}
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

                {/* Botón tema Desktop - Render condicional completo */}
                {mounted && (
                    <div className="ml-auto hidden items-center gap-2 md:flex">
                        <Button 
                            variant="ghost" 
                            onClick={toggleTheme} 
                            className="flex items-center"
                            aria-label="Alternar modo"
                        >
                            {theme === "dark" ? (
                                <>
                                    <Sun className="h-5 w-5 mr-2" />
                                    Modo claro
                                </>
                            ) : (
                                <>
                                    <Moon className="h-5 w-5 mr-2" />
                                    Modo oscuro
                                </>
                            )}
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}