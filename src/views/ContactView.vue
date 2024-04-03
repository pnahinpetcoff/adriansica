<template>
  <div class="content">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'CONTACTO'}}</h2>
        </v-col>
        <v-col cols="12">
          <v-card color="green">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{'DIRECTO'}}</v-card-title> 
                <v-card-subtitle>{{'Adrián Sica'}}</v-card-subtitle>
                <v-card-subtitle>{{'Artista Plástico'}}</v-card-subtitle>
                <v-card-text v-html="this.textAcademy">
                </v-card-text>
                <v-card-actions>
                  <v-btn 
                    id="eMailContact"
                    dense 
                    color="dark darken-3" 
                    icon="fa-regular fa-envelope"
                    href="mailto:trabajosespeciales2002@yahoo.com.ar?subject=Interesado%20en%20Obras"
                    aria-label="eMail with Mail">
                  </v-btn>
                  <v-btn 
                    id="whatsAppContact"
                    dense 
                    color="dark darken-3" 
                    icon="fa-brands fa-whatsapp"
                    href="https://api.whatsapp.com/send?phone=5491156610530" 
                    target="_blank"
                    aria-label="Text with Whats App"
                    >
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'ContactView',
  data() {
    return {
      textAcademy: 'trabajosespeciales2002@yahoo.com.ar</br>+54 9 11 5661 0530</br>'
    };
  },
  components: {
  },
}
</script>

<style>
</style>