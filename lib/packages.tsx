import { Code, Star } from "lucide-react"

export interface Package {
    icon: React.ReactNode
    title: string
    description: string
    refQuery: string
    ctaText?: string
  }
  
  // Podrías añadir más campos (ej. highlightColor) si deseas personalizar cada tarjeta
  export const PACKAGES: Package[] = [
    {
      icon: <Star />,
      title: "LATE Completo",
      description:
        "La solución perfecta: incluye administración de redes sociales y una página web básica para tu negocio. Ideal para quienes buscan una presencia sólida en línea.",
      refQuery: "late-completo",
      ctaText: "Solicitar más información"
    },
    {
      icon: <Code />,
      title: "Sitio Web Básico",
      description: "Ideal para crear tu presencia en internet en tiempo y costo record. Incluye un sitio web estático con cuatro secciones (Inicio, Nosotros, Servicios, Contacto).",
      refQuery: 'web-basico',
      ctaText: "Solicitar más información"
    }
  ]
  