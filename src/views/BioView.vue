<template>
  <div class="content">
    <v-container px-2>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'BIO'}}</h2>
        </v-col>
        <v-col cols="12">
          <v-carousel :cycle="true" color="dark darken-3" hide-delimiters hide-delimiter-background :height="400">
            <v-carousel-item
              :src="img1"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img2"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <v-card color="green">
            <v-card-text v-html="this.text">
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    img1: {
      type: String,
      default: '/bio/1.png'
    },
    img2: {
      type: String,
      default: '/bio/2.png'
    },
    img3: {
      type: String,
      default: '/bio/3.png'
    },
    img4: {
      type: String,
      default: '/bio/4.png'
    }
  },
  name: 'BioView',
  data() {
    return {
       text: 'Adrián Amadeo Sica es un artista plástico nacido en el año 1969 en la provincia de Buenos Aires, Argentina. Es hijo de padre italiano y madre sirio-libanés, quien también era artista plástica. Todas las obras del artista comienzan con la reformación de un auto coupé Chevy 1972 donde experimenta su arte con materiales de resina y fibra de vidrio. Una vez finalizada, dicha obra gana el primer premio en la "Exposición del Automóvil" de La Rural compitiendo con autos de las marcas Ferrari, Lamborghini y clásicos americanos entre otros. De esta manera, el artista, da rienda suelta realizando distintas obras de arte de decoración para exterior o interior como animales de gran realismo en escala 1:1. Además se destacan sus cascadas artificiales, murales y muros de agua. Cabe destacar que todas estas obras son exclusivas de nuestro artista.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>