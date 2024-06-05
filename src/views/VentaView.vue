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
          <h2 class="title">{{'CATÁLOGO'}}</h2>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img1" 
              height="360"
            ></v-img>
            <v-card-title>Guacamayos</v-card-title>
            <v-card-text v-html="this.text1"></v-card-text>
            <v-card-actions>    
              <div style="position: absolute; bottom: 0">        
                <v-btn
                  variant="outlined"
                  id="buyMeA"
                  href="https://api.whatsapp.com/send?phone=541156610530&text=Hola, me interesa Guacamayos" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img2" 
              height="360"
            ></v-img>
            <v-card-title>Cascada</v-card-title>
            <v-card-text v-html="this.text2"></v-card-text>
            <v-card-actions>
              <div style="position: absolute; bottom: 0">
                <v-btn
                  variant="outlined"
                  id="buyMeB"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img3" 
              height="360"
            ></v-img>
            <v-card-title>Águila</v-card-title>
            <v-card-text v-html="this.text3"></v-card-text>
            <v-card-actions> 
              <div style="position: absolute; bottom: 0">         
                <v-btn
                  variant="outlined"
                  id="buyMeC"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img13" 
              height="360"
            ></v-img>
            <v-card-title>Buda</v-card-title>
            <v-card-text v-html="this.text13"></v-card-text>
            <v-card-actions>  
              <div style="position: absolute; bottom: 0">           
                <v-btn
                  variant="outlined"
                  id="buyMeM"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3" cols="6">
          <v-card color="black" height="580">
            <v-img
              :src="img5" 
              height="360"
            ></v-img>
            <v-card-title>Buda Grande</v-card-title>
            <v-card-text v-html="this.text5"></v-card-text>
            <v-card-actions>   
              <div style="position: absolute; bottom: 0">            
                <v-btn
                  variant="outlined"
                  id="buyMeE"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3" cols="6">
          <v-card color="black" height="580">
            <v-img
              :src="img6" 
              height="360"
            ></v-img>
            <v-card-title class="text-wrap">Leopardo de las nieves</v-card-title>
            <v-card-text v-html="this.text6"></v-card-text>
            <v-card-actions>
              <div style="position: absolute; bottom: 0">            
                <v-btn
                
                  variant="outlined"
                  id="buyMeF"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img12" 
              height="360"
            ></v-img>
            <v-card-title>Buda</v-card-title>
            <v-card-text v-html="this.text12"></v-card-text>
            <v-card-actions>   
              <div style="position: absolute; bottom: 0">          
                <v-btn
                  variant="outlined"
                  id="buyMeL"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img8" 
              height="360"
            ></v-img>
            <v-card-title>Buda Mediano</v-card-title>
            <v-card-text v-html="this.text8"></v-card-text>
            <v-card-actions>  
              <div style="position: absolute; bottom: 0">           
                <v-btn
                  variant="outlined"
                  id="buyMeH"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img9" 
              height="360"
            ></v-img>
            <v-card-title>Cascada</v-card-title>
            <v-card-text v-html="this.text9"></v-card-text>
            <v-card-actions>   
              <div style="position: absolute; bottom: 0">        
              <v-btn
                  variant="outlined"
                  id="buyMeI"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3">
          <v-card color="black" height="580">
            <v-img
              :src="img10" 
              height="360"
            ></v-img>
            <v-card-title>Cascada</v-card-title>
            <v-card-text v-html="this.text10"></v-card-text>
            <v-card-actions>   
              <div style="position: absolute; bottom: 0">           
                <v-btn
                  variant="outlined"
                  id="buyMeJ"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3" cols="6">
          <v-card color="black" height="580">
            <v-img
              :src="img11" 
              height="360"
            ></v-img>
            <v-card-title>León</v-card-title>
            <v-card-text v-html="this.text11"></v-card-text>
            <v-card-actions>   
              <div style="position: absolute; bottom: 0">           
                <v-btn
                  variant="outlined"
                  id="buyMeK"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3" cols="6">
          <v-card color="black" height="580">
            <v-img
              :src="img7" 
              height="360"
            ></v-img>
            <v-card-title>Ganesha</v-card-title>
            <v-card-text v-html="this.text7"></v-card-text>
            <v-card-actions>   
              <div style="position: absolute; bottom: 0">           
                <v-btn
                  variant="outlined"
                  id="buyMeG"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="12" sm="12" lg="3" cols="6">
          <v-card color="black" height="580">
            <v-img
              :src="img4" 
              height="360"
            ></v-img>
            <v-card-title>Tigre</v-card-title>
            <v-card-text v-html="this.text4"></v-card-text>
            <v-card-actions>
              <div style="position: absolute; bottom: 0">  
                <v-btn
                  variant="outlined"
                  id="buyMeD"
                  href="https://api.whatsapp.com/send?phone=541156610530" 
                  target="_blank">
                  COTIZAR
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    img1: {
      type: String,
      default: '/venta/1.png'
    },
    img2: {
      type: String,
      default: '/venta/2.png'
    },
    img3: {
      type: String,
      default: '/venta/3.png'
    },
    img4: {
      type: String,
      default: '/venta/4.png'
    },
    img5: {
      type: String,
      default: '/venta/5.png'
    },
    img6: {
      type: String,
      default: '/venta/6.png'
    },
    img7: {
      type: String,
      default: '/venta/7.png'
    },
    img8: {
      type: String,
      default: '/venta/8.png'
    },
    img9: {
      type: String,
      default: '/venta/9.png'
    },
    img10: {
      type: String,
      default: '/venta/10.png'
    },
    img11: {
      type: String,
      default: '/venta/11.png'
    },
    img12: {
      type: String,
      default: '/venta/12.png'
    },
    img13: {
      type: String,
      default: '/venta/13.png'
    }
  },
  name: 'ProductosView',
  data() {
    return {
      text1: 'Tamaño real. Fabricado en resina.',
      text2: 'Fabricado en resina. 170cm de alto. 130cm de ancho.',
      text3: 'Fabricado en resina.',
      text4: 'Tamaño real. Fabricado sobre cascada en resina. 180cm de alto. 250cm ancho. Incluye base.',
      text5: 'Muro de agua. Fabricado en resina. 250cm de alto. 210cm de ancho. Incluye luces y bomba de agua.',
      text6: 'Fabricado en resina. 260cm de alto. 150cm de ancho.',
      text7: 'Muro de agua. Fabricado en resina. 230cm de alto. 135cm de ancho. Incluye luces y bomba de agua.',
      text8: 'Muro de agua. Fabricado en resina. 130cm de alto. 130cm de ancho. Incluye luces y bomba de agua.',
      text9: 'Fabricado en resina. 120cm de alto. 300cm de ancho. Incluye luces y bomba de agua.',
      text10: 'Fabricado en resina. 190cm de alto. 300cm de ancho. Incluye luces y bomba de agua.',
      text11: 'Fabricado en resina. 80cm de alto. 160cm de ancho.',
      text12: 'Muro de agua. Fabricado en resina. 240cm de alto. 200cm de ancho. Incluye luces y bomba de agua.',
      text13: 'Muro de agua. Símil piedra personalizado. 250cm de alto. 150cm de ancho.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>