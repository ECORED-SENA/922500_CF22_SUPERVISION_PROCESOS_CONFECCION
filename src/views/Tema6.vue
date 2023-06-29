<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Competencias laborales

    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/96.png', alt='')              
      .col-lg-7.my-3(data-aos="fade-right")
        p(data-aos="fade-down") El concepto de competencia laboral surgió en algunos países industrializados en la década de 1980, se tenían problemas para vincular el sistema educativo con el sector productivo. La situación actual se caracteriza por la falta de correspondencia entre el sistema de educación y formación y las nuevas necesidades de la sociedad. Ante esto, la respuesta es la capacidad laboral, que pretende ser un método integral de gestión del talento, que rastrea todos los procesos de gestión de personal en la organización. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3(data-aos="fade-right")
        h5.t1(data-aos="fade-down").mb-5 Para entrar un poco más en todo lo relacionado con las competencias laborales, empezará a conocer un poco de su definición de acuerdo con las diferentes instituciones o autores: 
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg27")
          .row.justify-content-center(titulo="La Organización Internacional del Trabajo (OIT)")
            .col-11
              p Capacidad de llevar exitosamente las actividades laborales. La competencia laboral se basa en la buena ejecución y la capacidad de toma de decisiones. 
          .row.justify-content-center(titulo="Servicio Nacional de Aprendizaje SENA")
            .col-11
              p Capacidad de una persona para desempeñar funciones productivas en diferentes contextos y con base en estándares de calidad establecidos por el sector productivo.
          .row.justify-content-center(titulo="David McClelland")
            .col-11
              p Profesor de la Universidad de Harvard, quien, en los años setenta, siendo uno de los pioneros en el modelo de gestión por competencias en el mundo, escribió sobre el concepto de competencia definiéndolo como: “características en una persona que están relacionadas con los comportamientos y la acción exitosa en su actividad profesional”.  Se entiende subyacente, como algo muy intrínseco de la personalidad humana, y se puede predecir el comportamiento en las diferentes situaciones sociales o laborales.
          .row.justify-content-center(titulo="Spencer y Spencer")
            .col-11
              p Este modelo se ha adaptado desde la definición dada por David McClelland, donde se trabaja la motivación humana en el desarrollo de las actividades  laborales y sociales.  Estos autores, para comprender un poco más este modelo, expusieron las competencias en forma de iceberg, donde se indica que las competencias en las personas tienen dos niveles: uno que es más visible y otro que es más difícil de identificar o sacar a flote.                                                 
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/97.png', alt='') 

    .titulo-sexto.color-acento-contenido
      h5 Figura 6.
      span Modelo iceberg
    img.img-a.img-t(src='@/assets/curso/temas/98.png', alt='Esta figura representa el modelo del iceberg, que utiliza una metáfora para explicar el modelo de competencias y describir lo que vemos y no vemos en una persona. Indica que solo mostramos el 15% de lo que somos, que incluye nuestras habilidades y conocimientos visibles. Mientras tanto, el 85% restante (rol social, autoimagen, rasgos, motivos) se mantiene oculto bajo la superficie, invisible para los demás. Es precisamente esta parte oculta en la que debemos centrarnos al identificar y evaluar una competencia.') 
    .bg33.p-5.mb-3 
      p(data-aos="fade-down").mb-0 En los rasgos visibles, se habla de habilidades, destrezas y conocimientos de las personas que toman menos tiempo en identificar, es lo que se sabe y lo que se tiene capacidad de hacer; mientras lo que se encuentra por debajo es lo que está oculto, este lado está más relacionado con la personalidad de cada individuo y se hace más difícil de identificar y trabajar en él. Dentro de esto, se encuentra la red social, que hace referencia a esos círculos sociales que tienen influencia en el desarrollo de la personalidad de las personas, la autoimagen es cómo me veo y cómo me identifico como persona; los rasgos y los motivos hacen referencia a cómo se suelen hacer las cosas y el gusto por el cual deseo realizar las cosas.
    figcaption.mb-5 Nota. Tomada de Prevención Integral (2017).

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-8.my-3(data-aos="fade-right")
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          .py-3
            p.mb-2 Martha Alles (2009), considerada la mayor experta en todo lo relacionado con competencias laborales en Latinoamérica, dice que competencia son: “Características de personalidad devenidas en comportamientos que generan un desempeño exitoso en un puesto de trabajo”. Dentro del desarrollo del modelo de gestión por competencias propuesto por Martha Alles, se definen diferentes tipos de competencias, como son las competencias corporativas, las competencias específicas y las competencias actitudinales, las cuales se trabajarán más adelante.
            span #[b Martha Alles (2009)]     

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/99.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Teniendo en cuenta lo estudiado con los diferentes autores, se puede decir que competencia es: un conjunto de conocimientos, aptitudes, actitudes y valores, así como de habilidades y destrezas, para desarrollar las funciones de un cargo determinado.    
    p(data-aos="fade-down").mb-5 Según la definición generada, se puede decir entonces que el conocimiento está relacionado con todo el saber que tiene el individuo de una situación o tema en específico; lo actitudinal y los valores hacen referencia al saber ser, a la forma de relacionarse, a la forma de asumir las diferentes situaciones que se presentan; las habilidades y destrezas se enfocan en la capacidad de hacer, la facilidad con que se pueden desarrollar las tareas y dar solución a las diferentes situaciones que se presentan en el desarrollo de las mismas. 
    .bg9.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center         
        .col-lg-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/100.svg', alt='')
        .col-10.my-3
          p(data-aos="fade-down").mb-0 Las competencias deben de estar ligadas al organigrama o estructura organizacional de su empresa, ya que estas se ejecutan de acuerdo con el diseño de cargo realizado, las funciones, las responsabilidades, la autoridad que se tiene dentro de la organización. De igual manera, en los diferentes medios de información, se encuentra un sinnúmero de bibliografía sobre las competencias laborales, pero para este documento se trabajará con el Diccionario de Competencias Labores Trilogía I, ya que Alles es una experta a nivel de Latinoamérica en este tema.  

    .row.justify-content-start.mb-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Competencias corporativas

    .row.justify-content-center.mb-4           
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/101.png', alt='')
      .col-lg-9.my-3
        .row.justify-content-center.align-items-start.bg6.mb-4          
          .col-auto.pt-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/102.svg', alt='')
          .col
            p(data-aos="fade-down").mb-0.p-4 Según Martha Alles, en el libro Diccionario de Competencias Laborales para Latinoamérica (2009), las competencias corporativas se definen como: “El conjunto de conocimientos, habilidades, actitudes y destrezas definidas por la organización, y cuya principal regla de diseño y gestión es que deben ser poseídas por todos los miembros que la componen, independientemente del cargo que ocupen, ya que al tenerlas y desarrollarlas contribuyen sustancialmente al éxito y la productividad organizacional”. Estas competencias también son llamadas competencias organizacionales y están ligadas a los valores corporativos definidos por la organización, ya que con el desarrollo de estas competencias en cada uno de los empleados se puede generar una apropiación de la cultura organizacional dentro y fuera de esta.    
        p(data-aos="fade-down").mb-4 En el desarrollo de este numeral y todos los que corresponden a las competencias laborales, se tomará como base el diccionario de Martha Alles (2009), este diccionario define las competencias según unos niveles de A a la D, donde A es el nivel más alto y D es el nivel más bajo.   

        .bg12.p-4(data-aos="flip-down") 
          .row.justify-content-center.align-items-center
            .col-lg-auto.my-3
              img.img-a.img-t.beat(src='@/assets/curso/temas/30.svg', alt='')
            .col.my-3
              h5(data-aos="fade-down").mb-0 Revise un ejemplo para que pueda entender un poco más sobre las competencias corporativas u organizacionales. 

    .bg34  
      p(data-aos="fade-down").mb-4.pt-3.text-center #[b Ejemplo:] Una empresa de confección, en su plataforma estratégica, define como valores corporativos: 

      .row.justify-content-center        
        .col-lg-3.col-md-4.my-3
          .bg35.p-4.h-100.brad.j(data-aos="fade-left")
            h4(data-aos="fade-left").mb-0.text-white.text-center Calidad
        .col-lg-7.col-md-8.my-3
          .bg36.p-4.h-100.brad(data-aos="fade-right")
            p(data-aos="fade-rihgt").mb-0 Propender por una calidad integral con nuestros colaboradores, clientes, proveedores, con el fin de ser mas competitivos.
        .col-lg-3.col-md-4.my-3
          .bg37.p-4.h-100.brad.j(data-aos="fade-left")
            h4(data-aos="fade-left").mb-0.text-white.text-center Trabajo en Equipo
        .col-lg-7.col-md-8.my-3
          .bg38.p-4.h-100.brad(data-aos="fade-right")
            p(data-aos="fade-rihgt").mb-0 Somos un grupo de personas que buscamos el cumplimiento de las metas en la organización, trabajando con actitud, compromiso, lealtad y confianza.     
        .col-lg-3.col-md-4.my-3
          .bg35.p-4.h-100.brad.j(data-aos="fade-left")
            h4(data-aos="fade-left").mb-0.text-white.text-center Innovación
        .col-lg-7.col-md-8.my-3
          .bg36.p-4.h-100.brad(data-aos="fade-right")
            p(data-aos="fade-rihgt").mb-0 Somos una empresa abierta a los cambios, basados en la investigación, el análisis y la creatividad de nuestros colaboradores, para llegar a cumplir las metas propuestas por la organización. 
        .col-lg-3.col-md-4.my-3
          .bg37.p-4.h-100.brad.j(data-aos="fade-left")
            h4(data-aos="fade-left").mb-0.text-white.text-center Resposabilidad Social
        .col-lg-7.col-md-8.my-3
          .bg38.p-4.h-100.brad(data-aos="fade-right")
            p(data-aos="fade-rihgt").mb-0 La empresa esta comprometida con el uso racional de los recursos naturales, generando productos que mejoren la calidad de vida de nuestros colaboradores, clientes y el cuidado del medio ambiente.   

    p(data-aos="fade-down").mt-5 Las competencias corporativas u organizacionales se plantean teniendo en cuenta el sector económico, el tamaño de la empresa, el número de empleados y los valores corporativos, porque estos son los que van a permitir desarrollar la cultura organizacional.

    p(data-aos="fade-down").mb-5 #[b.t1 En el diccionario de Martha Alles], se encuentra la definición de cada una de estas competencias; como estas competencias corporativas, o llamadas en este diccionario como cardinales, se aplican para todos los puestos de la organización, se debe ubicar cada uno de los cargos en el nivel que corresponda dentro de la empresa. 

    .row.justify-content-start.mb-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Competencias funcionales 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/104.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Siguiendo con la definición que da Martha Alles (2009), una competencia específica son aquellos conocimientos, habilidades y destrezas mediante los cuales cada persona desempeña eficazmente actividades determinadas. Las competencias específicas están relacionadas con las funciones o el cargo a desempeñar dentro de la organización.  

    .titulo-sexto.color-acento-contenido
      h5 Figura 7.
      span Estructura organizacional y competencias funcionales
    img.img-a.img-t(src='@/assets/curso/temas/105.svg', alt='Esta figura representa la estructura organizacional y las competencias funcionales de una organización. Comienza con el gerente general y continúa con el área administrativa y financiera, que tiene a su cargo la gestión del talento humano, la dirección financiera, las compras y la tesorería. También se encuentra el área de producción, que incluye el diseño, el corte, la costura, el empaque y el control de calidad. Por último, está el área de Comercio y Mercado, encargada de la publicidad y la mercadotecnia.') 

    p(data-aos="fade-down").mb-5 Si se revisa, el cargo del gerente tiene unas funciones específicas y este debe tener unas competencias funcionales para la ejecución de dichas funciones, mientras que el jefe de producción debe contar con otras competencias específicas diferentes a la ejecución de su cargo, y si se revisa el director administrativo y financiero, por sus funciones, tendrá otras competencias específicas para desarrollar su cargo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="flip-down")
        .row.justify-content-center.align-items-start.bg6          
          .col-auto.pt-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')
          .col
            p(data-aos="fade-down").mb-0.p-4 #[b ¿Se pueden repetir competencias en los cargos?] Hay competencias funcionales que son requeridas para varios cargos de la organización, pero estos deben tener definido su nivel mínimo de apropiación para cada uno de los cargos. 

    p(data-aos="fade-down") A continuación, se definen algunas competencias de nivel gerencial, las cuales están estipuladas en el Diccionario de Competencias Laborales de Martha Alles. En esta obra, propone algunas competencias, pero se pueden adicionar diferentes a las planteadas. #[b Eso depende de lo construido por la alta gerencia de la empresa y el departamento de gestión humana:]

    h4.t1(data-aos="fade-down") Competencias específicas

    p(data-aos="fade-down").mb-5  En esta obra, propone algunas competencias, pero se pueden adicionar diferentes a las planteadas. Eso depende de lo construido por la alta gerencia de la empresa y el departamento de gestión humana:

    .bg39.mb-5
      .row.justify-content-center.align-items-end.pt-3           
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/106.png', alt='')
        .col-lg-9
          .row.justify-content-center
            .col-lg-12.mb-3        
              .bgw.p-4.h-100.sha(data-aos="flip-down")
                h4.t1(data-aos="fade-down") Gerente de una empresa de confección
                p(data-aos="fade-down") #[b Visión estratégica:] esta competencia hace referencia a la capacidad de direccionamiento de la empresa teniendo en cuenta los cambios del mercado. 
                p(data-aos="fade-down") #[b Conducción de personas:] es la capacidad que tiene una persona para dirigir y distribuir tareas de acuerdo con el rol que cada uno de los colaboradores tiene dentro de la organización. 
                p(data-aos="fade-down") #[b Capacidad y planificación:] tener la capacidad de definir acciones, objetivos y los tiempos necesarios para el cumplimiento de los objetivos. 
                p(data-aos="fade-down").mb-0 #[b Cierre de acuerdos:] se relaciona con la capacidad que tiene una persona para llevar a feliz término los convenios, contratos o alianzas que requiera la empresa para su crecimiento.        
            .col-lg-12.mb-3        
              .bgw.p-4.h-100.sha(data-aos="flip-down")
                h4.t1(data-aos="fade-down") Director área administrativa y financiera
                p(data-aos="fade-down") #[b Compromiso con la rentabilidad:] es un compromiso propio con la organización, donde siempre se debe estar buscando el crecimiento sostenible de la empresa. 
                p(data-aos="fade-down") #[b Pensamiento analítico:] es la capacidad que tiene una persona para comprender una situación teniendo en cuenta todas las partes involucradas. 
                p(data-aos="fade-down").mb-0 #[b Gestión del logro y objetivos:] capacidad para orientar las acciones, actividades y equipo de trabajo al cumplimiento de las metas de la organización, realizando la planeación, generando acciones de control, al igual que mitigación del riesgo. 
            .col-lg-12.mb-3        
              .bgw.p-4.h-100.sha(data-aos="flip-down")
                h4.t1(data-aos="fade-down") Director de producción
                p(data-aos="fade-down") #[b Capacidad de planificación y organización:] se debe tener la capacidad para determinar las prioridades en la ejecución de las actividades, de acuerdo con recursos, acciones, plazos para el logro de los objetivos; adicionalmente, debe tener la capacidad de definir estrategias o acciones de control y/o seguimiento. 
                p(data-aos="fade-down") #[b Productividad:] es la capacidad que tiene la persona para fijar objetivos y cumplirlos exitosamente, de acuerdo con los tiempos estipulados y la calidad requerida para el crecimiento de la organización en el mercado. 
                p(data-aos="fade-down").mb-0 #[b Gestión y logro de objetivos:] capacidad para orientar las acciones, actividades y equipo de trabajo al cumplimiento de las metas de la organización, realizando la planeación, generando acciones de control, al igual que mitigación del riesgo. Conducción de personas: es la capacidad que tiene una persona para dirigir y distribuir tareas de acuerdo con el rol que cada uno de los colaboradores tiene dentro de la organización.

    .row.justify-content-center.align-items-start.mb-4     
      .col-lg-8.my-3.order-1
        p(data-aos="fade-down") Como se puede observar en los ejemplos estipulados, cada uno de los cargos, de acuerdo con su responsabilidad, autoridad o funciones, tiene unas competencias específicas que se requieren para que se pueda llegar a cumplir con las metas de la organización. Recuerde que, para cada una de estas competencias dentro del Diccionario de Martha Alles, se define el nivel mínimo que debe tener esa persona para el cargo, donde A es el nivel más alto y D es el nivel más bajo.
  
        .bg6.p-4(data-aos="fade-down")
          p(data-aos="fade-down").mb-0 En el cargo de Director de Producción, se puede ver que tiene competencias específicas iguales al Gerente, como es la conducción de personas, pero esta puede ser que no esté en el nivel A, como el Gerente, sino en un nivel C o en un nivel B, de acuerdo con lo estipulado por la alta gerencia y el departamento de gestión humana de la organización. 
        
      .col-lg-4.my-3.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/108.png', alt='') 


    .row.justify-content-start.mb-4
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Competencias actitudinales o de gestión

    p(data-aos="fade-down").mb-5 #[b.t1 Martha Alles (2009)] define las competencias de gestión actitudinales como componentes actitudinales de una persona demostrando su capacidad en la solución e interpretación para obtener resultados en forma rápida y eficiente, garantizando el éxito de su gestión desde el cargo desempeñado; exponiendo aquellas actitudes personales donde demuestra la eficiencia propia de un individuo. Estas competencias están relacionadas con la personalidad y los valores de las personas para asumir las diferentes situaciones que se presentan. Como en las competencias específicas, estas competencias están relacionadas con las funciones y características del cargo que desempeña, en este caso, se va a mirar las competencias actitudinales o de gestión de un cargo operativo y de un cargo directivo, para mayor comprensión. 

    .titulo-sexto.color-acento-contenido
      h5 Figura 8.
      span Estructura organizacional y competencias actitudinales o de gestión
    img.img-a.img-t.mb-5(src='@/assets/curso/temas/109.svg', alt='Esta figura representa la estructura organizacional y las competencias actitudinales y de gestión en una empresa, especialmente en el área de costura. Se destaca el papel del área de compras y tesorería, así como del área de producción, ya que son fundamentales para el éxito de la empresa. Estas competencias no se limitan solo a habilidades técnicas, sino que también incluyen la actitud y la capacidad para gestionar eficazmente los recursos humanos y los proceso')    

    h4(data-aos="fade-down").mb-5 Las posibles competencias actitudinales para el director de producción son:   
    .row.justify-content-center.align-items-start.mb-4  
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/110.png', alt='')        
      .col-lg-8.my-3
        TabsA.color-acento-botones.mb-5(data-aos="fade-left")
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Tolerancia al<br> trabajo bajo<br> presión")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Tener la capacidad de alcanzar los objetivos sorteando de la mejor manera con los proveedores, clientes internos y externos, para lograr los objetivos.
 
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Comunicación<br> eficaz:")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es la capacidad que tiene una persona para transmitir  la información de manera clara y oportuna, al igual que escuchar y entender al otro.
 
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Justicia")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es donde se vela por el cumplimiento de los valores de la organización y se trata a todos por igual, siguiendo las políticas y reglamentos.
  
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Liderazgo")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es la capacidad de lograr la confianza de los directivos de la organización y la adecuada conducción del equipo de trabajo.
                     
    h4(data-aos="fade-down").mb-5 Las posibles competencias actitudinales para el personal de costura son:
    .row.justify-content-center.align-items-start.mb-4  
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/111.png', alt='')        
      .col-lg-8.my-3
        TabsA.color-acento-botones.mb-5(data-aos="fade-left")
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Flexibilidad y<br> adaptabilidad")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es la capacidad de las personas para trabajar con eficacia en diferentes situaciones.
 
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Ética y sencillez")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es la capacidad de respetar las políticas organizacionales, generando confianza en el desarrollo de las actividades.
 
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Colaboración")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es la capacidad para brindar apoyo a los miembros del equipo de trabajo apoyando la solución de situaciones problemas.
  
                                               
    h4(data-aos="fade-down").mb-5 Las posibles competencias actitudinales para el personal de compras son:
    .row.justify-content-center.align-items-start.mb-4  
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/112.png', alt='')        
      .col-lg-8.my-3
        TabsA.color-acento-botones(data-aos="fade-left")
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Orientación al<br> cliente <br>interno y <br>externo")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Capacidad para identificar las necesidades del cliente interno y externo; está relacionada con la vocación de servicio que pueda tener una persona.

          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Iniciativa")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es la capacidad de actuar proactivamente frente a situaciones presentes o futuras, evitando problemas; está relacionada con la toma de decisiones.
 
          .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Flexibilidad y<br> adaptabilidad")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Es la capacidad de las personas para trabajar con eficacia en diferentes situaciones.
                                
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
