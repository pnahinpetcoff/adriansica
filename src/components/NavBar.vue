<template>
  <div id="navbar">
    <v-app-bar app color="black">
      <v-btn :to="'/'" height="200" :max-width="200" flat @click="drawer = false" id="bartoDjHome" aria-label="Go to BartDj Home Page">
        <v-img src="/navbar/1.png" :width="200"> </v-img>
      </v-btn>
      <v-spacer> </v-spacer>
      <v-spacer> </v-spacer>
      <v-spacer> </v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" id="bartoDjItems" aria-label="Navigate tabs for BartoDj"></v-app-bar-nav-icon>
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
          title: "MUSIC",
          route: "music",
          id: 6,
        },
        {
          title: "BIO",
          route: "bio",
          id: 4,
        },
        {
          title: "DJ ACADEMY",
          route: "academy",
          id: 7,
        },
        {
          title: "FOCO AGENCY",
          route: "agency",
          id: 8,
        },
        {
          title: "MERCH",
          route: "merch",
          id: 5,
        },
        {
          title: "CONTACT",
          route: "contact",
          id: 3,
        },
        {
          title: "SUPPORT ME",
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
