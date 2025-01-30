import { Settings, Users, Code, Paintbrush, Database } from "lucide-react";

export type Service = {
  icon: React.ReactElement;
  title: string;
  description: string;         // Texto simple para usuarios no técnicos
  image: string;
  shortBody: React.ReactNode;  // Contenido breve en la página
  technicalDetail: React.ReactNode; // Detalles técnicos que se mostrarán en un modal
};

export const SERVICES: Service[] = [
  // 1) Desarrollo a Medida
  {
    icon: <Settings className="h-12 w-12 text-blue-600" />,
    title: "Desarrollo a Medida",
    description: "Creamos soluciones digitales personalizadas para tu negocio.",
    image: "/web_dev.jpg",
    shortBody: (
      <div>
        <p>
          Creamos aplicaciones y sistemas ajustados exactamente a lo que tu
          organización necesita, sin complejidades innecesarias.
        </p>
        <p className="mt-4">
          Nuestra meta es optimizar procesos y ofrecer resultados que
          verdaderamente impulsen tu crecimiento.
        </p>
      </div>
    ),
    technicalDetail: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Detalles Técnicos</h3>
        <p className="mb-6">
          Para los proyectos a medida, analizamos en profundidad los
          requerimientos, proponemos arquitecturas escalables y trabajamos con
          metodologías ágiles para asegurar calidad y rapidez.
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li>Análisis y documentación de requerimientos</li>
          <li>Diseño de arquitectura modular y escalable</li>
          <li>Desarrollo con control de versiones y CI/CD</li>
          <li>Integración continua con sistemas existentes</li>
          <li>Mantenimiento evolutivo y soporte post-lanzamiento</li>
        </ul>
      </div>
    ),
  },

  // 2) Aumento de Equipo (se mantiene igual)
  {
    icon: <Users className="h-12 w-12 text-green-600" />,
    title: "Aumento de Equipo",
    description: "Especialistas listos para fortalecer tus proyectos de inmediato.",
    image: "/augmentation.webp",
    shortBody: (
      <div>
        <p>
          Integra profesionales especializados a tu equipo para acelerar
          entregas, mejorar calidad y optimizar resultados.
        </p>
        <p className="mt-4">
          Disponemos de diferentes modalidades para cubrir tus necesidades.
        </p>
      </div>
    ),
    technicalDetail: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Refuerzo Tecnológico</h3>
        <p className="mb-6">
          Nuestros especialistas cubren perfiles de desarrollo full stack,
          diseño UX/UI, DevOps, entre otros.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Perfiles Disponibles</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Desarrolladores Full Stack
              </li>
              <li className="flex items-center gap-2">
                <Paintbrush className="h-5 w-5" />
                Diseñadores UX/UI
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Especialistas en DevOps
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Modelos de Contratación</h4>
            <ul className="space-y-3">
              <li>• Tiempo completo/parcial</li>
              <li>• Proyectos específicos</li>
              <li>• Soporte continuo</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // 3) Desarrollo de Apps (antes "Aplicaciones Web y Móviles")
  {
    icon: <Code className="h-12 w-12 text-purple-600" />,
    title: "Desarrollo de Apps",
    description: "Creamos aplicaciones web y móviles pensadas para tu audiencia.",
    image: "/phone_dev.jpg",
    shortBody: (
      <div>
        <p>
          Tu empresa puede estar presente en todas las plataformas,
          ofreciéndoles a tus usuarios la mejor experiencia, ya sea en su
          navegador o en su teléfono.
        </p>
        <p className="mt-4">
          Nos enfocamos en la usabilidad y el rendimiento para llegar con éxito
          a tu público.
        </p>
      </div>
    ),
    technicalDetail: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Desarrollo Multiplataforma</h3>
        <p className="mb-6">
          Ofrecemos aplicaciones nativas y cross-platform, con enfoque en Android
          y iOS. Utilizamos frameworks modernos (como React Native) y también
          tecnologías nativas si el proyecto lo requiere.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Web Apps</h4>
            <ul className="space-y-2">
              <li>• Single Page Applications</li>
              <li>• Plataformas empresariales</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Mobile Apps</h4>
            <ul className="space-y-2">
              <li>• Desarrollo nativo (Android / iOS)</li>
              <li>• Soluciones cross-platform (React Native)</li>
              <li>• Integración con hardware móvil</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // 4) Posicionamiento en Buscadores (antes "Mejora de SEO")
  {
    icon: <Paintbrush className="h-12 w-12 text-orange-600" />,
    title: "Posicionamiento en Buscadores",
    description: "Haz que tu negocio aparezca en los primeros resultados de búsqueda.",
    image: "/seo.jpg",
    shortBody: (
      <div>
        <p>
          Aumentamos la visibilidad de tu marca en los buscadores de manera
          orgánica, mejorando tu tráfico y potenciales clientes.
        </p>
        <p className="mt-4">
          Mediante estrategias de contenido y optimizaciones constantes,
          llevamos tu sitio a los primeros lugares.
        </p>
      </div>
    ),
    technicalDetail: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Optimización para Buscadores</h3>
        <p className="mb-6">
          Aplicamos SEO técnico y de contenido para mejorar la relevancia y
          autoridad de tu sitio web:
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">SEO Técnico</h4>
            <ul className="space-y-2">
              <li>• Auditoría de performance</li>
              <li>• Optimización de Core Web Vitals</li>
              <li>• Mejora de arquitectura de sitio</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">SEO de Contenido</h4>
            <ul className="space-y-2">
              <li>• Investigación de keywords</li>
              <li>• Optimización de metadatos</li>
              <li>• Estrategias de contenido</li>
            </ul>
          </div>
        </div>
        <p className="mb-6">
          Analizamos métricas, generamos reportes y mejoramos continuamente para
          alcanzar resultados sostenibles.
        </p>
      </div>
    ),
  },

  // 5) Manejo de Redes Sociales (nuevo servicio)
  {
    icon: <Users className="h-12 w-12 text-pink-600" />,
    title: "Manejo de Redes Sociales",
    description: "Gestión profesional de tus perfiles para aumentar tu alcance.",
    image: "/social_media.webp", // Asegúrate de colocar esta imagen en 'public' o cambiar la ruta
    shortBody: (
      <div>
        <p>
          Diseñamos y ejecutamos estrategias efectivas en redes sociales para
          conectar con tu audiencia y fortalecer tu marca.
        </p>
        <p className="mt-4">
          Desde la creación de contenido hasta la interacción con seguidores,
          nos ocupamos de todo.
        </p>
      </div>
    ),
    technicalDetail: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Gestión de Social Media</h3>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li>Planificación de contenido y calendario editorial</li>
          <li>Gestión de perfiles en Facebook, Instagram, LinkedIn, etc.</li>
          <li>Informe de métricas y optimizaciones periódicas</li>
          <li>Campañas publicitarias segmentadas</li>
        </ul>
        <p>
          Garantizamos la identidad coherente de tu marca en cada canal y una
          comunicación alineada con tus objetivos de negocio.
        </p>
      </div>
    ),
  },
];
