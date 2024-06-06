<template>
  <div id="navbar">
    <v-app-bar app color="black" flat>
      <v-btn :to="'/'" height="200" :max-width="200" flat @click="drawer = false" id="adrianSicaHome" aria-label="Go to BartDj Home Page">
        <v-img src="/navbar/1.png" :width="200"> </v-img>
      </v-btn>
      <v-spacer> </v-spacer>
      <v-spacer> </v-spacer>
      <v-spacer> </v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" id="adrianSicaItems" aria-label="Navigate tabs for Adrian Sica"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      color="black"
      v-model="drawer"
      location="right"
    >
      <v-list flat>
        <v-list-item
          v-for="item in items"
          :key="item.id"
          :to="item.route"
          active-class="border"
           @click="drawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "BIO",
          route: "bio",
          id: 4,
        },
        {
          title: "OBRAS",
          route: "obras",
          id: 7,
        },
        {
          title: "CATÁLOGO",
          route: "productos",
          id: 5,
        },
        {
          title: "CONTACTO",
          route: "contact",
          id: 3,
        },
        {
          title: "GRACIAS",
          route: "donation",
          id: 3,
        }
      ],
    };
  },
};
</script>

<style scoped>
.row-pointer {
  cursor: pointer;
}
.navbar {
  position:absolute;
  bottom:0;
  left:0;
  right: 0;
}
</style>
