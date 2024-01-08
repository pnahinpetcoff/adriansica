<template>
  <div class="content">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'SUPPORT ME'}}</h2>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
            <v-card-text v-html="this.text"></v-card-text>
            <v-card-actions>
              <v-btn
                id="mercadoPagoLink"
                href="https://mpago.la/2j2MPsN"
                target="_blank"
                width="30"
                dense 
                aria-label="Donations with MP"
              >
                <v-img :src="img1" width="30"> </v-img>
              </v-btn>
              <v-btn
                id="payPalLink"
                href="https://www.paypal.com/paypalme/bartodj/2"
                target="_blank"
                dense  
                icon="fa-brands fa-paypal"
                aria-label="Donations with PP"
              >
              </v-btn>
            </v-card-actions>
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
      text: 'Thank you for visiting my website and showing interest in my work as a DJ/Producer. I am passionate about what I do, and I strive to bring joy and excitement to every performance. If you have enjoyed my mixes or music or have been following my journey, here its a link where you can support me and help me to keep moving foward :)'
    };
  },
  components: {
  },
}
</script>

<style>
</style>