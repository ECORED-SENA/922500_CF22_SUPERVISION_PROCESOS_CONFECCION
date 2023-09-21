<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Estructura de un modelo o proceso de capacitación  
    p(data-aos="fade-down").mb-5 El modelo de capacitación deberá tener como objetivo cumplir una función fundamental dentro de la empresa: formar de manera sistemática a los empleados. Por ende, este proceso debe ser planeado de manera que los empleados puedan capacitarse y adquirir mejores habilidades, conocimientos y aptitudes en sus puestos de trabajo.

    h4.t1(data-aos="fade-down") Diagnóstico situacional de la organización

    p(data-aos="fade-down").pb-5 En esta parte del proceso de capacitación, es necesario realizar un diagnóstico que permita validar las debilidades, oportunidades, fortalezas y amenazas que se tienen con respecto a los conocimientos y habilidades del personal en el entorno en que se encuentran:    

    .bg5
      .row.justify-content-center.mb-4 
        .col-lg-3.col-md-6.my-3(data-aos="fade-right")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/14.png' alt='')
            .tarjeta.bgw.ts.h-100
              .p-4.pt-5
                h4.text-center Debilidad        
                p Se refieren a factores que tienen el potencial de afectar de forma negativa a una organización.  
                img.img-a.img-t.my-4(src='@/assets/curso/temas/18.png', alt='') 
                p.mb-0 #[b.t2 Ejemplo:] Cuando se presentan cambios en las tendencias del mercado y de la moda.


        .col-lg-3.col-md-6.my-3(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/15.png' alt='')
            .tarjeta.bgw.ts.h-100
              .p-4.pt-5
                h4.text-center Amenazas     
                p Se refieren a factores externos convenientes, que una organización puede emplear para su ventaja. Si se emplean eficazmente, las oportunidades tienen el potencial de crear una ventaja a nivel competitivo. 
                img.img-a.img-t.my-4(src='@/assets/curso/temas/19.png', alt='') 
                p.mb-0 #[b.t3 Ejemplo:] Que se abran mercados internacionales para la comercialización de prendas
        .col-lg-3.col-md-6.my-3(data-aos="fade-right")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/16.png' alt='')
            .tarjeta.bgw.ts.h-100
              .p-4.pt-5
                h4.text-center Fortalezas        
                p Hacen referencia a factores internos que impiden a una organización desempeñar un nivel óptimo en su desempeño. Tienen la cualidad de reducir el progreso o bien dan una ventaja a la competencia.  
                img.img-a.img-t.my-4(src='@/assets/curso/temas/20.png', alt='') 
                p.mb-0 #[b.t4 Ejemplo:] La poca experiencia de los operarios en el manejo de máquinas especiales para la confección de ropa interior.

        .col-lg-3.col-md-6.my-3(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/17.png' alt='')
            .tarjeta.bgw.ts.h-100
              .p-4.pt-5
                h4.text-center Oportunidades      
                p Describen en lo que una organización sobresale, permitiendo decisiones que suponen una ventaja a nivel competitivo.  
                img.img-a.img-t.my-4(src='@/assets/curso/temas/21.png', alt='') 
                p.mb-0 #[b.t5 Ejemplo:] Cuando las operarias del área demuestran facilidad para aprender de nuevos procesos y operaciones de confección.

    .row.justify-content-center.align-items-center.mb-4     
      .col-lg-8.my-3.order-1
        .cajon.color-secundario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para validar el entorno interno, se pueden realizar encuestas para niveles operativos, entrevistas a cargos de los niveles tácticos y grupos focales con los directores, gerentes o jefaturas de cada área; también, reuniones con líderes del proceso que puedan conocer las debilidades y fortalezas en conocimientos y habilidades de sus equipos de trabajo. En el caso del entorno externo, se pueden validar fuentes secundarias, como informes de prospectiva laboral, informes de tendencias de procesos, materiales, productos, tecnología y normas técnicas que puedan aplicar al sector, que permitan reconocer las amenazas y oportunidades que tiene la industria, y así determinar las necesidades de formación.         
      .col-lg-4.my-3.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')    

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="flip-down")
        .row.justify-content-center.align-items-start.bg6          
          .col-auto.pt-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')
          .col
            p(data-aos="fade-down").mb-0.p-4 En algunas ocasiones, es complejo identificar las necesidades del personal y también es un riesgo para la empresa invertir en capacitaciones que resulten ineficientes; por ende, se hace necesario utilizar herramientas de diagnóstico, como la matriz DOFA, que a continuación se ejemplifica.  


    .row.justify-content-center.mb-5     
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Matriz DOFA       
      .col-lg-10.p-5.bg7.brad1(data-aos="zoom-in")
        .row.justify-content-center         
          .col-lg-6.bordofa.bordofa1.p-2(data-aos="fade-left")
            .bgdofa1.p-3.h-100
              h4.text-center Debilidades 
              p.mb-0 Los operarios no cuentan con experiencia en manejo de máquinas especiales para la confección de ropa interior.      
          .col-lg-6.bordofa.bordofa2.p-2(data-aos="fade-right")
            .bgdofa2.p-3.h-100
              h4.text-center Fortalezas
              p.mb-0 Las operarias del área demuestran facilidad para aprender de nuevos procesos y operaciones de confección.      
          .col-lg-6.bordofa.bordofa3.p-2(data-aos="fade-left")
            .bgdofa3.p-3.h-100
              h4.text-center Oportunidades
              p.mb-0 Existen innumerables mecanismos de capacitación gratuitos, como el Sena, que permiten tener alianzas con empresas para capacitar al personal.      
          .col-lg-6.bordofa.bordofa4.p-2(data-aos="fade-right")
            .bgdofa4.p-3.h-100
              h4.text-center Amenazas 
              p.mb-0 Los cambios en las tendencias del mercado y de la moda.      

    .row.justify-content-center.mb-4           
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')
      .col-lg-9.my-3
        .bg8.p-4.h-100(data-aos="flip-down")
          h4(data-aos="fade-down") Los pasos para realizar este diagnóstico son:
          ol.lista-ol.fa-ul
            li 
              span.text-bold 1. 
              p.mb-0 Describa todas las debilidades internas claves de la empresa referentes a necesidades de capacitación.
            li 
              span.text-bold 2. 
              p.mb-0 Describa todas las fortalezas internas claves de la empresa referentes a necesidades de capacitación.
            li 
              span.text-bold 3. 
              p.mb-0 Describa todas las oportunidades externas claves de la empresa referentes a necesidades de capacitación.
            li 
              span.text-bold 4. 
              p.mb-0 Detalla todas las amenazas externas claves de la empresa referentes a necesidades de capacitación.
            li 
              span.text-bold 5. 
              p.mb-0 Describa todas las debilidades internas claves de la empresa referentes a necesidades de capacitación.
            li 
              span.text-bold 6. 
              p.mb-0 Analizar las fortalezas internas y oportunidades externas y trazar estrategias FO.
            li 
              span.text-bold 7. 
              p.mb-0 Analizar las debilidades internas y las oportunidades externas y trazar estrategias DO.
            li 
              span.text-bold 8. 
              p.mb-0 Analizar las fortalezas internas y las amenazas externas y trazar las estrategias FA.
            li 
              span.text-bold 9. 
              p.mb-0 Analizar las debilidades internas y las amenazas externas y trazar las estrategias DA.
            li.mb-0 
              span.text-bold 10. 
              p.mb-0 Una vez trazadas todas las estrategias, es hora de ponerlas en práctica y desarrollarlas.            

    h4(data-aos="fade-down").mb-5 Al terminar el análisis DOFA, se procede a realizar el listado de estrategias resultantes, así:

    .row.justify-content-center.mb-5     
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Estrategias 
        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table
            thead.bgh
              tr
                td.text-bold.text-center Estrategias
                td.text-center #[b Fortalezas]
                  br                  
                  br
                  | Las operarias del área demuestran facilidad para aprender de nuevos procesos y operaciones de confección.
                td.text-center #[b Debilidades ]
                  br                  
                  br
                  | Los operarios no cuentan con experiencia en manejo de máquinas especiales para la confección de ropa interior.
            tbody
              tr.bgt1
                td.brt1 #[b Oportunidades ]
                  br                  
                  br
                  | Existen innumerables mecanismos de capacitación gratuitos, como el Sena, que permiten tener alianzas con empresas para capacitar al personal.
                td.brt1 #[b Estrategias FO ]
                  br                  
                  br
                  | Se describen estrategias donde se usa las fortalezas para aprovechar las oportunidades que se presentan. En este caso, un ejemplo podría ser:  
                  br                  
                  br
                  | “Incentivar el aprendizaje autónomo de los operarios en procesos y manejo de máquinas especiales para producir prendas a través de los programas del Sena”.
                td #[b Estrategias DO ]
                  br                  
                  br
                  | Las estrategias DO ayudan a superar y transformar las debilidades a través de las oportunidades que se presentan; también conocidas como estrategias para movilizar o cambiar. En este caso, el ejemplo podría ser: 
                  br                  
                  br
                  | “Capacitar a los operarios en procesos y manejo de máquinas especiales para producir prendas a través del Sena”.
              tr.bgt2
                td.brt1 #[b Amenazas ]
                  br                  
                  br
                  | Los cambios en las tendencias del mercado y de la moda.
                td.brt1 #[b Estrategias FA ]
                  br                  
                  br
                  | En este caso, se aprovechan las fortalezas para evitar o afrontar las amenazas del entorno externo; también conocidas como estrategias para defender. En este caso, se podría proponer: 
                  br                  
                  br
                  | “Preparar a los operarios en la creación de prendas variadas con el fin de evitar bajas de productividad por los cambios en las tendencias”.
                td #[b Estrategias DA ]
                  br                  
                  br
                  | Se refuerzan y transforman las debilidades para evitar las amenazas latentes en el entorno; también conocidas como estrategias para reforzar, pretenden disminuir las debilidades internas. En este caso, podría servir de ejemplo:  
                  br                  
                  br
                  | “Crear equipos de trabajo que permitan compartir experiencias de trabajo sobre procesos y máquinas especiales, con el fin de reforzar sus conocimientos y así disminuir el impacto de los cambios en la tendencia de la moda”.

    .bg9.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center         
        .col-lg-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg', alt='')
        .col-10.my-3
          p(data-aos="fade-down").mb-0 Es así como, terminado el diagnóstico, se podrá tener una idea clara de lo que tendrá como contenido la propuesta de un sistema de formación integral, con acciones de capacitación, entrenamiento y desarrollo.

    .row.justify-content-start.mb-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Desarrollo de planes y programas de capacitación 

    p(data-aos="fade-down").mb-5 Implementar un plan de capacitación es la mejor opción para aumentar habilidades técnicas y comportamiento de trabajo en equipo de los empleados, bien sean operativos o administrativos, integrando las oportunidades de aprendizaje en actividades teórico-prácticas enfocadas a las necesidades de la organización. Se representan de la siguiente manera:

    .row.justify-content-center.mb-4          
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-7.my-3
        .bg10.brad1.h-100.p-5.j(data-aos="fade-down")
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Análisis situacional:] análisis de situaciones específicas donde se requiere intervención de mejora.

            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Detección de necesidades:] priorizar las necesidades de acuerdo con los resultados bajos de los procesos de trabajo desarrollados.

            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Plan y programas de capacitación:] al evidenciar falencias y priorizarlas, se plantean posibles esquemas de capacitación para motivar al personal en el desarrollo de sus actividades.

            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Operación de las acciones de capacitación:] al tener personal capacitado dentro de los equipos de desempeño, esto mejorará notablemente los resultados de trabajo obtenidos.

            li.mb-0 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Evaluación y seguimiento de la capacitación:] la evaluación genera indicadores de trabajo, donde se evidencia si las falencias inicialmente detectadas se han superado o si se debe diseñar otro plan de acción para seguir generando correcciones de trabajo en cada una de las áreas de la compañía.                

    .row.justify-content-start.mb-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Seis pasos para desarrollar un plan de capacitación 

    p(data-aos="fade-down").mb-5 Para desarrollar un plan de capacitación, es necesario entender dos conceptos clave que influyen directamente con el desempeño de las actividades realizadas por el ser humano desde niño: capacidad y habilidad.  

    .row.justify-content-center.mb-4          
      .col-lg-4.my-3
        .bg11.h-100.brad.p-4(data-aos="zoom-in")
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='')
          h4.text-center(data-aos="fade-down") Capacidad
          p.mb-0(data-aos="fade-down") Se refiere al conjunto de condiciones que tenemos las personas, reflejadas en calidades y aptitudes, que sumadas desarrollan un funcionamiento en el desempeño de un cargo.


      .col-lg-4.my-3
        .bg12.h-100.brad.p-4(data-aos="zoom-in")
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
          h4.text-center(data-aos="fade-down") Habilidades
          p.mb-0(data-aos="fade-down") Se refiere a la capacidad de una persona para desempeñar una actividad de manera correcta, con facilidad, muchas veces requiere de una preparación para afianzar los conocimientos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg13.p-4(data-aos="flip-down") 
          .row.justify-content-center.align-items-start
            .col-lg-auto.my-3
              img.img-a.img-t.beat(src='@/assets/curso/temas/30.svg', alt='')
            .col.my-3
              p(data-aos="fade-down").mb-0 La planeación en el desarrollo de capacitaciones inicia al detectar las necesidades de la organización empresarial; luego, se definen los criterios de desarrollo y se evalúan los resultados obtenidos según el desempeño, a continuación se presentan:            

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7
        LineaTiempoD.color-primario
          p(numero="1" titulo="Plan de capacitación") Desarrollar un plan de capacitación que tenga como objetivo la detección de necesidades en función del objetivo de negocio, donde se determinen las capacidades y habilidades que requiere la empresa dentro de una línea de corto, mediano o largo plazo.  
          p(numero="2" titulo="Organización de necesidades") Clasificar, ordenar y determinar las necesidades mediante un diagrama empresarial de los cargos que se desempeñan dentro de equipo de trabajo, donde se proponen objetivos, donde se pueden catalogar por el nivel de importancia que tienen.  
          p(numero="3" titulo="Desarrollo de contenidos") Desarrollar contenidos que determinen las técnicas a emplear, en cuanto a cronogramas de ejecución, tales como fechas en semanas y resultados por meses.  
          p(numero="4" titulo="Secuencia y claridad en actividades") Relacionar las actividades de un programa y el nivel de secuencia, determinando puntos focales donde se debe llevar información de una manera clara, precisa y medible por medio de indicadores de seguimiento. 
          p(numero="5" titulo="Asignación de capacitadores") Cada grupo de personas tendrá un capacitador, donde se desarrollará un esquema de temáticas y esto qué presupuesto le generará a la empresa en cuanto a la disponibilidad de tiempo que las personas no estarán laborando por estar en capacitaciones.  
          p(numero="6" titulo="Evaluación del desempeño") Comparar su desempeño frente al desarrollo, de acuerdo con las necesidades de cada cargo de trabajo y si cada persona está en condiciones óptimas para desarrollar el nuevo nivel de exigencia de los cargos después de la capacitación.  
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')

    p(data-aos="fade-down").mb-5 En el siguiente cuadro, verá un ejemplo de plan de capacitación individual por desempeño; explica cómo desarrollar guías de trabajo para trabajar de manera autónoma de acuerdo con unas necesidades detectadas en la evaluación de desempeño de un trabajador. 

    .row.justify-content-center.mb-5     
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Plan de capacitación individual 
        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table
            thead.bgh1
              tr
                th.w-300 Competencia
                th Conducta
                th Guía
            tbody
              tr
                td.text-bold.text-center.w-300(rowspan='14') AGILIZAR
                td(rowspan='2')
                  | Es proactivo, entrega de manera anticipada los requerimientos, promueve entregas frecuentes para recibir retroalimentación y realizar los ajustes oportunos.
                td Me organizo con eficacia.
              tr
                td Gestiono mi tiempo.
              tr
                td(rowspan='2') Cumple con los compromisos y hace que las cosas sucedan.
                td Las claves de desempeño.
              tr
                td Pequeñas tareas, pequeña procrastinación.
              tr
                td(rowspan='2')
                  | Abandona las prácticas burocráticas y reactivas, entiende que la compañía trabaja de manera ágil y colaborativa.
                td Simplifico procesos, soy ágil.
              tr
                td Reduciendo la burocracia en mi equipo.
              tr
                td(rowspan='2') Acepta sus errores y los convierte en lecciones aprendidas para mejorar.
                td La luz en el Postmortem.
              tr
                td Mis errores me dan futuras soluciones.
              tr
                td(rowspan='2')
                  | Involucra al cliente en sus procesos para garantizar que sus productos o servicios responden a sus solicitudes o necesidades.
                td Pilares de la experiencia.
              tr
                td Empatizo con mi cliente.
              tr
                td(rowspan='2')
                  | Para líderes: motiva a obtener los resultados, traduciendo las estrategias y los objetivos cambiantes en objetivos a corto y mediano plazo.
                td Analizo las causas.
              tr
                td Logramos planes a metas.
              tr
                td(rowspan='2')
                  | Para líderes: desarrolla continuamente a su equipo, plantea nuevos retos para obtener el mayor potencial de su talento humano.
                td Mi equipo es perfecto.
              tr
                td El modelo de trabajo nos hace crecer.

    h4.t1(data-aos="fade-down") Impartir un programa de capacitación

    p(data-aos="fade-down").pb-5 Una capacitación se debe planear anticipadamente, ya que tiene un alto grado de responsabilidad en las actividades a implementar, debe contar con una estructura y una secuencia de temas diseñados para proceder a impartir la capacitación.

    h4.text-center Desarrollo de la capacitación

    .row.justify-content-center.text-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 1
          p.mb-0.j.mt-4 Asignar el capacitador.
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 2
          p.mb-0.j.mt-4 Preparar las temáticas a desarrollar
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 3
          p.mb-0.j.mt-4 Realizar el material didáctico a usar.   

      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 4
          p.mb-0.j.mt-4 Disponer de herramientas tecnológicas a usar.
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 5
          p.mb-0.j.mt-4 Acondicionar el lugar donde se realizarán las capacitaciones.
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 6
          p.mb-0.j.mt-4 Realizar la programación de las personas que asistirán a la capacitación e informar a los jefes de cada sección qué persona no estará y en qué horarios.

      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 7
          p.mb-0.j.mt-4 Supervisar la evolución de la capacitación y la disposición de las personas que están recibiendo la información.
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 8
          p.mb-0.j.mt-4 Desarrollar instrumentos de evaluación.
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.brad1.h-100
          .bgn.img-a 
            span 9
          p.mb-0.j.mt-4 Realizar registros estadísticos frente a asistencia, participación y desempeño en los criterios de evaluación. 
      .col-lg-4.col-md-6.my-3
        .bg14.p-4.py-5.brad1.h-100
          .bgn.img-a 
            span 10
          p.mb-0.j.mt-4 Generar informes para evaluar el comportamiento realizado durante la capacitación.     

    p(data-aos="fade-down").pb-5 Las actividades anteriormente mencionadas son comunes dentro del desarrollo realizado para impartir una capacitación; desde luego, estas varían o se modifican de acuerdo con la empresa y las temáticas a desarrollar. Los criterios en común a evaluar la capacitación son: 

    .row.justify-content-center.mb-4 
      .col-lg-7.my-3
        .bg10.brad1.h-100.p-4.j(data-aos="fade-down")
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 Reacción del grupo de personas a capacitar.
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 El patrón de conducta desarrollado en la capacitación.
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 Resultados en los puestos de trabajo, calificación que dará el jefe inmediato al medir el nivel de desempeño laboral.
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 Instalaciones donde se desarrolló la capacitación.
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 Material de apoyo, material tecnológico y material didáctico usado durante las diferentes fases de la capacitación.
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 Contenido del programa fue suficiente para el tiempo planteado.
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 Nivel de conocimientos y habilidades del instructor.

      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')  

    .row.justify-content-start.mb-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Aspectos importantes de enseñanza y capacitación

    .bg15
      .row.justify-content-center.align-items-start.mb-4           
        .col-lg-8.my-3
          p(data-aos="fade-down").mb-4 El ser humano tiene diferentes caminos a desarrollar en el proceso de aprendizaje y enseñanza, de tal manera que condiciona los aspectos de proceso desarrollados al inicio y a lo largo de la vida. Algunas de las formas son realizando actividades con propósitos repetitivos que considere actos de cambio de conducta mediante la comprensión de situaciones de enseñanza y aprendizaje. 
          .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Las personas tienen conocimientos, habilidades, actitudes y patrones de conductas, lo cual se interpreta como que tenemos ritmos y estilos de aprendizaje de manera diversa; no quiere decir que el aprendizaje sea rápido o lento, todos tenemos habilidades y cualidades que hacen que seamos buenos para unas cosas y con grados de dificultad en otras, pero esto se debe desarrollar de manera didáctica para nivelar los conocimientos dentro de un grupo de personas a capacitar y generar equipos de trabajo con alto desempeño. Los equipos de trabajo pueden tener algunos grados de dificultad en su desempeño, por lo que estos pueden ser apoyados por otros miembros del equipo que tienen la facilidad de desarrollar dichas tareas o labores recomendadas.

          h4(data-aos="fade-down") A continuación, se muestra una lista de actividades y herramientas utilizadas para el desarrollo de una capacitación.        
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')  


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')                 
      .col-lg-7.my-3
        .bg16.brad.p-4.mb-4(data-aos="fade-right")
          ol.lista-ol.fa-ul
            li 
              span.text-bold 1. 
              p.mb-0 Talleres teórico-prácticos.
            li 
              span.text-bold 2. 
              p.mb-0 Descubrir y promover interés por las temáticas.
            li 
              span.text-bold 3. 
              p.mb-0 Detectar habilidades de aprendizaje progresivo.
            li 
              span.text-bold 4. 
              p.mb-0 Transferencia de conocimientos.
            li 
              span.text-bold 5. 
              p.mb-0 Ejercicios variados con diversas técnicas educativas.
            li 
              span.text-bold 6. 
              p.mb-0 Detectar destrezas individuales generando hábitos de aprendizaje por ritmos de trabajo individual.
            li 
              span.text-bold 7. 
              p.mb-0 Actividades motivantes para continuar con investigación.
            li 
              span.text-bold 8. 
              p.mb-0 Trabajo colectivo para reforzar los conocimientos en las personas que no definieron la interpretación de los temas vistos.
            li 
              span.text-bold 9. 
              p.mb-0 Dirigir, guiar el aprendizaje a unos objetivos exitosos.
            li 
              span.text-bold 10. 
              p.mb-0 Fomentar la dinámica de capacitación autodidacta, donde el autocontrol de aprendizaje es importante de manera autónoma. 
        .bg17.brad.p-4(data-aos="fade-left")
          p #[b Se puede decir que los aspectos relevantes para facilitar el aprendizaje son los personales y psicológicos;] la motivación y la participación determinan el desempeño pedagógico, generando seguridad y confianza al sentir dominio del tema.
      
    .row.justify-content-start.mb-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Evaluación

    p(data-aos="fade-down").mb-5 La evaluación de una capacitación es planteada a través de actividades claves, donde se plantean de manera individual y colectiva las necesidades y objetivos en uno de los departamentos de la compañía donde se realizará la implementación de la capacitación.            

    .row.justify-content-center.mb-5     
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Pasos para sistema de evaluación de una capacitación 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')                 

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')
      .col-lg-8.my-3
        .bg6.p-4(data-aos="fade-down")
          p Es importante que los líderes de las compañías velen por promover herramientas de desempeño que aporten a la empresa en la consecución de los objetivos empresariales. A partir de sistemas de evaluación de desempeño pertinentes, se conocen las necesidades, donde muestran el impacto de integrar conocimientos de desempeño.

    .bg18
      .row.justify-content-center.mb-4
        h4.text-center Los resultados obtenidos pueden utilizarse con distintos objetivos:
        .col-lg-4.my-3
          .bg11.h-100.brad.p-4(data-aos="zoom-in")
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt='')
            h4.text-center(data-aos="fade-down") Evaluación del potencial directivo
            p.mb-0(data-aos="fade-down") El objetivo es conseguir una evaluación lo más objetiva posible de las personas que puedan ocupar puestos directivos, con el fin de orientar sus planes de desarrollo profesional en función de las necesidades presentes y futuras de la organización.


        .col-lg-4.my-3
          .bg12.h-100.brad.p-4(data-aos="zoom-in")
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='')
            h4.text-center(data-aos="fade-down") Formación del personal
            p.mb-0(data-aos="fade-down") Cuando se utilizan para facilitar el desarrollo individual de los empleados en la organización, a través de la detección de sus necesidades de formación en relación con el puesto de trabajo actual o futuro.

      p(data-aos="fade-down").mb-5 La capacitación debe iniciar con objetivos claros, analizando las variables que se van a evaluar; es decir, de la definición de las competencias y comportamientos exigidos en los puestos de trabajo a partir del análisis de este. Este aspecto asegura las variables que están siendo planteadas para el desarrollo evaluativo, que estén directamente relacionadas con las exigencias y el contenido del puesto, facilitando el acuerdo entre evaluadores con un mismo marco de referencia y saber exactamente qué observar y qué calificar:

      .tarjeta.tarjeta--gris.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.align-items-center(titulo="")
            .col-8.my-3.order-1
              h4.t1 Definición de objetivos
              p.mb-0 En el diseño e implantación de las definiciones de objetivos, es necesario definir de forma clara y operativa los objetivos o propósitos por los cuales es preciso llevar a cabo el proceso de evaluación, ya que los mismos condicionarán su diseño, las características de los evaluadores que participarán, el tipo de pruebas y ejercicios más adecuados, los costos del sistema de evaluación.
            .col-lg-auto.my-3.order-lg-2
              img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')
          .row.justify-content-center.align-items-center(titulo="")
            .col-8.my-3.order-1
              h4.t1 Diseño de evaluación
              p.mb-0 Desempeñan un aspecto clave, son el punto de inicio donde se dará la descripción del perfil, actualizando la identificación y la definición de los aspectos que directamente estén relacionados, identificando los puntos a evaluar. 
            .col-lg-auto.my-3.order-lg-2
              img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')
          .row.justify-content-center.align-items-center(titulo="")
            .col-8.my-3.order-1
              h4.t1 Proceso de evaluación
              p.mb-0 En la fase de proceso de evaluación, se revisan las observaciones de cada fase del proceso explicativo, participativo y colaborativo en las ejecuciones de cada uno de los participantes, y cómo, asimismo, interactúan de manera participativa en el resultado grupal. 
            .col-lg-auto.my-3.order-lg-2
              img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='')
          .row.justify-content-center.align-items-center(titulo="")
            .col-8.my-3.order-1
              h4.t1 Informe de evaluación
              p.mb-0 Consiste en desarrollar un informe de cada uno de los participantes; este informe se desarrolla teniendo en cuenta los factores cualitativos y cuantitativos, donde se entrega la equivalencia del nivel de puntuación de cada una de las personas que se encuentra en el proceso, señalando los casos y criterios utilizados en la toma del resultado evaluativo. 
            .col-lg-auto.my-3.order-lg-2
              img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='')
          .row.justify-content-center.align-items-center(titulo="")
            .col-8.my-3.order-1
              h4.t1 Retroalimentación
              p.mb-0 En el momento de realizar la retroalimentación, es importante especificar los aspectos en tiempo y recursos, donde se proporciona información constructiva para mejoría en las personas capacitadas. Se deben tener aspectos de acción formativa que permitan reducir las falencias y reforzar los puntos fuertes.
            .col-lg-auto.my-3.order-lg-2
              img.img-a.img-t(src='@/assets/curso/temas/47.png', alt='')    

      .row.justify-content-center.align-items-center.mt-5           
        .col-lg-10
          .tarjeta.color-secundario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.ts
                    p.mb-0 Para ampliar su conocimiento, observe los ejemplos expuestos en el documento anexo denominado "La evaluación de competencias" en las páginas 11, 13 y 19.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1_La_evaluacion_de_competencias.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download             
</template>

<script>
export default {
  name: 'Tema2',
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
