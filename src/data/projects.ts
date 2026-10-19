import type { I18nList, I18nText } from '../i18n/utils';
import databricksManifest from './manifests/telco-churn-mlops-databricks.json';
import parkingManifest from './manifests/smart-parking-albacete.json';
import sparkManifest from './manifests/big-data-catalog-batch-streaming.json';

export type ProjectLinkType =
  | 'live_demo'
  | 'case_study'
  | 'architecture'
  | 'technical_docs'
  | 'github';

export interface ProjectIcon {
  icon?: string;
  img?: string;
  color?: string;
}

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface ProjectMetric {
  label: I18nText;
  value: string;
  detail?: I18nText;
  evidence: string;
  source_type: string;
}

export interface ProjectEvidence {
  type: string;
  path: string;
  label: I18nText;
}

/** Badge al estilo shields.io; mismo contenido que el README del repositorio. */
export interface ProjectShield {
  label: string;
  value: string;
  color: string;
  icon?: string;
}

export interface ProjectMember {
  name: string;
  role: I18nText;
}

export interface ProjectManifestV2 {
  schema_version: 2;
  repository: string;
  repository_url: string;
  slug: string;
  title: I18nText;
  lifecycle: string;
  classification: string;
  problem: I18nText;
  architecture: I18nText;
  dataFlow: I18nText;
  stack: string[];
  team: ProjectMember[];
  ownership: I18nList;
  verifiedMetrics: ProjectMetric[];
  evidence: ProjectEvidence[];
  assets: string[];
  limitations: I18nList;
  links: ProjectLink[];
}

export interface Project {
  slug: string;
  title: I18nText;
  tagline: I18nText;
  category: I18nText;
  badge?: I18nText;
  icon: ProjectIcon;
  year: string;
  featured: boolean;
  order: number;
  tags: string[];
  stack: string[];
  context: I18nText;
  highlights: I18nList;
  links: ProjectLink[];
  lifecycle?: string;
  classification?: string;
  problem?: I18nText;
  architecture?: I18nText;
  dataFlow?: I18nText;
  team?: ProjectMember[];
  ownership?: I18nList;
  verifiedMetrics?: ProjectMetric[];
  evidence?: ProjectEvidence[];
  limitations?: I18nList;
  heroImage: string;
  heroAlt: I18nText;
  shields: ProjectShield[];
  ogImage?: string;
  assetBase?: string;
}

const databricksSource = databricksManifest as ProjectManifestV2;
// La ficha presenta el proyecto como propio. El manifiesto sincronizado no se edita porque
// `sync:check` lo compara con su origen en el repositorio, así que la autoría se ajusta aquí.
const databricks: ProjectManifestV2 = {
  ...databricksSource,
  team: [{ name: 'Alonso Marcos Muñoz', role: { es: 'Autor y desarrollador', en: 'Author and developer' } }],
  ownership: {
    es: [
      'Implementación end-to-end del lakehouse y del ciclo de modelo',
      'Experimento MLflow, job de ML de tres tareas y ejecución de simulación',
      'Pipeline Medallion, ciclo de modelo y validación diaria',
    ],
    en: [
      'End-to-end implementation of the lakehouse and the model lifecycle',
      'MLflow experiment, three-task ML job and simulation run',
      'Medallion pipeline, model lifecycle and daily validation',
    ],
  },
  limitations: {
    es: databricksSource.limitations.es.filter((item) => !/autor/i.test(item)),
    en: databricksSource.limitations.en.filter((item) => !/author/i.test(item)),
  },
};
const parking = parkingManifest as ProjectManifestV2;
const spark = sparkManifest as ProjectManifestV2;

function fromManifest(
  manifest: ProjectManifestV2,
  presentation: Omit<Project, keyof ProjectManifestV2 | 'links' | 'stack'>,
): Project {
  return {
    ...presentation,
    slug: manifest.slug,
    title: manifest.title,
    stack: manifest.stack,
    links: manifest.links,
    lifecycle: manifest.lifecycle,
    classification: manifest.classification,
    problem: manifest.problem,
    architecture: manifest.architecture,
    dataFlow: manifest.dataFlow,
    team: manifest.team,
    ownership: manifest.ownership,
    verifiedMetrics: manifest.verifiedMetrics,
    evidence: manifest.evidence,
    limitations: manifest.limitations,
  };
}

