import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'UPN | Asistente de Automatización.',
    date: 'Abr 2025 - Oct 2025',
    description: [
      'Automatización de procesos operativos utilizando Python, TypeScript y Power Automate, reduciendo tareas manuales repetitivas.',
      'Desarrollo de macros en Excel (VBA) para el análisis y consolidación de datos.',
      'Participación en propuestas de mejora de procesos mediante desarrollo web con Spring Boot (backend) y Angular (frontend).',
      'Análisis de KPIs y construcción de dashboards interactivos usando Power BI, Power Query, SharePoint y Microsoft Fabric.',
      'Apoyo en la recopilación, transformación y visualización de datos para áreas operativas y de gestión.',
      'Documentación básica de flujos automatizados y soluciones implementadas.',
    ],
    image: { url: '/work/upn-logo.jpeg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Dígito Perú | Analista Bi Jr.',
    date: 'Ene 2024 - Dic 2025',
    description: [
      'Recolección, limpieza y análisis de datos provenientes de distintas fuentes internas.',
      'Elaboración de reportes y dashboards interactivos utilizando Power BI y Excel.',
      'Apoyo en la automatización de reportes periódicos, reduciendo tiempos operativos.',
      'Análisis de indicadores clave (KPIs) para apoyar la toma de decisiones del negocio.',
      'Colaboración con áreas comerciales y operativas para entender requerimientos de información.',
      'Ejecución de consultas básicas en SQL para extracción y validación de datos.',
    ],
    image: { url: '/work/digito-logo.png', height: 34, width: 110, className: '' },
  },
  {
    title: 'PEQ Consultores | Desarrollador Backend Jr.',
    date: 'Aug 2022 - Aug 2023',
    description: [
      'Desarrollo y mantenimiento de servicios backend utilizando Java y Spring Boot.',
      'Implementación de APIs REST seguras y escalables siguiendo buenas prácticas de arquitectura.',
      'Integración de RabbitMQ para comunicación asíncrona entre microservicios.',
      'Contenerización de aplicaciones mediante Docker para entornos de desarrollo y pruebas.',
      'Escritura de consultas y manejo de persistencia con JPA / Hibernate y bases de datos relacionales.',
      'Apoyo en la detección y corrección de bugs en ambientes de desarrollo y QA.',
      'Uso de Git para control de versiones y trabajo colaborativo.',
      'Participación en ceremonias Agile / Scrum junto al equipo técnico.',
    ],
    image: { url: '/work/peq-logo.png', height: 96, width: 96, className: '' },
  }
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
