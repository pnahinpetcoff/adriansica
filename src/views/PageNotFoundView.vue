<template>
  <v-container fill-height>
    <v-row dense>
      <v-col cols="12"/>
      <v-col cols="12"/>
      <v-col cols="12" justify="center" align="center">
        <v-img
          alt="Not Found"
          max-height="200"
          contain
          top
          left
          src="../assets/pageNotFound.png"
          transition="scale-transition"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
  components: {},
  data: function() {
    return {}
  }
}
</script>
