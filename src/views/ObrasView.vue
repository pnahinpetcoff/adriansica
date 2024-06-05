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
            <v-carousel-item
              :src="img2"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img3"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img4"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img5"
            >
            </v-carousel-item>   
            <v-carousel-item
              :src="img6"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img7"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img8"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img9"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img10"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img11"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img12"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img13"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img14"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img15"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img16"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img17"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img18"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img19"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img20"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img21"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img22"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img23"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img24"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img25"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img26"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img27"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img28"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
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
    },
    img9: {
      type: String,
      default: '/obras/9.png'
    },
    img10: {
      type: String,
      default: '/obras/10.png'
    },
    img11: {
      type: String,
      default: '/obras/11.png'
    },
    img12: {
      type: String,
      default: '/obras/12.png'
    },
    img13: {
      type: String,
      default: '/obras/13.png'
    },
    img14: {
      type: String,
      default: '/obras/14.png'
    },
    img15: {
      type: String,
      default: '/obras/15.png'
    },
    img16: {
      type: String,
      default: '/obras/16.png'
    },
    img17: {
      type: String,
      default: '/obras/17.png'
    },
    img18: {
      type: String,
      default: '/obras/18.png'
    },
    img19: {
      type: String,
      default: '/obras/19.png'
    },
    img20: {
      type: String,
      default: '/obras/20.png'
    },
    img21: {
      type: String,
      default: '/obras/21.png'
    },
    img22: {
      type: String,
      default: '/obras/22.png'
    },
    img23: {
      type: String,
      default: '/obras/23.png'
    },
    img24: {
      type: String,
      default: '/obras/24.png'
    },
    img25: {
      type: String,
      default: '/obras/25.png'
    },
    img26: {
      type: String,
      default: '/obras/26.png'
    },
    img27: {
      type: String,
      default: '/obras/27.png'
    },
    img28: {
      type: String,
      default: '/obras/28.png'
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