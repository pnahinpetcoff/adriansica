<template>
  <div id="home">
    <v-row>
      <v-col cols="12">
        <v-img
          :src="img1" 
        >
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default ({
  props: {
    img1: {
      type: String,
      default: '/pics/1.png'
    },
  },
  name: "PicsView",
  data() {
    return {
    };
  },
  components: {
  }
});
</script>

<style scoped>
.home{
  width: 100%; 
  height: 100%;
  display: flex;
  right: 0%;
  left: 0%;
}

</style>

