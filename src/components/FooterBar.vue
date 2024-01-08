<template>
<div class="bg-black text-center footer">
    <v-row>
      <v-col cols="3">
        <v-btn
          id="soundCloudMedia"
          icon="fab fa-soundcloud"
          variant="plain"
          color="white"
          href="https://soundcloud.com/barto_dj"
          target="_blank"
          aria-label="Go to SoundCloud Media"
        >
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          id="spotifyMedia"
          icon="fab fa-spotify"
          variant="plain"
          color="white"
          href="https://open.spotify.com/user/0exp86bmmkk2i9jeq8wuj3xfh?si=15b43d95cc2f4cda"
          target="_blank"
          aria-label="Go to Spotify Media"
        ></v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          id="youTubeMedia"
          icon="fab fa-youtube"
          variant="plain"
          color="white"
          href="https://www.youtube.com/@barto_dj"
          target="_blank"
          aria-label="Go to Youtube Media"
        ></v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          id="instagramMedia"
          icon="fab fa-instagram"
          variant="plain"
          color="white"
          href="https://www.instagram.com/_bartodj/"
          target="_blank"
          aria-label="Go to Instagram Media"
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