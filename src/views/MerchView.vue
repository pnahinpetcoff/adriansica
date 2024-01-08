<template>
  <div class="content">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'MERCH'}}</h2>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img1"
              :max-height="400" 
              cover
            ></v-img>
            <v-card-title>Black Shirt</v-card-title>
            <v-card-subtitle>USD 20</v-card-subtitle>
            <v-card-actions>
              <v-btn dense color="dark darken-3" id="buyMeShirtW"
                href="https://api.whatsapp.com/send?phone=34635392894" 
                target="_blank">BUY ME!</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img2"
              :max-height="400" 
              cover
            ></v-img>
            <v-card-title>White Shirt</v-card-title>
            <v-card-subtitle>USD 20</v-card-subtitle>
            <v-card-actions>
              <v-btn dense 
                color="dark darken-3" 
                id="buyMeShirtB"
                href="https://api.whatsapp.com/send?phone=34635392894" 
                target="_blank">
                BUY ME!</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img3"
              :max-height="400" 
              cover
            ></v-img>
            <v-card-title>Purple Hat</v-card-title>
            <v-card-subtitle>USD 15</v-card-subtitle>
            <v-card-actions>
              <v-btn dense color="dark darken-3" id="buyMeShirtW"
                href="https://api.whatsapp.com/send?phone=34635392894" 
                target="_blank">BUY ME!</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img4"
              :max-height="400" 
              cover
            ></v-img>
            <v-card-title>Cream Hat</v-card-title>
            <v-card-subtitle>USD 15</v-card-subtitle>
            <v-card-actions>
              <v-btn dense 
                color="dark darken-3" 
                id="buyMeShirtB"
                href="https://api.whatsapp.com/send?phone=34635392894" 
                target="_blank">
                BUY ME!</v-btn>
            </v-card-actions>
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
      default: '/merch/1.png'
    },
    img2: {
      type: String,
      default: '/merch/2.png'
    },
    img3: {
      type: String,
      default: '/merch/3.png'
    },
    img4: {
      type: String,
      default: '/merch/4.png'
    }
  },
  name: 'MerchView',
  data() {
    return {
      text: 'Tomas Bartolomei, AKA Barto, es un DJ y productor musical de Buenos Aires, Argentina.</br></br>Entre la tendencia, los clásicos y el underground sus sets hacen bailar a la pista, generando una conexión corporal y emocional con el público.</br></br>Conectado con la música desde pequeño, Barto lo demuestra en sus sets y su selección musical con un abanico muy grande de géneros y posibilidades lo cual lo destacan en su labor.</br></br>Es un DJ  versátil que se adecua al contexto según lugar, artistas involucrados y público presente. Es capaz de demoler una pista en un club de techno o aclimatarnos con un sunset en la playa inolvidable y lleno de emociones.</br></br>Grooves inquietos, melodías pegadizas y letras con mensaje hacen a este artista que fusiona ritmos electrónicos con urbanos como el funk, hip hop,trap,  R&B, house, entre otros.</br></br>Además, Barto es director y profesor de DJ Academy, institución en Buenos Aires, enfocada en la formación de alumnos en el DJing y producción musical y es dueño agencia de artistas  y productora de eventos orientada a la industria de la música llamada FOCO.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>