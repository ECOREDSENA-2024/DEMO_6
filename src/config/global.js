export default {
  global: {
    componenteFormativo:
      'Construcción interfaz <i>front-end</i> y despliegue con React.js',
    descripcionCurso:
      'Poder realizar una interfaz web con React.js, ofrece grandes beneficios en cuanto a funcionalidad y rapidez en el servicio web, es una herramienta tecnológica que ayuda y simplifica el escribir código y se integra muy bien con los servicios de JavaScript.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<i>Front-end</i>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de desarrollo web',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Construcción web con React',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sitio web, <i>hosting</i> y dominio',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF01_22810050_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. <i>Front-end</i>',
      referencia:
        'Platzi. (2021). <i>Qué es Frontend y Backend</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=s95S1_vP-dQ',
    },
    {
      tema: '2. Herramientas de desarrollo web',
      referencia: 'Visual Studio Code. (2022). <i>Code Editing. Redefined</i>.',
      tipo: 'Sitio web',
      link: 'https://code.visualstudio.com/',
    },
    {
      tema: '2. Herramientas de desarrollo web',
      referencia: 'Node.js. (2022). <i>Descarga | Node.js</i>.',
      tipo: 'Sitio web',
      link: 'https://nodejs.org/en',
    },
    {
      tema: '2. Herramientas de desarrollo web',
      referencia:
        'React. (2022). A <i>JavaScript library for building user interfaces</i>.',
      tipo: 'Sitio web',
      link: 'https://reactjs.org/',
    },
    {
      tema: '4. Sitio web, <i>Hosting</i> y Dominio',
      referencia:
        'MarketHax | Ecommerce México. (2020). <i>Qué es hosting y dominio de una página web para principiantes.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VzXbegQtXVs',
    },
  ],
  glosario: [
    {
      termino: 'CSS',
      significado:
        'hoja de estilos en cascada o lenguaje que ayuda a definir la apariencia del documento escrito. ',
    },
    {
      termino: 'Dominio',
      significado:
        'nombre único de la página web, con el que nadie más a nivel mundial podrá utilizar el mismo nombre.',
    },
    {
      termino: '<i>Hosting</i>',
      significado:
        'servidor donde se permite el cargue de la aplicación web desarrollada para un fin u objetivo de desarrollo de <i>software</i>.',
    },
    {
      termino: 'Maquetación',
      significado:
        'distribución de la página web relacionada con los estilos, como colores, fuentes, tamaños, letras y demás elementos. ',
    },
    {
      termino: 'Node.JS',
      significado:
        'entorno de ejecución para JavaScript que ayuda a permanecer el código ligero y eficiente en la superficie del uso intensivo de los datos en tiempo real.',
    },
    {
      termino: 'React.JS',
      significado:
        'librería de JavaScript de código abierto que se enfoca a la visualización.',
    },
  ],
  referencias: [
    {
      referencia: 'Node.js. (2022). Node.js.',
      link: 'https://nodejs.org/en',
    },
    {
      referencia:
        'Pickupimage.com. (2022). Free High Resolution Pictures and High Quality Free images.',
      link: 'https://pickupimage.com',
    },
    {
      referencia:
        'React. (2022). A JavaScript library for building user interfaces.',
      link: 'https://reactjs.org',
    },
    {
      referencia:
        'Skitterphoto. (2022). Un lugar para encontrar, mostrar y compartir imágenes de dominio público.',
      link: 'https://skitterphoto.com',
    },
    {
      referencia: 'StockSnap. (2022). Beautiful Free Stock Photos.',
      link: 'https://stocksnap.io',
    },
    {
      referencia:
        'Unsplash. (2022). 500+ Scrum Pictures | Download Free Images on Unsplash.',
      link: 'https://unsplash.com/s/photos/scrum',
    },
    {
      referencia: 'Visual Studio Code. (2022). Code Editing. Redefined.',
      link: 'https://code.visualstudio.com',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luis Eyder Ortiz',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
