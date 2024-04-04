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
          <h2 class="title">{{'CATÁLOGO'}}</h2>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img1" 
              cover
            ></v-img>
            <v-card-title>Guacamayos</v-card-title>
            <v-card-actions>
              <v-btn dense color="dark darken-3" id="buyMeA"
                href="https://api.whatsapp.com/send?phone=541156610530" 
                target="_blank">
                COTIZAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img2"
              cover
            ></v-img>
            <v-card-title>Muro de Agua</v-card-title>
            <v-card-actions>
              <v-btn dense 
                color="dark darken-3" 
                id="buyMeB"
                href="https://api.whatsapp.com/send?phone=541156610530" 
                target="_blank">
                COTIZAR
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img3"
              cover
            ></v-img>
            <v-card-title>Cascada</v-card-title>
            <v-card-actions>
              <v-btn dense color="dark darken-3" id="buyMeC"
                href="https://api.whatsapp.com/send?phone=541156610530" 
                target="_blank">
                COTIZAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img4"
              cover
            ></v-img>
            <v-card-title>León</v-card-title>
            <v-card-actions>
              <v-btn 
                color="dark darken-3" 
                id="buyMeD"
                href="https://api.whatsapp.com/send?phone=541156610530" 
                target="_blank">
                COTIZAR
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img5"
              cover
            ></v-img>
            <v-card-title>Yaguareté</v-card-title>
            <v-card-subtitle>fabricado en resina</v-card-subtitle>
            <v-card-actions>
              <v-btn 
                color="dark darken-3" 
                id="buyMeE"
                href="https://api.whatsapp.com/send?phone=541156610530" 
                target="_blank">
                COTIZAR
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card color="black">
            <v-img
              :src="img6"
              cover
            ></v-img>
            <v-card-title>Águila</v-card-title>
            <v-card-subtitle>fabricado en resina</v-card-subtitle>
            <v-card-actions>
              <v-btn 
                color="dark darken-3" 
                id="buyMeF"
                href="https://api.whatsapp.com/send?phone=541156610530" 
                target="_blank">
                COTIZAR
                </v-btn>
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
      default: '/venta/1.png'
    },
    img2: {
      type: String,
      default: '/venta/2.png'
    },
    img3: {
      type: String,
      default: '/venta/3.png'
    },
    img4: {
      type: String,
      default: '/venta/4.png'
    },
    img5: {
      type: String,
      default: '/venta/5.png'
    },
    img6: {
      type: String,
      default: '/venta/6.png'
    }
  },
  name: 'ProductosView',
  data() {
    return {
      
    };
  },
  components: {
  },
}
</script>

<style>
</style>