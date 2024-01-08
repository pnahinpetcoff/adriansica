<template>
  <div class="content">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'MUSIC'}}</h2>
        </v-col>
        <v-col cols="12">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/BURSwutSz9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </v-col>
        <v-col cols="12">
          <iframe title="SoundCloud" width="100%" height="200" scrolling="no" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1597418329&color=000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
          <div style="font-size: 10px; color: #000000;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
            <a rel="preconnect" href="https://soundcloud.com/barto_dj" title="BARTO" target="_blank" style="color: #FFFFFF; text-decoration: none;">BARTO
            </a> · 
            <a rel="preconnect" href="https://soundcloud.com/barto_dj/sets/remix-mashups" title="Remix &amp; Mashups" target="_blank" style="color: #FFFFFF; text-decoration: none;">Remix &amp; Mashups
            </a>
          </div>
        </v-col>
        <v-col cols="12">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/8HszxJwbtes?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </v-col>
        <v-col cols="12">
          <iframe width="100%" height="200" src="https://youtube.com/embed/Vc3eaMOrbWE?start=0" title="YouTube Short" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'MusicView',
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