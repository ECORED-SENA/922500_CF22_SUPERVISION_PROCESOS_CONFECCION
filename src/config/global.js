export default {
  global: {
    componenteFormativo: 'Capacitación del personal y perfil técnico ',
    descripcionCurso:
      'La responsabilidad empresarial implica programas de inducción o capacitación para proporcionar herramientas al personal. Se debe considerar el perfil técnico, que abarca conocimientos, habilidades y destrezas necesarias para cada puesto según la estructura y los procesos. Así se garantiza que los empleados cuenten con las habilidades adecuadas para contribuir al éxito de la organización.',
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
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
        titulo: 'Capacitación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura de un modelo o proceso de capacitación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Inducción y reinducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Proceso administrativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Proceso organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Competencias laborales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Manual de funciones',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Estructura de un modelo o proceso de capacitación  ',
      referencia:
        'Pereda, M. y  Berrocal, F. (s. f.). <i>La evaluación de competencias</i>.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo1_La_evaluacion_de_competencias.pdf',
    },
    {
      tema: 'Proceso administrativo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <i>Planeación estratégica</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/1yAOUdaaYxc',
    },
    {
      tema: 'Proceso administrativo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <i>Análisis de la situación del entorno</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/2L03LI44M0Q',
    },
    {
      tema: 'Proceso organizacional',
      referencia:
        'U-Lux. (2021). <i>Estructura organizacional ¿Qué es? ¿Para qué sirve?</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/m3ktM653Xrc',
    },
    {
      tema: 'Proceso organizacional',
      referencia:
        'Growp. (2017). <i>La estructura organizacional</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/NpsflJIWNIg',
    },
    {
      tema: 'Competencias laborales',
      referencia: 'SENA. (2020). <i>Observatorio Laboral</i>.',
      tipo: 'Página Web',
      link: 'https://observatorio.sena.edu.co/Clasificacion/Cno',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'consiste en integrar y coordinar los recursos organizacionales para alcanzar los objetivos definidos de la manera más eficaz y eficiente posible.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'cualidad o propiedad del ambiente organizacional que perciben o experimentan los miembros de una organización y que influye en su comportamiento.',
    },
    {
      termino: 'Competencia',
      significado:
        'conjunto de habilidades y tecnologías aplicadas de forma integrada y convergente.',
    },
    {
      termino: 'Competencias esenciales',
      significado:
        'afectan directamente la atención de las demandas de dos diferentes grupos de interés.',
    },
    {
      termino: 'Compromiso',
      significado:
        'el compromiso laboral es un factor que hace que los empleados se involucren tanto con su trabajo como con los objetivos y los valores de la empresa. Un empleado comprometido es alguien que siente pasión con su trabajo, y esto lo demostrará realizando un esfuerzo mayor a la hora de realizar sus tareas.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'relación directa entre los aspectos que rodean a los empleados y las diferentes ventajas que brinda la organización hacia los mismos.',
    },
    {
      termino: 'Destreza',
      significado:
        'el término destreza se entiende como la capacidad aprendida que tiene una persona para realizar una actividad de manera ágil, rápida y eficiente, generalmente vinculada con el cuerpo u oficios manuales (aunque actualmente se habla tanto de destrezas motoras como destrezas intelectuales).',
    },
    {
      termino: 'Enseñanza',
      significado:
        'la enseñanza es el proceso de transmisión de una serie de conocimientos, técnicas, normas y/o habilidades. Está basada en diversos métodos, realizados a través de una serie de instituciones, y con el apoyo de una serie de materiales.',
    },
    {
      termino: 'Equipo de trabajo',
      significado:
        'el trabajo en equipo se define como la unión de dos o más personas organizadas de una forma determinada, las cuales cooperan para lograr un fin común, que es la ejecución de un proyecto. Nace como una necesidad de tener relaciones con otras personas para lograr retos que no se alcanzarían individualmente.',
    },
    {
      termino: 'Evaluación',
      significado:
        'la evaluación del desempeño es un proceso sistemático y periódico de estimación cuantitativa y cualitativa del grado de eficacia con el que las personas llevan a cabo las actividades y responsabilidades de los puestos que desarrollan.',
    },
    {
      termino: 'Función',
      significado:
        'es un conjunto de tareas o de obligaciones ejercidas de manera sistemática o reiterada por el ocupante de un puesto. para que un conjunto de obligaciones constituya una función es necesario que haya reiteración en su desempeño.',
    },
    {
      termino: 'Inducción',
      significado:
        'La inducción es el procedimiento por el cual se presenta la empresa a los nuevos empleados para ayudarles a integrarse al medio de trabajo y tener un comienzo productivo.',
    },
    {
      termino: 'Misión',
      significado: 'razón perenne de la existencia de una organización.',
    },
    {
      termino: 'Motivación',
      significado:
        'es el proceso que origina, estimula y direcciona voluntariamente los comportamientos hacia la realización de objetivos bajo una conducta de esfuerzo originando un desempeño óptimo.',
    },
    {
      termino: 'Plan de trabajo',
      significado:
        'es un documento que reúne la información necesaria para llevar a cabo un proyecto. El plan de trabajo, como herramienta de gestión empresarial, contiene un conjunto de acciones que facilitan, ya sea a una persona o a un equipo, cumplir con sus objetivos.',
    },
    {
      termino: 'Reinducción',
      significado:
        'la reinducción son procesos de formación y capacitación dirigidos a facilitar y a fortalecer la integración del empleado a la cultura organizacional.',
    },
    {
      termino: 'Responsabilidad Social Empresarial (RSE)',
      significado:
        'aunque la Responsabilidad Social Empresarial (RSE) es inherente a la empresa, recientemente se ha convertido en una nueva forma de gestión y de hacer negocios, en la cual la empresa se ocupa de que sus operaciones sean sustentables en lo económico, lo social y lo ambiental.',
    },
    {
      termino: 'Sistema',
      significado:
        'conjunto de elementos dinámicamente relacionados, que desarrollan una actividad para lograr un objetivo o propósito.',
    },
    {
      termino: 'Valores',
      significado: 'reglas maestras que rigen nuestro comportamiento.',
    },
    {
      termino: 'Visión',
      significado: 'imagen específica de un futuro deseado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alles, M. (2009). Diccionario de competencias. Talleres Gráficos Color Efe.',
    },
    {
      referencia:
        'CERpIE-UPC. (2017). El iceberg de las competencias: mostramos sólo el 15% de lo que somos. Prevención integral.',
      link:
        'CERpIE-UPC. (2017). El iceberg de las competencias: mostramos sólo el 15% de lo que somos. Prevención integral',
    },
    {
      referencia:
        'Conexión ESAN. (2016). Cinco pasos del plan de capacitación. ESAN.',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2016/07/cinco-pasos-del-plan-de-capacitacion/',
    },
    {
      referencia: 'Confecciones Aburra Ltda. (s. f.). 1.6 Reseña histórica.',
      link:
        'https://sites.google.com/site/confeccionesaburra/home/-resena-historica',
    },
    {
      referencia:
        'Fuentes, T. y Luna, M. (2011). Análisis de tres modelos de planificación estratégica bajo cinco principios del pensamiento complejo. Revista Digital de Investigación y Postgrado, 1(2).',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3895231',
    },
    {
      referencia:
        'Gestión de Talento Humano. (2012). Inducción, entrenamiento y reinducción. Universidad Surcolombiana.',
      link:
        'https://www.usco.edu.co/contenido/SGC-USCO/documentos/09.AP-THU-GESTION-DE-TALENTO-HUMANO/AP-THU-PR-08%20INDUCCION,%20ENTRENAMIENTO%20Y%20REINDUCCION.pdf',
    },
    {
      referencia:
        'Grados, J. (2003). Reclutamiento, selección, contratación e inducción del personal. Manual Moderno.',
    },
    {
      referencia:
        'Observatorio Laboral y Ocupacional. (2020). Clasificación Nacional de Ocupaciones. SENA.',
      link: 'https://observatorio.sena.edu.co/Content/pdf/cno_version_2020.pdf',
    },
    {
      referencia:
        'Ramírez, M. y Valenzuela, J. (2019). Innovación educativa. Investigación, formación, vinculación y visibilidad. Editorial Síntesis.',
      link: 'https://www.sintesis.com/data/indices/9788491710974.pdf',
    },
    {
      referencia:
        'Serna, H. (2008). Gerencia estratégica. Planeación y gestión, teoría y metodología. 3R Editores.',
      link: 'http://hdl.handle.net/1992/46578',
    },
    {
      referencia:
        'Shum, Y. (2017). Matriz de impacto cruzado para marca personal (DOFA). Yi Min Shum Xie.',
      link: 'https://yiminshum.com/matriz-impacto-cruzado-marca-personal-dofa/',
    },
    {
      referencia:
        'Suarez, E. y Altahona, T. (2009). Planeación estratégica en las Mipymes. Universitaria de Investigación y Desarrollo.',
      link:
        'https://www.udi.edu.co/images/investigaciones/publicaciones/libros/porter/07/planeacion_mipymes.pdf',
    },
    {
      referencia:
        'Zuñiga, F. (2004). 40 preguntas sobre competencia laboral. Cinterfor.',
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
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ericka Alexandra Blanco Sánchez',
          cargo: 'Experta temática',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'Jenny Patricia Torres',
          cargo: 'Experta temática',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'Adriana María Giraldo Herrera',
          cargo: 'Experta temática',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'Witer Calle Valencia',
          cargo: 'Instructora Red Gestión Administrativa',
          centro:
            'Sena Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Jenny Patricia Torres',
          cargo: 'Instructora Red Gestión Administrativa',
          centro:
            'Sena Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Ericka Alexandra Blanco Sánchez',
          cargo: 'Instructora Red Gestión Administrativa',
          centro:
            'Sena Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Vilma Perilla',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital- Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital- Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodóloga para la formación virtual',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
