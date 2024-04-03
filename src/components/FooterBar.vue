<template>
<div class="bg-green text-center footer">
    <v-row>
      <v-col cols="4">
        <v-btn
          id="youTubeMedia"
          icon="fab fa-youtube"
          variant="plain"
          color="white"
          href="https://www.youtube.com/@adriansica6110"
          target="_blank"
          aria-label="Go to Youtube Media"
        ></v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          id="instagramMedia"
          icon="fab fa-instagram"
          variant="plain"
          color="white"
          href="https://www.instagram.com/adrian_sica/"
          target="_blank"
          aria-label="Go to Instagram Media"
        ></v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          id="instagramMedia"
          icon="fab fa-facebook"
          variant="plain"
          color="white"
          href="https://www.facebook.com/profile.php?id=100056421277902"
          target="_blank"
          aria-label="Go to Facebook Media"
        ></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  position:fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 50px;
}
</style>