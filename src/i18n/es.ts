import type { Content } from './types';
import { images, profile, stacks } from '../data/profile';

export const es: Content = {
  htmlLang: 'es',
  localeSwitch: { label: 'English', href: '/', code: 'EN', aria: 'Ver este sitio en inglés' },
  meta: {
    title: 'Welinton Guerrero | Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack en Manta, Ecuador. Construyo plataformas de apuestas, e-commerce y herramientas internas con Angular, TypeScript y Node.js. Disponible para trabajo remoto y freelance.',
    ogAlt: 'Welinton Guerrero, Desarrollador Full Stack',
  },
  themeSwitch: {
    toDark: 'Cambiar al tema oscuro',
    toLight: 'Cambiar al tema claro',
  },
  nav: {
    items: [
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Experiencia' },
      { href: '#work', label: 'Proyectos' },
      { href: '#education', label: 'Educación' },
      { href: '#about', label: 'Perfil' },
      { href: '#contact', label: 'Contacto' },
    ],
    menuLabel: 'Menú',
    closeLabel: 'Cerrar',
    skipToContent: 'Ir al contenido',
  },
  hero: {
    eyebrow: 'Manta, Ecuador',
    name: 'Welinton Guerrero',
    roleLines: ['Desarrollador', 'Full Stack'],
    valueProp:
      'Construyo plataformas web que sirven a varias empresas desde un mismo código. Más de 3 años en productos de apuestas, e-commerce y herramientas internas.',
    availability: ['Disponible para posiciones remotas', 'Disponible para proyectos freelance'],
    stackLabel: 'Stack principal',
    coreStack: stacks.core,
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Contactar',
    ctaResume: 'Descargar CV',
    portraitAlt: 'Retrato de Welinton Guerrero',
    scrollHint: 'Desplaza',
  },
  work: {
    title: 'Proyectos',
    labels: {
      context: 'Dónde',
      problem: 'Problema',
      solution: 'Solución',
      role: 'Rol',
      products: 'Productos de la plataforma',
      results: 'Resultados',
      stack: 'Stack',
      year: 'Año',
      visit: 'Visitar sitio',
      openCase: 'Ver detalles',
      repo: 'Repositorio público',
      repoPrivate: 'Repositorio privado',
      close: 'Cerrar',
    },
    projects: [
      {
        name: 'Un solo código, todas las marcas',
        kind: 'Producción, iGaming',
        year: '2023 a la actualidad',
        context: 'ZGames Technology',
        summary:
          'Plataforma multi-tenant de apuestas deportivas y casino. Un mismo código sirve a varios operadores y cada uno lleva su propia marca.',
        problem:
          'El encargo era una plataforma de apuestas y casino para un solo operador. A mitad del desarrollo vimos que podía servir a otras casas de apuestas. Bifurcar el código por cliente la habría vuelto imposible de mantener.',
        solution:
          'Estructuré el frontend en Angular y sus componentes base para que todo el aspecto cambie intercambiando design tokens. En el backend programé los servicios de usuarios, reportes, apuestas, transacciones y configuración de cuenta.',
        role: 'Desarrollador Full Stack en el equipo que la construyó desde cero. Arquitectura frontend, servicios backend, integraciones con proveedores.',
        products: [
          {
            name: 'Sorti365',
            description:
              'Portal público de apuestas. Sorti365 es el cliente, y el mismo portal se entrega a otros operadores con tokens distintos.',
            url: 'https://sorti365.com/',
          },
          {
            name: 'ZGames BackOffice',
            description:
              'Administración del portal de apuestas. Se construyó una vez y se reutiliza entre clientes.',
          },
          {
            name: 'SortiCenter',
            description: 'Gestión interna de la operación de Sorti365.',
          },
        ],
        results: [
          'Un solo código llega a varios operadores, cada uno con su marca.',
          'Integraciones de casino y sportsbook probadas contra flujos de dinero reales antes de certificar.',
          'Back office y gestión interna construidos junto al portal público.',
        ],
        tech: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Signals', 'CSS', 'Node.js', 'MongoDB', 'Design Tokens'],
        image: images.projects.sorti365,
        imageAlt: 'Interfaz del portal de apuestas Sorti365 (imagen temporal)',
        liveUrl: 'https://sorti365.com/',
      },
      {
        name: 'Tienda nueva, sistema legado intacto',
        kind: 'Producción, e-commerce',
        year: '2025 a la actualidad',
        context: 'Freelance',
        summary: 'Tienda en línea y panel administrativo para una empresa que vende equipos tecnológicos.',
        problem:
          'Su inventario vivía en un SQL Server antiguo que nadie podía tocar, y el catálogo se actualizaba a mano.',
        solution:
          'Programé un ETL en Python que copia el inventario a MySQL sin tocar el sistema antiguo. La tienda y el panel corren sobre PHP y JavaScript, y un módulo de importación masiva trae los productos desde Google Sheets.',
        role: 'Desarrollador Full Stack freelance. ETL, backend, tienda y diseño del panel.',
        results: [
          'El sistema antiguo sigue funcionando igual que antes.',
          'Los precios y las ofertas se actualizan desde una hoja de cálculo en vez de uno por uno.',
          'Panel administrativo diseñado desde cero para categorías, marcas, galerías y ofertas.',
        ],
        tech: ['PHP', 'JavaScript', 'Python', 'MySQL', 'SQL Server', 'Google Sheets API'],
        image: images.projects.tecnored,
        imageAlt: 'Interfaz del e-commerce Tecnored Ecuador (imagen temporal)',
        liveUrl: 'https://tecnoredec.com/',
      },
      {
        name: 'La versión pública de un sistema privado',
        kind: 'Sistema de diseño',
        year: '2026',
        context: 'Trabajo de Fin de Máster, UNIR',
        summary:
          'Una biblioteca de componentes y los design tokens que la sostienen, construida con la arquitectura que uso en el trabajo.',
        solution:
          'Biblioteca en Angular construida con el patrón Presentational-Container y Atomic Design. Los tokens guardan colores, tipografías y espaciados para todo el sistema.',
        results: [
          'Pruebas unitarias con Vitest y regresión visual con Chromatic.',
          'Catálogo de componentes en Storybook y publicación automatizada con GitHub Actions.',
        ],
        tech: [
          'Angular',
          'Signals',
          'TypeScript',
          'CSS',
          'Storybook',
          'Vitest',
          'Testing Library',
          'Chromatic',
          'GitHub Actions',
        ],
        image: images.projects.designSystem,
        imageAlt: 'Catálogo de documentación de la biblioteca de componentes (imagen temporal)',
        liveUrl: 'https://guerrerowelinton.github.io/academic-unir-tesis/storybook/',
        repoUrl: 'https://github.com/GuerreroWelinton/academic-unir-tesis',
      },
      {
        name: 'Otra base de datos, las mismas reglas',
        kind: 'Plataforma interna',
        year: '2024',
        context: 'Trabajo de Titulación, ULEAM',
        summary: 'Plataforma para reservar laboratorios, registrar asistencia y generar reportes.',
        solution:
          'Backend en Node.js y TypeScript con Clean Architecture. El frontend es una SPA en Angular organizada por features, con NgRx sosteniendo el estado.',
        results: [
          'Cuatro perfiles de usuario, cada uno con sus permisos.',
          'Desplegado en DigitalOcean con Docker, Docker Compose y Nginx.',
        ],
        tech: ['Angular', 'NgRx', 'Node.js', 'TypeScript', 'Docker', 'DigitalOcean'],
        image: images.projects.labSystem,
        imageAlt: 'Interfaz del sistema de reserva de laboratorios (imagen temporal)',
        repoUrl: 'https://github.com/GuerreroWelinton/academic-uleam-tesis',
      },
      {
        name: 'Todo saldo se puede explicar',
        kind: 'En desarrollo, fintech',
        year: '2026 a la actualidad',
        context: 'Proyecto personal',
        summary:
          'Sistema de gestión para cajas de ahorro comunitarias. Los socios aportan cada mes, toman préstamos por rondas y reparten los rendimientos al cierre del año.',
        problem:
          'Un saldo que nadie puede rastrear hasta el movimiento que lo produjo no se puede auditar. Cuando alguien lo nota, el historial ya se perdió.',
        solution:
          'Todo cambio de saldo nace de un movimiento de caja. No existen ajustes manuales ni se elimina nada, así que las correcciones son reversas que apuntan a lo que corrigen. Escribí las 25 features como especificaciones antes de programar, y registré cada decisión de arquitectura como un ADR numerado.',
        role: 'Desarrollador único. Especificaciones, arquitectura, implementación y CI.',
        results: [
          '14 ADRs numerados, cada uno con su contexto, decisión y consecuencias.',
          '5 de 25 features completadas, con el estado de cada una en una matriz de trazabilidad.',
          'Las pruebas de integración corren contra un PostgreSQL real, porque la inmutabilidad de la auditoría es un trigger que ningún mock puede observar.',
        ],
        tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'Vitest'],
        image: images.projects.clearFund,
        imageAlt: 'Interfaz de gestión de Clear Fund (imagen temporal)',
        repoUrl: 'https://github.com/GuerreroWelinton/product-clear-fund',
      },
    ],
  },
  about: {
    title: 'Perfil',
    lead: 'Angular es mi punto fuerte, pero rara vez me quedo en un solo lado del producto.',
    paragraphs: [
      'Iba a estudiar contabilidad hasta que alguien dijo que la informática no era para cualquiera, y me lo tomé personal. Programando en PSeInt, Java y Visual Basic descubrí que una idea podía convertirse en algo que funciona, y esa curiosidad me llevó a la ingeniería y después al máster en diseño de interfaz web.',
      'Hoy soy Ingeniero en Tecnologías de la Información y trabajo como Desarrollador Full Stack. Hay días de construir una interfaz y otros de decidir cómo se mueven los datos entre servicios, conectar una API externa o resolver algo en el backend que el usuario igual termina notando.',
      'Suelo meterme en las decisiones técnicas del producto y no solo en la parte que me toca, aunque buena parte del trabajo ni siquiera es técnica. Dar soporte cuando algo falla en producción o sentarse a acordar en una reunión también es construir el producto.',
    ],
  },
  experience: {
    title: 'Experiencia',
    entries: [
      {
        company: 'ZGames Technology',
        companyNote: 'ZGames desarrolla tecnología para la industria de las apuestas.',
        role: 'Desarrollador Full Stack',
        period: 'Julio 2023 a la actualidad',
        location: 'Manta, Ecuador. Presencial.',
        highlights: [
          { value: '75%', label: 'menos tiempo para construir un módulo nuevo' },
          { value: '90%', label: 'menos estilos en línea' },
          { value: '+50.000', label: 'usuarios registrados en la plataforma' },
        ],
        bullets: [
          'Sostengo la arquitectura frontend del portal público y los componentes que reutiliza el equipo.',
          'Ayudo a definir los estándares de arquitectura, reviso código y evito que la deuda técnica se acumule.',
          'Integro proveedores de casino y sportsbook, y pruebo los flujos de dinero antes de certificar.',
          'Programo servicios backend en Node.js y TypeScript, con consultas en MongoDB para reportes, gestión de usuarios, apuestas, transacciones y configuraciones.',
          'Agrego logs estructurados en Seq a los servicios para seguir cómo se comportan los flujos en producción.',
        ],
        tech: [
          'Angular',
          'TypeScript',
          'RxJS',
          'NgRx',
          'Signals',
          'Node.js',
          'MongoDB',
          'PostgreSQL',
          'Seq',
        ],
        projectHref: '#work',
        projectLabel: 'Ver la plataforma',
      },
      {
        company: 'Tecnored Ecuador',
        companyNote: 'Tecnored vende equipos tecnológicos por una tienda en línea.',
        role: 'Desarrollador Full Stack freelance',
        period: 'Octubre 2025 a la actualidad',
        location: 'Manta, Ecuador. Remoto, por demanda.',
        bullets: [
          'Construí la tienda en línea y su panel administrativo con PHP y JavaScript.',
          'Automaticé la sincronización de inventario y la carga masiva del catálogo.',
          'Doy mantenimiento y atiendo las solicitudes del cliente cuando surgen.',
        ],
        tech: ['PHP', 'JavaScript', 'Python', 'MySQL'],
        projectHref: '#work',
        projectLabel: 'Ver la tienda',
      },
      {
        company: 'Empresa Pública Aguas de Manta',
        companyNote: 'Aguas de Manta gestiona el agua potable y el saneamiento de la ciudad.',
        role: 'Pasante de Desarrollo Web',
        period: 'Mayo 2023 a junio 2023',
        location: 'Manta, Ecuador. Presencial.',
        bullets: [
          'Implementé la autenticación con OpenID Connect.',
          'Integré Mapbox para que la aplicación mostrara información geográfica.',
        ],
        tech: ['OpenID Connect', 'Mapbox'],
      },
      {
        company: 'Universidad Laica Eloy Alfaro de Manabí',
        companyNote: 'La universidad pública de Manta, donde cursé la ingeniería.',
        role: 'Ayudante de cátedra, Aplicaciones Móviles',
        period: 'Octubre 2022 a enero 2023',
        location: 'Manta, Ecuador. Presencial.',
        bullets: [
          'Planifiqué los contenidos de la asignatura a lo largo del período.',
          'Preparé e impartí clases de desarrollo móvil con Flutter y React Native, y elaboré el material de apoyo.',
          'Revisé el código que entregaban los estudiantes y les devolví retroalimentación.',
        ],
        tech: ['Flutter', 'React Native'],
      },
    ],
  },
  education: {
    title: 'Educación',
    degreesTitle: 'Títulos',
    entries: [
      {
        degree: 'Máster en Diseño y Desarrollo de Interfaz de Usuario Web',
        school: 'Universidad Internacional de La Rioja (UNIR)',
        period: 'Febrero 2025 a mayo 2026',
        location: 'España, remoto',
      },
      {
        degree: 'Ingeniería en Tecnologías de la Información',
        school: 'Universidad Laica Eloy Alfaro de Manabí',
        period: 'Abril 2019 a agosto 2024',
        location: 'Ecuador, presencial',
      },
    ],
    certificationTitle: 'Certificación',
    certification: {
      title: 'Continuing Education Certificate in Leadership',
      issuer: 'MIU City University Miami',
      body: 'Liderazgo consciente, inteligencia emocional, comunicación asertiva y gestión de relaciones en el trabajo.',
      credentialLabel: 'ID de credencial',
      verifyLabel: 'Verificar este certificado',
    },
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B1, intermedio' },
    ],
  },
  skills: {
    title: 'Stack y tecnologías',
    groups: [
      { title: 'Frontend', items: stacks.frontend },
      { title: 'Backend y bases de datos', items: stacks.backend },
      { title: 'Testing y calidad', items: stacks.testing },
      { title: 'DevOps y herramientas', items: stacks.devops },
    ],
  },
  contact: {
    title: 'Hablemos',
    body: 'Zona horaria GMT-5, sin horario de verano.',
    emailLabel: 'Enviarme un correo',
    linksLabel: 'En otros lados',
    links: [
      { label: 'LinkedIn', value: 'in/welinton-guerrero', href: profile.links.linkedin },
      {
        label: 'GitHub, personal',
        value: profile.handles.githubPersonal,
        href: profile.links.githubPersonal,
      },
      {
        label: 'GitHub, trabajo',
        value: profile.handles.githubWork,
        href: profile.links.githubWork,
      },
    ],
    resumeLabel: 'Descargar CV (ES)',
    noScript: 'Ese botón necesita JavaScript. También puedes escribirme por LinkedIn.',
  },
  footer: {
    tagline: 'Desarrollador Full Stack, Manta, Ecuador',
    builtWith: 'Construido con Astro.',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
  },
};
