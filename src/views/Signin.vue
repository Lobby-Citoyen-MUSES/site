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
            >Connexion à votre espace adhérent</h1>
          </div>
        </div>
      </div>
    </div>

    <div v-if="this.$route.query.invitation">
      <div class="alert alert-info">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="event => removeNotify(event,'alert-info')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>Votre compte est activé</b> : veuillez vous connecter
        </div>
      </div>
    </div>

    <div v-if="error">
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
          <b>Erreur</b> : l'email ou le mot de passe est invalide
        </div>
      </div>
    </div>

    <div class="main readability" style="height:50vh">
      <div class="section">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <form
              @submit.prevent="signin"
              class="md-layout-item md-large-size-40 md-small-size-100"
            >
              <md-field>
                <label>Adresse email</label>
                <md-input required v-model="username" type="email" />
              </md-field>

              <md-field>
                <label>Mot de passe</label>
                <md-input required v-model="password" type="password" />
              </md-field>

              <md-button class="md-primary" style="float:right" type="submit">Se connecter</md-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import security from "../security";

export default {
  name: "signin",
  data() {
    return {
      error: null,
      username: null,
      password: null
    };
  },
  computed: {},
  methods: {
    signin() {
      this.error = null;
      var request = new XMLHttpRequest();
      request.open("POST", process.env.VUE_APP_MUSES_API_HOST + "/auth");
      request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      request.onload = function(event) {
        const response = event.target;
        switch (response.status) {
          case 200:
            const auth = JSON.parse(response.responseText);
            security.authenticate(auth.access_token);
            this.$router.push("adherent");
            break;
          case 403:
          case 401:
            this.error = "l'email ou le mot de passe est invalide";
            break;
          default:
            this.error = "Une erreur est survenue, merci de réessayer ou de nous contacter";
        }
      }.bind(this);

      request.send(
        "grant_type=password&username=" +
          encodeURIComponent(this.username) +
          "&password=" +
          encodeURIComponent(this.password)
      );
    },

    removeNotify(e, notifyClass) {
      var target = e.target;
      while (target.className.indexOf(notifyClass) === -1) {
        target = target.parentNode;
      }
      this.error = null;
      return target.parentNode.removeChild(target);
    }
  }
};
</script>

<style lang="scss">
.alert {
  box-shadow: 0 none;
  margin-bottom: 0;
  border-radius: 0;
}

.alert.alert-info {
  border-radius: 0;
}
</style>
