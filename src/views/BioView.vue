<template>
  <div class="content">
    <v-container px-2>
      <v-row>
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
            <v-carousel-item
              :src="img3"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img4"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
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
       text: 'Tomas Bartolomei AKA Barto, its a versatile open format DJ and music producer who merges a variety of musical styles, with a particular emphasis on hip hop, funk, R&B, and house.</br></br>His meticulous track selection considers the venue, audience, and collaborating artists. From creating the incredible vibe at clubs to sets the perfect mood for corporate events, chill gatherings, or bars. His curated sound delivers unforgettable experiences.</br>As a music producer, he also create remixes and mashups specifically tailored for his sets, adding an extra layer of creativity and uniqueness to his performances.</br></br>In addition, Barto serves as the director of DJ Academy, a music school in Buenos Aires. Sharing his knowledge and inspiring the next generation of DJs is a true passion of his.</br></br>Beyond his role as a DJ and educator, Barto is the owner of Foco, an event production company and artist agency. Through FOCO, Barto brings together exceptional talents and crafts extraordinary music events that deeply resonate with audiences.</br></br>Furthermore, Barto embarks on an exciting musical side project called Posadas Experience, where he collaborates alongside his brother Lucas. Together, they harmoniously merge the art of DJing with the captivating sounds of synths and guitars, resulting in a truly unique and enthralling musical experience.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>