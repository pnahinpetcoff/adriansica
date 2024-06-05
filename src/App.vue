<template>
<div class="ma-3">  
  <v-app full-height>
    <Navbar/>
    <v-row>
      <v-col cols="12">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      </v-col>
      <v-col cols="12" class="text-center" style="flat">
        <v-card rounded="0" elevation="20" color="black" text="SalchiDevs®">
        </v-card>
      </v-col>
      <v-col cols="12"></v-col>
      <v-col cols="12"></v-col>
    </v-row>
    <Footer/>
  </v-app>
  </div>
</template>

<script>

import Navbar from '@/components/NavBar'
import Footer from '@/components/FooterBar'

export default {
  name: 'App',
  components: {
   Navbar,
   Footer
  },

  data: () => ({
    
  })
};
</script>

<style scoped>
</style>