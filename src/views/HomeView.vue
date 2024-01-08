<template>
      <Pics/>
      <Music/>
      <Bio/>
      <Academy/>
      <Agency/>
      <Merch/>
      <Contact/>
      <Donation/>
</template>

<script>

import Pics from '@/views/PicsView'
import Music from '@/views/MusicView'
import Academy from '@/views/AcademyView'
import Agency from '@/views/AgencyView'
import Bio from '@/views/BioView'
import Merch from '@/views/MerchView'
import Contact from '@/views/ContactView'
import Donation from '@/views/DonationView'

export default {
  name: 'HomeView',
  components: {
    Pics,
    Music,
    Academy,
    Agency,
    Bio,
    Merch,
    Contact,
    Donation
  }
}
</script>

<style>
.content {
  background-color: black;
}
.title {
  color: white;
}
</style>