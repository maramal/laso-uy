import { Settings, Users, Code, Paintbrush, Database, Cloud } from "lucide-react";
import Image from "next/image"

export type Service = {
  icon: React.ReactElement;
  title: string;
  description: string;
  body: React.ReactElement;
  image: string
};

export const SERVICES: Service[] = [
  {
    icon: <Settings className="h-12 w-12 text-blue-600" />,
    title: "Desarrollo a Medida",
    description: "Desarrollos a medidas para tus necesidades de negocio con tecnología de punta",
    image: '/web_dev.jpg',
    body: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Soluciones Personalizadas</h3>
        <p className="mb-6">
          Creamos aplicaciones empresariales totalmente adaptadas a sus procesos
          y necesidades específicas. Nuestro enfoque incluye:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li>Análisis detallado de requerimientos</li>
          <li>Diseño de arquitectura escalable</li>
          <li>Desarrollo con metodologías ágiles</li>
          <li>Implementación y capacitación técnica</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Tecnologías Principales</h4>
            <ul className="space-y-2">
              <li>• Node.js / Python / WordPress</li>
              <li>• React / Angular / Vue</li>
              <li>• PostgreSQL / MongoDB</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Beneficios Clave</h4>
            <ul className="space-y-2">
              <li>• Integración con sistemas existentes</li>
              <li>• Escalabilidad garantizada</li>
              <li>• Mantenimiento incluido</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Users className="h-12 w-12 text-green-600" />,
    title: "Aumento de Equipo",
    description: "Incrementá la productividad de tus proyectos con nuestros desarrolladores",
    image: '/augmentation.webp',
    body: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Refuerzo Tecnológico</h3>
        <p className="mb-6">
          Integra profesionales especializados a tu equipo existente:
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
    )
  },
  {
    icon: <Code className="h-12 w-12 text-purple-600" />,
    title: "Aplicaciones Web y Móviles",
    description: "Aplicaciones responsivas de alto rendimiento para todas las plataformas",
    image: '/phone_dev.jpg',
    body: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Desarrollo Multiplataforma</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Web Apps</h4>
            <ul className="space-y-2">
              <li>• Aplicaciones móviles</li>
              <li>• Single Page Applications</li>
              <li>• Plataformas empresariales</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Mobile Apps</h4>
            <ul className="space-y-2">
              <li>• Desarrollo nativo (iOS/Android)</li>
              <li>• Soluciones cross-platform</li>
              <li>• Integración con hardware móvil</li>
            </ul>
          </div>
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mt-4">
          <h4 className="font-semibold mb-3">Tecnologías Destacadas</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-white dark:bg-gray-700 rounded">
              <span className="font-mono">Next JS</span>
            </div>
            <div className="p-3 bg-white dark:bg-gray-700 rounded">
              <span className="font-mono">React Native</span>
            </div>
            <div className="p-3 bg-white dark:bg-gray-700 rounded">
              <span className="font-mono">Node</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Paintbrush className="h-12 w-12 text-orange-600" />,
    title: "Mejora de SEO",
    description: "Hacé que tu negocio figure entre los primeros en los buscadores",
    image: '/seo.jpg',
    body: (
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">Optimización para Buscadores</h3>
        <p className="mb-6">
          Mejoramos tu visibilidad orgánica en motores de búsqueda mediante:
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
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mt-4">
          <h4 className="font-semibold mb-3">Resultados Esperados</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white dark:bg-gray-700 rounded">
              <div className="text-xl font-bold">+50%</div>
              <div className="text-sm">Tráfico orgánico</div>
            </div>
            <div className="p-3 bg-white dark:bg-gray-700 rounded">
              <div className="text-xl font-bold">90+</div>
              <div className="text-sm">Puntuación SEO</div>
            </div>
            <div className="p-3 bg-white dark:bg-gray-700 rounded">
              <div className="text-xl font-bold">Top 3</div>
              <div className="text-sm">Posicionamiento</div>
            </div>
            <div className="p-3 bg-white dark:bg-gray-700 rounded">
              <div className="text-xl font-bold">24/7</div>
              <div className="text-sm">Monitoreo</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];