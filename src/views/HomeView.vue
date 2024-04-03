<template>
      <Pics/>
      <Bio/>
      <Obras/>
      <Venta/>
      <Contact/>
      <Donation/>
</template>

<script>

import Pics from '@/views/PicsView'
import Obras from '@/views/ObrasView'
import Bio from '@/views/BioView'
import Venta from '@/views/VentaView'
import Contact from '@/views/ContactView'
import Donation from '@/views/DonationView'

export default {
  name: 'HomeView',
  components: {
    Pics,
    Obras,
    Bio,
    Venta,
    Contact,
    Donation
  }
}
</script>

<style>
.content {
  background-color: green;
}
.title {
  color: white;
}
</style>