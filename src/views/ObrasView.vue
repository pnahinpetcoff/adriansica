<template>
  <div class="content">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'OBRAS'}}</h2>
        </v-col>
        <v-col cols="12">
          <v-carousel :cycle="true" color="dark darken-3" hide-delimiters hide-delimiter-background :height="400">
            <v-carousel-item
              :src="img1"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <v-card color="green">
            <v-card-text v-html="this.text"></v-card-text>
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
      default: '/obras/1.png'
    },
    img2: {
      type: String,
      default: '/obras/2.png'
    },
    img3: {
      type: String,
      default: '/obras/3.png'
    },
    img4: {
      type: String,
      default: '/obras/4.png'
    },
    img5: {
      type: String,
      default: '/obras/5.png'
    },
    img6: {
      type: String,
      default: '/obras/6.png'
    },
    img7: {
      type: String,
      default: '/obras/7.png'
    },
    img8: {
      type: String,
      default: '/obras/8.png'
    }
  },
  name: 'ObrasView',
  data() {
    return {
       text: 'Muros de agua a escala con cascadas artificiales y animales de la selva en tamaño real. Fabricado en resina con terminación ShellCoat y resistentes a la interperie. Los trabajos son únicos ya que el artista realiza las mismas desde su comienzo moldeando y tallando en arcilla para luego poder construir la matriz y su posterior fabricación en resina. Todas las obras se hacen con previo aviso y encargo ya que se venden o alquilan como obras únicas.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>