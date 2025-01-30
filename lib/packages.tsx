import { Star } from "lucide-react"

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
    // Podrías añadir más paquetes aquí
  ]
  