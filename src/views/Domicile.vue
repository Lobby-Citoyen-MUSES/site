<template>
  <div class="wrapper board">
   <div
      class="section page-header header-filter"
      style="background-color: rgb(220, 220, 220); height: unset;"
    >
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-100 richtext"
            style="padding-top:80px"
          >
            <h1
              class="title text-center"
              style="font-variant:small-caps; font-size:40px; padding-bottom: 0; padding-top:0"
            >Compléter vos informations fiscales</h1>
          </div>
        </div>
      </div>
    </div>

    <div v-if="error" id="notifications">
      <div class="alert alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="event => removeNotify(event,'alert-danger')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>warning</md-icon>
          </div>
          <b>Une erreur est survenue</b> : veuillez réessayer ou nous contacter à <a href="mailto:contact@muses-lobby-citoyen.org" style="color:#FFF !important; text-decoration: underline">contact@muses-lobby-citoyen.org</a>
        </div>
      </div>
    </div>

    <div class="main readability">
      <div class="section">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div
              class="md-layout-item md-large-size-100 md-small-size-100"
              style="text-align:center"
            >Pour consulter, télécharger ou imprimer votre reçu fiscal, veuillez renseigner les informations suivantes</div>
            <form
              class="md-layout-item md-large-size-40 md-small-size-100"
              @submit.prevent="domicile"
            >
              <md-field>
                <label for="addressLine1">Adresse (Numéro et libellé de la voie)</label>
                <md-input type="text" v-model="address.line1" name="addressStreetLine1" id="addressLine1" />
              </md-field>
              <md-field>
                <label for="addressLine2">Complément d'adresse</label>
                <md-input type="text" v-model="address.line2" name="addressStreetLine2" id="addressLine2" />
              </md-field>
              <md-field>
                <label for="addressZip">Code postal</label>
                <md-input type="text" v-model="address.zip" name="addressZip" id="addressZip" />
              </md-field>
              <md-field>
                <label for="addressCity">Ville, localité</label>
                <md-input type="text" v-model="address.locality" name="addressLocality" id="addressLocality" />
              </md-field>

              <md-button class="md-primary" type="submit">Enregistrer</md-button>
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
  name: "Domicile",
  data() {
    return {
      error: null,
      address: {
        line1: null,
        line2: null,
        zip: null,
        locality: null
      }
    };
  },
  computed: {},
  methods: {
    domicile() {
      var request = new XMLHttpRequest();
      request.open("POST", process.env.VUE_APP_MUSES_API_HOST + "/domicile");
      request.setRequestHeader(
        "Content-type",
        "application/json;charset=UTF-8"
      );
      request.setRequestHeader("Authorization", "Bearer 1234567890" + Security.jwt);

      request.onerror = function(event) {
        this.error = true;
      }.bind(this);

      request.onload = function(event) {
        const response = event.target;
        switch (response.status) {
          case 201:
            this.$router.push("/adherent");
            break;
          case 403:
          case 401:
          default:
            this.error = true;
        }
      }.bind(this);

      request.send(JSON.stringify(this.$data.address));
    },
    
    removeNotify(e, notifyClass) {
      var target = e.target;
      while (target.className.indexOf(notifyClass) === -1) {
        target = target.parentNode;
      }
      this.error = null;
      return target.parentNode.removeChild(target);
    }
  },
  created() {}
};
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
