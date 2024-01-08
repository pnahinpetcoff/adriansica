<template>
  <div class="content">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'DJ ACADEMY'}}</h2>
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
      default: '/academy/1.png'
    },
    img2: {
      type: String,
      default: '/academy/2.png'
    },
    img3: {
      type: String,
      default: '/academy/3.png'
    },
    img4: {
      type: String,
      default: '/academy/4.png'
    },
    img5: {
      type: String,
      default: '/academy/5.png'
    },
    img6: {
      type: String,
      default: '/academy/6.png'
    },
    img7: {
      type: String,
      default: '/academy/7.png'
    },
    img8: {
      type: String,
      default: '/academy/8.png'
    }
  },
  name: 'AcademyView',
  data() {
    return {
       text: 'DJ Academy is a reputable educational institution that has been actively involved in the music industry since 2010. Their main objective is to provide comprehensive training to students in the fields of DJing, music production, and artist marketing strategies.</br></br>At the helm of DJ Academy is Barto, who serves as both the director and teacher. His deep-rooted passion for music and the skill of seamlessly blending tracks is evident in his instructional approach. Moreover, Barto frequently collaborates with various artists and actively participates in diverse traveling events. Through these collaborations, he helps to showcase up-and-coming talents within the electronic music and hip hop scenes in Argentina.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>