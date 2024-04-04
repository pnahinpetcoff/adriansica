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
          <h2 class="title">{{'AGRADECIMIENTOS'}}</h2>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
            <v-card-text v-html="this.text"></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    img1: {
      type: String,
      default: '/donation/1.png'
    }
  },
  name: 'ContactView',
  data() {
    return {
      text: 'Si llegaste hasta el final de nuestra página web quiere decir que estás interesado en nuestras obras. ¡Gracias por apoyarnos y confiar en nosotros! Un saludo muy especial de tu artista plástico favorito, Adrián Sica.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>