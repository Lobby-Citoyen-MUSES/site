<template>
  <div class="wrapper advocacy">
    <parallax class="section page-header">
      <div class="container">
        <div class="md-layout">
          
        </div>
      </div>
    </parallax>

    <div class="main readability">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div>Votre reçu fiscal, attestation de don</div>
            <form @submit.prevent="domicile">
              <label for="addressLine1">Adresse (Numéro et libellé de la voie)</label>
              <input type="text" v-model="address.line1" id="addressLine1" />

              <label for="addressLine2">Complément d'adresse</label>
              <input type="text" v-model="address.line2" id="addressLine2" />

              <label for="addressZip">Code postal</label>
              <input type="text" v-model="address.zip" id="addressZip" />

              <label for="addressCity">Ville, localité</label>
              <input type="text" v-model="address.locality" id="addressLocality" />

              <button type="submit">Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Security from "../security";

export default {
    name: 'Adherent',
    data () {
        return {
            address: {
              line1: null,
              line2: null,
              zip: null,
              locality: null
            }
        }
    },
    computed: {
       
    },
    methods: {    
       domicile() {
        var request = new XMLHttpRequest();
        request.open(
          "POST",
          process.env.VUE_APP_MUSES_API_HOST + "/domicile"
        );
        request.setRequestHeader(
          "Content-type",
          "application/json;charset=UTF-8"
        );
        request.setRequestHeader(
          "Authorization",
          "Bearer " + Security.jwt
        );
        request.onload = function(event) {
          const response = event.target;
          switch (response.status) {
            case 201:
              this.$router.push("/adherent");
              break;
            case 403:
            case 401:
              break;
            default:
          }
        }.bind(this);

        request.send(JSON.stringify(this.$data.address));
      }
    },
    created () {
        
    }
}
</script>


<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
