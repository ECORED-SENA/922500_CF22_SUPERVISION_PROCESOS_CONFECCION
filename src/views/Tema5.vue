<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Proceso organizacional
    p(data-aos="fade-down").mb-5 Una organización es un sistema de lineamientos coordinados por dos o más personas, de manera estructurada, con tareas y responsabilidades definidas que interactúan entre sí. Se representa en cuatro denominadores comunes en las organizaciones:
    .row.justify-content-center.mb-4.text-center 
      .col-lg-3.col-md-6.my-3(data-aos="flip-down")
        .bg26.p-0.h-100
          img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/78.png', alt='')
          .p-4
            p.mb-0(data-aos="fade-down") Coordinación de esfuerzos, donde formula normativas y reglamentos para la organización.
      .col-lg-3.col-md-6.my-3(data-aos="flip-down")
        .bg26.p-0.h-100
          img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')
          .p-4
            p.mb-0(data-aos="fade-down") Objetivo común, que simplifica las actividades a desarrollar para cumplir las actividades propuestas de manera ordenada.
      .col-lg-3.col-md-6.my-3(data-aos="flip-down")
        .bg26.p-0.h-100
          img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='')
          .p-4
            p.mb-0(data-aos="fade-down") División de trabajo, que se refleja en una programación de actividades independientes, pero que deben trabajar en sinergia, unidas por un mismo objetivo.
      .col-lg-3.col-md-6.my-3(data-aos="flip-down")
        .bg26.p-0.h-100
          img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/81.png', alt='')
          .p-4
            p.mb-0(data-aos="fade-down") Jerarquía de autoridad o cadena de órdenes, de acuerdo con el grupo de necesidades del objetivo a cumplir.

    .row.justify-content-start.mb-4
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Organigramas

    p(data-aos="fade-down").mb-5 A continuación, observará representados los tipos de organizaciones:

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/82.png', alt='')     
      .col-lg-7.my-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg27")
          .row.justify-content-center(titulo="Organigrama vertical")
            .col-11
              p Las organizaciones que se representan de manera vertical se definen por representaciones gráficas donde la jerarquía se muestra desde los niveles superiores a los inferiores. También se refiere a la división jerárquica de las funciones entre departamentos.
          .row.justify-content-center(titulo="Organigramas verticales invertidos")
            .col-11
              p Está derivado del organigrama vertical, donde se posibilita incluir más contenido en cada unidad con respecto a cargos y funciones.
          .row.justify-content-center(titulo="Organigrama horizontal")
            .col-11
              p En similitud al organigrama anterior, se dispone a proponer de manera ordenada los niveles jerárquicos en columnas.
          .row.justify-content-center(titulo="Organigramas circulares")
            .col-11
              p El puesto con más alta jerarquía se sitúa en el centro y se crean las unidades separadas, pero funcionan en sinergia. Un ejemplo puede estar en las administraciones públicas, el organigrama suele terminar en el nivel de la dirección general. De lo anterior, es posible tener varias opciones para que las organizaciones puedan tomar un desarrollo de organigrama y complementarlo de acuerdo con la función de sus objetivos.
          .row.justify-content-center(titulo="Organigrama funcional")
            .col-11
              p El organigrama funcional muestra de manera detallada cada departamento, con cada una sus funciones, así que se pueden determinar las responsabilidades. Es bastante útil para la gestión de la organización y la asignación de las actividades desde un plan de trabajo.                                                     

    .row.justify-content-start.mb-4
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            h4.mb-0 Estructuras organizacionales

    p(data-aos="fade-down") Cada empresa funciona de manera diferente -así fabriquen o presten servicios parecidos-, cada compañía adopta un actuar diferente para alcanzar sus objetivos y proyectar sus metas; por lo cual, la forma de operar y planear sus actividades define los puestos y las responsabilidades que tienen las personas de la organización.

    h4(data-aos="fade-down").mt-5.text-center Los tipos de estructuras organizacionales se evidencian de dos maneras:
    .bg28
      .row.justify-content-center.mb-4          
        .col-lg-4.my-3
          .bg11.h-100.brad.p-4(data-aos="zoom-in")
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/83.png', alt='')
            h4.text-center(data-aos="fade-down") Estructura simple:
            p.mb-0(data-aos="fade-down") se representa en organizaciones con personal mínimo, donde se clasifican por núcleos de trabajo, llevando la estrategia de trabajo mediante la supervisión directa; cada parte del trabajo está estandarizado y los métodos están planteados y evaluados para dar cumplimiento a un objetivo.


        .col-lg-4.my-3
          .bg12.h-100.brad.p-4(data-aos="zoom-in")
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/83.png', alt='')
            h4.text-center(data-aos="fade-down") Estructura burocrática:
            p.mb-0(data-aos="fade-down") corresponde a compañías que ya están estructuradas por sus elementos de gestión del trabajo, basados en autoridad, responsabilidades, tareas y procedimientos; están formalizadas mediante una estructura rígida, bajo los lineamientos de reglas y normas en pro del cumplimiento de los métodos de trabajo a desarrollar que culminen las metas proyectadas con éxito.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.ts
                  h4 Estructura organizacional - ¿Qué es? ¿Para qué sirve?
                  p.mb-0 Para ampliar la información, se le invita a ver el video “Estructura organizacional - ¿Qué es? ¿Para qué sirve?” el cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/m3ktM653Xrc" target="_blank")
                    span ver video
                    i.fab.fa-youtube  

    .bg29
      .row.justify-content-start.mb-4.pt-5
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v1.svg', alt='')
            .list__txt
              h4.mb-0 Funciones de los procesos organizacionales     


      .row.justify-content-center.align-items-center.mb-4  
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/86.png', alt='')              
        .col-lg-8.my-3(data-aos="fade-right")
          p(data-aos="fade-down") Las funciones en las empresas contribuyen al buen funcionamiento de la organización, se definen en las actividades a ejecutar y cómo se relacionan entre sí, donde las funciones comerciales satisfacen las necesidades entre mercado, demanda y realidad de la empresa, respondiendo con los productos a fabricar según la capacidad de respuesta. Cada tipo de trabajo tiene unas fases de procesos operativos dentro de una cadena de trabajo, desde los suministros de materias primas, la fabricación, hasta distribución-ventas.
          .bg30.p-4
            p(data-aos="fade-down").mb-0 El término de función es abstracto, pero tiene que coincidir con las políticas de la empresa, por ejemplo, que todas las empresas tienen una representación pública frente a sus productos; pero no es solo el departamento de relaciones corporativas, sino también a nivel general, al que pertenece todo el personal de la organización.
    h4(data-aos="fade-down").mb-5 Existe la clasificación de las funciones organizacionales:
    .bg32
      .row.justify-content-center.align-items-center.mb-5.pt-3           
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.png', alt='')

        .col-lg-8
          .bgw.p-4 
            SlyderE(indicadores="derecha")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t1 Formalización
                  p Es una estructura donde existen varias personas encargadas de llevar funciones explícitas en el cumplimiento de planes de trabajo para el desempeño de metas específicas y precisas.             
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/88.png', alt='') 

              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t1 Objetivos empresariales 
                  p Se dividen en funciones orientadas a objetivos fundamentales de la organización, donde se orienta al apoyo y mejor funcionamiento de metas principales.             
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.png', alt='')    

              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t1 Dimensión directiva 
                  p Hay aspectos directos que son necesarios para la formulación de objetivos en la programación a lograr, con la observación a resultados de manera detallada entre funciones y responsables.             
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')    

              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t1 Difusión de ejecución 
                  p Allí se atribuye gran parte del proceso de ejecución al personal que se encuentra en los mandos medios y al personal operativo de cada uno de los departamentos que realizan tareas de manera directa en el proceso de productos.             
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/91.png', alt='')                                                              
          p(data-aos="fade-down").mt-5.pt-4 Las variables determinantes de la estructura organizacional óptima son aquellas que distribuyen de manera adecuada una estrategia dentro de los procesos de la compañía, y se plantean en tres pilares importantes entre estrategia, procesos y cultura organizacional. De esta manera, la búsqueda de una estructura adecuada entra en proceso de solventar de manera articulada los tres pilares anteriormente mencionados, los cuales deben funcionar con un alto nivel de coherencia. 
      h4(data-aos="fade-down").mb-5.text-center Pilares estructura organizacional    
      .row.justify-content-center.mb-4 
        .col-lg-4.col-md-6.my-3(data-aos="flip-down")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/92.svg' alt='')
            .tarjeta.bg31.ts.h-100
              .p-4
                h4 Estrategia empresarial
                p.mb-0 Enmarca la importancia de las prioridades empresariales de la organización por medio de una lógica estructural, donde el propósito principal es potencializar el canal distribución, mejorando los tiempos fe entrega a los clientes. 
        .col-lg-4.col-md-6.my-3(data-aos="flip-down")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/93.svg' alt='')
            .tarjeta.bg31.ts.h-100
              .p-4
                h4 Procesos de negocio
                p.mb-0 Son procesos encajados e integrados que funcionan de manera articulada, prestando un ágil proceso de fabricación, respondiendo a las garantías de las políticas de valor de la empresa, los clientes.
        .col-lg-4.col-md-6.my-3(data-aos="flip-down")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/94.svg' alt='')
            .tarjeta.bg31.ts.h-100
              .p-4
                h4 Cultura organizacional
                p.mb-0 Es el conjunto de características donde se estructuran de manera organizada unos hábitos de las personas que se integran a la compañía. El término de mejora continua enfatiza que es posible realizar cambios en pro de mejorar hábitos de trabajo, mejorando el control del personal que labora en la organización.                                                           
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.ts
                  h4 La Estructura organizacional 
                  p.mb-0 Para ampliar la información, se le invita a ver el video “La estructura organizacional”, el cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/NpsflJIWNIg" target="_blank")
                    span ver video
                    i.fab.fa-youtube                  
</template>

<script>
export default {
  name: 'Tema5',
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