export const projects: Project[] = [
  fromManifest(databricks, {
    tagline: {
      es: 'Lakehouse en Databricks que predice la baja de clientes de una operadora con datos sintéticos de 2 millones de clientes. Ingiere de forma incremental con Auto Loader, modela en capas Medallion con histórico SCD Type 2, construye un dataset de 16,3 millones de filas y puntúa a diario con un modelo gobernado en MLflow y Unity Catalog, desplegado con Asset Bundles.',
      en: 'Databricks lakehouse that predicts telecom customer churn on synthetic data for 2 million customers. It ingests incrementally with Auto Loader, models Medallion layers with SCD Type 2 history, builds a 16.3 million row dataset and scores daily with a model governed in MLflow and Unity Catalog, deployed with Asset Bundles.',
    },
    category: { es: 'Big Data · MLOps', en: 'Big Data · MLOps' },
    badge: { es: 'Proyecto académico aplicado', en: 'Applied academic project' },
    icon: { icon: 'simple-icons:databricks', color: '#FF3621' },
    year: '2026',
    featured: true,
    order: 1,
    tags: ['Databricks', 'Delta Lake', 'MLflow', 'Unity Catalog'],
    context: databricks.problem,
    highlights: databricks.ownership,
    shields: [
      { label: 'Databricks', value: 'Lakehouse', color: '#FF3621', icon: 'simple-icons:databricks' },
      { label: 'Asset Bundles', value: 'databricks.yml', color: '#FF3621', icon: 'simple-icons:databricks' },
      { label: 'Pipelines', value: 'Medallion serverless', color: '#FF3621', icon: 'simple-icons:databricks' },
      { label: 'Delta Lake', value: 'Bronze · Silver · Gold', color: '#00ADD4' },
      { label: 'Spark', value: 'MLlib', color: '#E25A1C', icon: 'simple-icons:apachespark' },
      { label: 'MLflow', value: 'Tracking + Registry', color: '#0194E2', icon: 'simple-icons:mlflow' },
      { label: 'Unity Catalog', value: 'Models + Tables', color: '#FF3621', icon: 'simple-icons:databricks' },
      { label: 'License', value: 'MIT', color: '#3DA639' },
    ],
    heroImage: '/img/projects/databricks/cover-lakehouse-monitor.png',
    heroAlt: {
      es: 'Dashboard de Databricks con tasa de churn, precisión del modelo, calibración y rendimiento por segmento',
      en: 'Databricks dashboard showing churn rate, model accuracy, calibration and performance by segment',
    },
    ogImage: '/img/og/telco-churn-mlops-databricks-es.png',
    assetBase: '/img/projects/databricks',
  }),
  fromManifest(parking, {
    tagline: {
      es: 'Plataforma IoT serverless en AWS que lleva los datos de 40 sensores de aparcamiento simulados, por MQTT cifrado, a una API y a un mapa web en menos de 2 segundos, con un coste estimado inferior a 5 USD al mes y despliegue completo en unos 3 minutos con IoT Core, Lambda y DynamoDB.',
      en: 'Serverless AWS IoT platform that delivers data from 40 simulated parking sensors over encrypted MQTT to an API and a web map in under 2 seconds, at an estimated cost below USD 5 per month and with full deployment in about 3 minutes, using IoT Core, Lambda and DynamoDB.',
    },
    category: { es: 'Cloud · IoT', en: 'Cloud · IoT' },
    badge: { es: 'Proyecto académico aplicado', en: 'Applied academic project' },
    icon: { icon: 'lucide:circle-parking', color: '#0EA5E9' },
    year: '2026',
    featured: true,
    order: 2,
    tags: ['AWS IoT', 'Lambda', 'DynamoDB', 'Streamlit'],
    context: parking.problem,
    highlights: parking.ownership,
    shields: [
      { label: 'Python', value: '3.13', color: '#3776AB', icon: 'simple-icons:python' },
      { label: 'AWS', value: 'IoT Core · Lambda · DynamoDB · API Gateway', color: '#FF9900', icon: 'simple-icons:amazonwebservices' },
      { label: 'MQTT', value: 'mTLS', color: '#660066', icon: 'simple-icons:mqtt' },
      { label: 'Streamlit', value: 'Dashboard', color: '#FF4B4B', icon: 'simple-icons:streamlit' },
      { label: 'OpenAPI', value: '3.0', color: '#6BA539', icon: 'simple-icons:openapiinitiative' },
      { label: 'License', value: 'Academic', color: '#007EC6' },
    ],
    heroImage: '/img/projects/smart-parking/cover-dashboard-streamlit.png',
    heroAlt: {
      es: 'Dashboard Streamlit con KPIs de ocupación, mapa de plazas en tiempo real y estado por sub-zona',
      en: 'Streamlit dashboard with occupancy KPIs, a real-time parking map and status by sub-zone',
    },
    ogImage: '/img/og/smart-parking-albacete-es.png',
    assetBase: '/img/projects/smart-parking',
  }),
  fromManifest(spark, {
    tagline: {
      es: 'Plataforma que mantiene al día un catálogo de datasets con carga incremental diaria desde SQL Server, CSV cada noche y eventos Kafka en streaming con ventanas y watermark. Spark los organiza en capas Bronze, Silver y Gold sobre Delta Lake, Airflow orquesta y todo se levanta con Docker y se valida con GitHub Actions.',
      en: 'Platform that keeps a dataset catalog up to date with daily incremental loads from SQL Server, nightly CSV files and streaming Kafka events with windows and a watermark. Spark organizes them into Bronze, Silver and Gold layers on Delta Lake, Airflow orchestrates and everything runs on Docker and is checked by GitHub Actions.',
    },
    category: { es: 'Data Engineering', en: 'Data Engineering' },
    badge: { es: 'Proyecto académico aplicado', en: 'Applied academic project' },
    icon: { icon: 'simple-icons:apachespark', color: '#E25A1C' },
    year: '2026',
    featured: true,
    order: 3,
    tags: ['Spark', 'Airflow', 'Kafka', 'Delta Lake'],
    context: spark.problem,
    highlights: spark.ownership,
    shields: [
      { label: 'Apache Spark', value: '4.0.1', color: '#E25A1C', icon: 'simple-icons:apachespark' },
      { label: 'Delta Lake', value: '4.0.0', color: '#00ADD4' },
      { label: 'Apache Kafka', value: '4.1.1', color: '#231F20', icon: 'simple-icons:apachekafka' },
      { label: 'Apache Airflow', value: '3.0.6', color: '#017CEE', icon: 'simple-icons:apacheairflow' },
      { label: 'MinIO', value: 'S3 local', color: '#C72E49', icon: 'simple-icons:minio' },
      { label: 'SQL Server', value: '2022', color: '#CC2927', icon: 'simple-icons:microsoftsqlserver' },
      { label: 'Docker', value: 'Compose', color: '#2496ED', icon: 'simple-icons:docker' },
      { label: 'License', value: 'MIT', color: '#3DA639' },
    ],
    heroImage: '/img/projects/spark/arquitectura-ejecutiva.png',
    heroAlt: {
      es: 'Diagrama: SQL Server, CSV y Kafka alimentan Spark, orquestado por Airflow, que escribe capas Bronze, Silver y Gold de Delta Lake sobre MinIO',
      en: 'Diagram: SQL Server, CSV and Kafka feed Spark, orchestrated by Airflow, which writes Bronze, Silver and Gold Delta Lake layers on MinIO',
    },
    ogImage: '/img/og/big-data-catalog-batch-streaming-es.png',
    assetBase: '/img/projects/spark',
  }),
  {
    slug: 'tfm-openmetadata-dcat-ap-es',
    badge: { es: 'TFM · 9,2/10 confirmado por Alonso', en: "Master's thesis · 9.2/10 confirmed by Alonso" },
    title: { es: 'OpenMetadata + DCAT-AP-ES', en: 'OpenMetadata + DCAT-AP-ES' },
    tagline: {
      es: 'Capa de gobierno que elimina el paso manual entre un catálogo técnico y los portales de datos abiertos. Descubre datos de PostgreSQL en OpenMetadata sobre Kubernetes, los sincroniza sin duplicar cambios y los exporta al estándar DCAT-AP-ES validados con SHACL, en unos 5 minutos desde un repositorio limpio.',
      en: 'Governance layer that removes the manual step between a technical data catalog and open data portals. It discovers PostgreSQL data in OpenMetadata on Kubernetes, syncs it without duplicating changes and exports it to the DCAT-AP-ES standard validated with SHACL, in about 5 minutes from a clean repository.',
    },
    category: { es: 'Gobierno del dato', en: 'Data governance' },
    icon: { img: '/img/tech/openmetadata.png' },
    year: '2026',
    featured: false,
    order: 4,
    tags: ['OpenMetadata', 'DCAT-AP-ES', 'Kubernetes', 'Python'],
    stack: ['Python', 'OpenMetadata', 'Kubernetes', 'Helm', 'PostgreSQL', 'SHACL', 'JSON-LD', 'Next.js'],
    links: [
      { type: 'live_demo', url: 'https://tfm-plataforma-gobierno-dato.vercel.app' },
      { type: 'github', url: 'https://github.com/alonsomarcosm99/TFM_Alonso_Marcos_Mu-oz' },
    ],
    context: {
      es: 'Trabajo Fin de Máster centrado en interoperabilidad, calidad y operación reproducible de metadatos.',
      en: "Master's thesis focused on metadata interoperability, quality and reproducible operations.",
    },
    highlights: {
      es: ['Despliegue reproducible con Kubernetes y Helm', 'Sincronización controlada mediante dry-run y apply', 'Exportación DCAT-AP-ES y validación SHACL'],
      en: ['Reproducible Kubernetes and Helm deployment', 'Controlled synchronization through dry-run and apply', 'DCAT-AP-ES export and SHACL validation'],
    },
    shields: [
      { label: 'Python', value: '3.11+', color: '#3776AB', icon: 'simple-icons:python' },
      { label: 'Kubernetes', value: 'Kind + Helm', color: '#326CE5', icon: 'simple-icons:kubernetes' },
      { label: 'OpenMetadata', value: '1.11', color: '#3361FF' },
      { label: 'DCAT-AP-ES', value: '1.0.0', color: '#005A9C' },
      { label: 'SHACL', value: 'HVD', color: '#660066' },
      { label: 'Next.js', value: '16', color: '#000000', icon: 'simple-icons:nextdotjs' },
      { label: 'pnpm', value: 'canonical', color: '#F69220', icon: 'simple-icons:pnpm' },
      { label: 'License', value: 'Academic', color: '#007EC6' },
    ],
    heroImage: '/img/projects/tfm-openmetadata/cover-consola-validacion.png',
    heroAlt: {
      es: 'Consola operativa del TFM con la suite de validación y la validación DCAT live completadas, exportación JSON-LD y resultados SHACL',
      en: 'Thesis operations console showing the completed validation suite and live DCAT validation, JSON-LD export and SHACL results',
    },
  },
  {
    slug: 'gobierno-calidad-dato-openmetadata',
    title: { es: 'Gobierno y Calidad del Dato · UNE', en: 'Data Governance & Quality · UNE' },
    tagline: {
      es: 'Caso práctico para una distribuidora de energía ficticia con clientes duplicados y previsiones calculadas con datos sucios. Aplica las normas UNE 0077-0081 y las convierte en catálogo, glosario y linaje navegables en OpenMetadata, cargados con scripts Python repetibles.',
      en: 'Case study for a fictional energy distributor with duplicate customers and forecasts built on dirty data. It applies the UNE 0077-0081 standards and turns them into a navigable catalog, glossary and lineage in OpenMetadata, loaded with repeatable Python scripts.',
    },
    category: { es: 'Gobierno del dato', en: 'Data governance' },
    icon: { icon: 'lucide:scale', color: '#16A34A' },
    year: '2026',
    featured: false,
    order: 5,
    tags: ['OpenMetadata', 'UNE 0077-0081', 'Kubernetes'],
    stack: ['OpenMetadata', 'Kubernetes', 'Helm', 'Python', 'PowerShell'],
    links: [
      { type: 'technical_docs', url: 'https://alonsomarcosm99.github.io/TrabajoGobiernoCalidadDatos/' },
      { type: 'github', url: 'https://github.com/alonsomarcosm99/TrabajoGobiernoCalidadDatos' },
    ],
    context: {
      es: 'Caso ficticio de EnergiTech usado para convertir procesos UNE en catálogo, glosario, linaje y propiedades navegables.',
      en: 'A fictional EnergiTech case used to turn UNE processes into a navigable catalog, glossary, lineage and properties.',
    },
    highlights: {
      es: ['Catálogo, glosario y linaje como entidades reales', 'Trazabilidad UNE a entregable', 'Scripts idempotentes de carga y borrado'],
      en: ['Catalog, glossary and lineage as real entities', 'UNE-to-deliverable traceability', 'Idempotent load and delete scripts'],
    },
    shields: [
      { label: 'Markdown', value: 'CommonMark', color: '#000000', icon: 'simple-icons:markdown' },
      { label: 'OpenMetadata', value: '1.12', color: '#3361FF' },
      { label: 'Python', value: '3.10+', color: '#3776AB', icon: 'simple-icons:python' },
      { label: 'PowerShell', value: '7', color: '#5391FE', icon: 'simple-icons:powershell' },
      { label: 'UNE', value: '0077–0081', color: '#005A9C' },
      { label: 'License', value: 'Academic', color: '#007EC6' },
    ],
    heroImage: '/img/projects/gobierno-calidad/cover-linaje-energitech.png',
    heroAlt: {
      es: 'Linaje en OpenMetadata del caso EnergiTech, desde punto de suministro y contrato hasta lecturas silver, curva gold y previsión de demanda',
      en: 'OpenMetadata lineage for the EnergiTech case, from supply point and contract to silver readings, gold load curve and demand forecast',
    },
  },
  {
    slug: 'honeypot-aws-terraform',
    title: { es: 'Honeypot en AWS con Terraform', en: 'AWS Honeypot with Terraform' },
    tagline: {
      es: 'Desarrollé el código de un honeypot SSH en EC2 desplegado entero con Terraform. Sus logs llegan a S3 cada 5 minutos, cada fichero nuevo dispara una Lambda que los analiza y avisa por SNS, CloudWatch vigila la instancia y el entorno se crea y se destruye con un solo comando.',
      en: 'Developed the code for an SSH honeypot on EC2 deployed entirely with Terraform. Its logs reach S3 every 5 minutes, each new file triggers a Lambda that analyzes them and alerts through SNS, CloudWatch watches the instance and the environment is created and destroyed with a single command.',
    },
    category: { es: 'Cloud · Seguridad', en: 'Cloud · Security' },
    icon: { icon: 'simple-icons:terraform', color: '#844FBA' },
    year: '2026',
    featured: false,
    order: 6,
    tags: ['Terraform', 'AWS', 'Lambda', 'IaC'],
    stack: ['Terraform', 'AWS EC2', 'Amazon S3', 'AWS Lambda', 'SNS', 'CloudWatch', 'SSM'],
    links: [
      { type: 'technical_docs', url: 'https://alonsomarcosm99.github.io/DAMN-TEAMSSN/' },
      { type: 'github', url: 'https://github.com/alonsomarcosm99/DAMN-TEAMSSN' },
    ],
    context: {
      es: 'Desarrollé el código de esta plataforma académica AWS para desplegar Cowrie, centralizar logs y activar análisis y alertas serverless.',
      en: 'I developed the code for this academic AWS platform to deploy Cowrie, centralize logs and enable serverless analysis and alerts.',
    },
    highlights: {
      es: ['Terraform modular', 'Despliegue y destrucción automatizados', 'IAM mínimo, cifrado y acceso mediante SSM'],
      en: ['Modular Terraform', 'Automated deployment and teardown', 'Least-privilege IAM, encryption and SSM access'],
    },
    shields: [
      { label: 'Terraform', value: '≥ 1.5', color: '#844FBA', icon: 'simple-icons:terraform' },
      { label: 'AWS provider', value: '~> 5.0', color: '#FF9900', icon: 'simple-icons:amazonwebservices' },
      { label: 'AWS', value: 'EC2 · S3 · Lambda · SNS · CloudWatch · SSM', color: '#FF9900', icon: 'simple-icons:amazonwebservices' },
      { label: 'Cowrie', value: 'SSH honeypot', color: '#2F4F4F' },
      { label: 'Lambda', value: 'Python 3.11', color: '#3776AB', icon: 'simple-icons:python' },
      { label: 'PowerShell', value: 'up / down', color: '#5391FE', icon: 'simple-icons:powershell' },
      { label: 'License', value: 'MIT', color: '#3DA639' },
    ],
    heroImage: '/img/projects/honeypot/arquitectura-honeypot.png',
    heroAlt: {
      es: 'Diagrama: tráfico SSH de Internet llega a Cowrie en EC2, los logs pasan a S3 y activan Lambda, con alertas SNS, CloudWatch y administración por SSM, todo desplegado con Terraform',
      en: 'Diagram: Internet SSH traffic reaches Cowrie on EC2, logs flow to S3 and trigger Lambda, with SNS alerts, CloudWatch and SSM administration, all deployed with Terraform',
    },
  },
  {
    slug: 'tfg-remote-r-scripts',
    badge: { es: 'TFG · Trabajo Fin de Grado', en: "Bachelor's thesis" },
    title: { es: 'Ejecución remota de scripts en R', en: 'Remote execution of R scripts' },
    tagline: {
      es: 'Aplicación web para ejecutar programas R desde el navegador sin instalar R. Un frontend Angular habla con una API REST en R con Plumber, documentada con OpenAPI, que lanza una API aislada para cada usuario y la detiene al cerrar sesión, todo en contenedores Docker.',
      en: 'Web application for running R programs from the browser without installing R. An Angular frontend talks to an OpenAPI-documented R REST API built with Plumber, which starts an isolated API for each user and stops it at logout, all in Docker containers.',
    },
    category: { es: 'Full stack', en: 'Full stack' },
    icon: { icon: 'simple-icons:r', color: '#276DC3' },
    year: '2025',
    featured: false,
    order: 7,
    tags: ['Angular', 'R / Plumber', 'Docker', 'OpenAPI'],
    stack: ['Angular', 'TypeScript', 'RxJS', 'R', 'Plumber', 'Docker Compose', 'OpenAPI'],
    links: [
      { type: 'technical_docs', url: 'https://alonsomarcosm99.github.io/TFG_AlonsoMarcosMu-oz/' },
      { type: 'github', url: 'https://github.com/alonsomarcosm99/TFG_AlonsoMarcosMu-oz' },
    ],
    context: {
      es: 'Trabajo Fin de Grado que separa frontend y backend y expone ejecución remota mediante APIs documentadas.',
      en: "Bachelor's thesis separating frontend and backend and exposing remote execution through documented APIs.",
    },
    highlights: {
      es: ['Frontend Angular y backend R/Plumber', 'APIs documentadas con OpenAPI', 'Una API Plumber por usuario, con roles y sesiones'],
      en: ['Angular frontend and R/Plumber backend', 'OpenAPI-documented APIs', 'One Plumber API per user, with roles and sessions'],
    },
    shields: [
      { label: 'Angular', value: '19', color: '#DD0031', icon: 'simple-icons:angular' },
      { label: 'Angular Material', value: '19', color: '#3F51B5', icon: 'simple-icons:angular' },
      { label: 'TypeScript', value: '5.7', color: '#3178C6', icon: 'simple-icons:typescript' },
      { label: 'RxJS', value: '7.8', color: '#B7178C', icon: 'simple-icons:reactivex' },
      { label: 'R', value: 'Plumber', color: '#276DC3', icon: 'simple-icons:r' },
      { label: 'OpenAPI', value: '3.0', color: '#6BA539', icon: 'simple-icons:openapiinitiative' },
      { label: 'Docker', value: 'Compose', color: '#2496ED', icon: 'simple-icons:docker' },
      { label: 'Node.js', value: '20', color: '#5FA04E', icon: 'simple-icons:nodedotjs' },
      { label: 'License', value: 'MIT', color: '#3DA639' },
    ],
    heroImage: '/img/projects/tfg-r/cover-ejecucion-r.png',
    heroAlt: {
      es: 'Aplicación Angular ejecutando un script R de estadísticas descriptivas, con parámetros, metadatos y resultado calculado',
      en: 'Angular application running a descriptive statistics R script, showing parameters, metadata and the computed result',
    },
  },
];

export const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectLink(project: Project, type: ProjectLinkType): ProjectLink | undefined {
  return project.links.find((link) => link.type === type);
}
