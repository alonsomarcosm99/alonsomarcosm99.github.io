// Generado por 12_PORTFOLIO_WEB/sincronizar_portfolio.py desde
// 05_CV/00_fuente_maestra/banco_canonico.yaml. No editar a mano.
import type { I18nText, I18nList } from '../i18n/utils';

export interface Experience {
  company: string;
  /** Logo/escudo de la empresa (ruta en /public). */
  logo?: string;
  role: I18nText;
  /** Periodo legible; usa null en "to" para indicar "actualidad". */
  period: { from: string; to: string | null };
  location: I18nText;
  summary: I18nText;
  highlights: I18nList;
  tags: string[];
  /** Enlace externo relevante (p.ej. catálogo público). */
  link?: { label: string; href: string };
}

export const experiences: Experience[] = [
  {
    company: 'Tragsatec',
    logo: '/img/companies/tragsatec.jpg',
    role: { es: 'Ingeniero de Datos · ImpulsaDATA', en: 'Data Engineer · ImpulsaDATA' },
    period: { from: '2025-10', to: null },
    location: { es: 'Albacete, España', en: 'Albacete, Spain' },
    summary: { es: 'Trabajo en el proyecto ImpulsaDATA / Gestión de la Demanda del Dato Público para la Dirección General del Dato. Mi trabajo se centra en integrar, transformar, validar y publicar la información de los catálogos de datos de 22 ministerios y organismos públicos.', en: 'I work on the ImpulsaDATA project (public data demand management) for the Spanish Data Directorate. My work focuses on integrating, transforming, validating and publishing the data catalogue information of 22 Spanish ministries and public bodies.' },
    highlights: {
      es: [
        'Construyo y mantengo pipelines ETL en Python y SQL que recogen, validan y publican a diario o cada semana los catálogos de ImpulsaDATA, un programa que suma 5.771 conjuntos de datos abiertos.',
        'Diseño transformaciones, agregaciones y vistas en PostgreSQL y Oracle para que la información llegue estructurada, coherente y lista para consultarse y publicarse.',
        'Automatizo los controles que validan cada conjunto de datos contra el estándar europeo de datos abiertos antes de publicarlo, para que ningún error llegue a los catálogos oficiales.',
        'Adapto y extiendo CKAN, la plataforma de datos abiertos del proyecto, con un perfil común DCAT-AP-ES para todos los organismos, recolección automática de catálogos (harvesting) y datos geoespaciales.',
        'Administro OpenMetadata, la plataforma de catálogo y gobierno del dato, en pruebas, la uso en producción y la integro por API con el proceso de conversión de metadatos.',
        'Preparo y opero los entornos de desarrollo, pruebas, preproducción y producción con Docker, Podman, Git y SSH, con despliegues documentados que el equipo puede repetir y revisar.',
        'Dentro del proyecto AgoraData lidero el desarrollo de la interfaz web desde la que se operan el backend y los procesos Python de ImpulsaDATA, con Java, Spring Boot, Vaadin y PostgreSQL.',
        'Coordino y delego en el equipo la seguridad, las pruebas, la accesibilidad y el CI/CD de la interfaz del proyecto AgoraData para que el trabajo avance en paralelo.',
        'Refuerzo con el equipo la seguridad de CKAN (actualizaciones, cifrado TLS, cabeceras y cookies) y verifico cada corrección con pruebas antes de cerrarla.',
        'Acompaño a perfiles en prácticas y junior, documento las decisiones técnicas y convierto el conocimiento del equipo en guías reutilizables.',
        'Acelero el desarrollo, las pruebas end-to-end y la revisión de código con flujos agénticos de IA (Claude, Codex y Copilot), con reglas y contexto que mantienen la trazabilidad.',
      ],
      en: [
        'Build and maintain Python and SQL ETL pipelines that collect, validate and publish ImpulsaDATA catalogues daily or weekly, in a programme that has released 5,771 open datasets.',
        'Design PostgreSQL and Oracle transformations, aggregations and views so that data arrives structured, consistent and ready to be queried and published.',
        'Automate the checks that validate every dataset against the European open data standard before release, keeping errors out of official catalogues.',
        'Adapt and extend CKAN, the project\'s open data platform, with a shared DCAT-AP-ES profile for every public body, automated catalogue harvesting and geospatial data support.',
        'Administer OpenMetadata, the data catalogue and governance platform, in the test environment, use it in production and integrate it through its API with the metadata conversion process.',
        'Set up and run development, test, pre-production and production environments with Docker, Podman, Git and SSH, keeping deployments documented, repeatable and easy for the team to review.',
        'Within the AgoraData project, lead development of the web interface used to operate ImpulsaDATA\'s backend and Python processes, built with Java, Spring Boot, Vaadin and PostgreSQL.',
        'Coordinate and delegate security, testing, accessibility and CI/CD for the AgoraData project interface across the team, so work moves forward in parallel.',
        'Harden CKAN security with the team (upgrades, TLS encryption, headers and cookies) and verify every fix with tests before closing it.',
        'Mentor interns and junior colleagues, document technical decisions and turn team knowledge into reusable guides.',
        'Speed up development, end-to-end testing and code review with agentic AI workflows (Claude, Codex and Copilot), using rules and context that keep the work traceable.',
      ],
    },
    tags: ['Python', 'SQL', 'PostgreSQL', 'Oracle', 'CKAN', 'OpenMetadata', 'DCAT-AP-ES', 'SHACL', 'Docker/Podman', 'Java', 'Spring Boot', 'Vaadin'],
    link: { label: 'datos.gob.es', href: 'https://datos.gob.es/es/catalogo/conjuntos-datos' },
  },
  {
    company: 'Tragsatec',
    logo: '/img/companies/tragsatec.jpg',
    role: { es: 'Ingeniero de Datos (Prácticas) · ImpulsaDATA', en: 'Data Engineer (Internship) · ImpulsaDATA' },
    period: { from: '2025-06', to: '2025-09' },
    location: { es: 'Albacete, España', en: 'Albacete, Spain' },
    summary: { es: 'Primera etapa en ImpulsaDATA, centrada en diseñar y desarrollar la primera versión de la herramienta de conversión de metadatos del proyecto.', en: 'First stage at ImpulsaDATA, focused on designing and building the first version of the project\'s metadata conversion tool.' },
    highlights: {
      es: [
        'Desarrollé la primera versión de la herramienta de conversión de metadatos del proyecto, un ETL en Python que automatizó un flujo antes manual y publica la información en CKAN.',
        'Añadí configuración externa, registros de ejecución y documentación para que el equipo pudiera operar, revisar y mantener la herramienta con facilidad.',
      ],
      en: [
        'Developed the first version of the project\'s metadata conversion tool, a Python ETL that automated a previously manual flow and publishes the information in CKAN.',
        'Added external configuration, execution logs and documentation so the team could run, review and maintain the tool easily.',
      ],
    },
    tags: ['Python', 'ETL', 'JSON-LD', 'RDF', 'SHACL', 'CKAN', 'Docker', 'GitLab'],
    link: { label: 'datos.gob.es', href: 'https://datos.gob.es/es/catalogo/conjuntos-datos' },
  },
  {
    company: 'La Fábrica del Tiempo',
    logo: '/img/companies/lafabrica.png',
    role: { es: 'Ingeniero de Datos y Automatización (Prácticas)', en: 'Data & Automation Engineer (Internship)' },
    period: { from: '2024-02', to: '2024-08' },
    location: { es: 'Albacete, España', en: 'Albacete, Spain' },
    summary: { es: 'Integración de datos y automatización de procesos con Power Platform y Microsoft 365 en una empresa de consultoría y productividad.', en: 'Data integration and process automation with Power Platform and Microsoft 365 at a consulting and productivity company.' },
    highlights: {
      es: [
        'Implanté con Power Apps una aplicación interna que centraliza la gestión de procesos e información de la empresa para un equipo de al menos 10 personas.',
        'Mejoré más de un 25 % la eficiencia de la gestión de clientes potenciales, notificaciones y aprobaciones al automatizarla con Power Automate sobre SharePoint, el CRM y Microsoft 365.',
        'Formé al equipo en las nuevas herramientas y preparé contenido técnico para facilitar su adopción en el trabajo diario.',
      ],
      en: [
        'Delivered an internal Power Apps application that centralises the company\'s process management and information for a team of 10+ people.',
        'Improved the efficiency of lead management, notifications and approvals by more than 25%, automating them with Power Automate across SharePoint, the CRM and Microsoft 365.',
        'Trained the team on the new tools and prepared technical content to support their day-to-day adoption.',
      ],
    },
    tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Microsoft 365', 'CRM'],
  },
  {
    company: 'Ayuntamiento de Alcázar de San Juan',
    logo: '/img/companies/alcazar.svg',
    role: { es: 'Técnico Informático (Prácticas)', en: 'IT Technician (Internship)' },
    period: { from: '2019-03', to: '2019-06' },
    location: { es: 'Alcázar de San Juan, España', en: 'Alcázar de San Juan, Spain' },
    summary: { es: 'Soporte técnico y mantenimiento informático en un entorno de administración pública.', en: 'Technical support and IT maintenance in a public administration setting.' },
    highlights: {
      es: [
        'Di soporte técnico a los usuarios municipales y resolví incidencias de hardware, software y red en un entorno de administración pública.',
        'Mantuve equipos e infraestructura básica, apoyé la administración de sistemas y documenté las incidencias para agilizar su seguimiento.',
      ],
      en: [
        'Provided technical support to municipal staff and resolved hardware, software and network incidents in a public administration setting.',
        'Maintained equipment and basic infrastructure, supported systems administration and documented incidents to speed up their follow-up.',
      ],
    },
    tags: ['Soporte IT', 'Sistemas', 'Redes'],
  },
];
