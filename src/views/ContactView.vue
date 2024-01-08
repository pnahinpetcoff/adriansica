<template>
  <div class="content">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'CONTACT'}}</h2>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{'BOOKING & MANAGEMENT'}}</v-card-title> 
                <v-card-subtitle>{{'Foco Agency'}}</v-card-subtitle>
                <v-card-subtitle>{{'Francisco Marquevich'}}</v-card-subtitle>
                <v-card-text v-html="this.textAgency">
                </v-card-text>
                <v-card-actions>
                  <v-btn 
                    id="whatsAppContact"
                    dense 
                    color="dark darken-3" 
                    icon="fa-brands fa-whatsapp"
                    href="https://api.whatsapp.com/send?phone=541161034185" 
                    target="_blank"
                    aria-label="Text with Whats App"
                    >
                  </v-btn>
                  <v-btn 
                    id="eMailContact"
                    dense 
                    color="dark darken-3" 
                    icon="fa-regular fa-envelope"
                    href="mailto:franmarquevich@gmail.com?subject=Interesado%20en%20BartoDJ&cc=focoactiva@gmail.com"
                    aria-label="eMail with Mail">
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{'COURSES & DIRECT FEEDBACK'}}</v-card-title> 
                <v-card-subtitle>{{'DJ Academy'}}</v-card-subtitle>
                <v-card-subtitle>{{'Tomás Bartolomei'}}</v-card-subtitle>
                <v-card-text v-html="this.textAcademy">
                </v-card-text>
                <v-card-actions>
                  <v-btn 
                    id="whatsAppContact"
                    dense 
                    color="dark darken-3" 
                    icon="fa-brands fa-whatsapp"
                    href="https://api.whatsapp.com/send?phone=34635392894" 
                    target="_blank"
                    aria-label="Text with Whats App"
                    >
                  </v-btn>
                  <v-btn 
                    id="eMailContact"
                    dense 
                    color="dark darken-3" 
                    icon="fa-regular fa-envelope"
                    href="mailto:bartolomeitomas@gmail.com?subject=Interesado%20en%20BartoDJ"
                    aria-label="eMail with Mail">
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'ContactView',
  data() {
    return {
      textAgency: 'franmarquevich@gmail.com</br>focoactiva@gmail.com</br>+54 9 11 6103 4185</br>',
      textAcademy: 'bartolomeitomas@gmail.com</br>+34 635 39 28 94</br>'
    };
  },
  components: {
  },
}
</script>

<style>
</style>