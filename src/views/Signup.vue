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
            >Création de votre espace adhérent</h1>
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
          <b>Une erreur est survenue</b> : veuillez réessayer ou nous contacter à <a href="mailto:contact@muses-lobby-citoyen.org" style="color:#FFF !important; text-decoration: underline">contact@muse-lobby-citoyen.org</a>
        </div>
      </div>
    </div>

    <div class="main readability">
      <div class="section">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div class="md-layout-item md-large-size-100 md-small-size-100" style="text-align:center">Afin de finaliser votre adhésion à MUSES, veuillez renseigner les informations suivantes</div>
            <form class="md-layout-item md-large-size-40 md-small-size-100" @submit.prevent="signup">
              <md-field>
                <label for="firstname">Prénom</label>
                <md-input required v-model="firstname" type="text" name="firstname" id="firstname" />
              </md-field>
              <md-field>
                <label for="lastname">Nom</label>
                <md-input required v-model="lastname" type="text" name="firstname" id="lastname" />
              </md-field>
              <md-field>
                <label for="birth">Année de naissance</label>
                <md-input
                  required
                  name="birth_year"
                  v-model="birth"
                  type="number"
                  min="1910"
                  max="2003"
                  step="1"
                  id="birth"
                />
              </md-field>
              <md-field>
                <label for="password">Choisissez un mot de passe (8 caractères minimum)</label>
                <md-input required v-model="password" type="password" id="password" minlength="8" />
              </md-field>

              <md-button type="submit" class="md-primary" style="float:right">Enregistrer</md-button>
            </form>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      error: null,
      firstname: null,
      lastname: null,
      birth: null,
      password: null
    };
  },
  computed: {},
  methods: {
    signup() {
      var request = new XMLHttpRequest();
      request.open(
        "POST",
        process.env.VUE_APP_MUSES_API_HOST +
          "/members?invitation=" +
          this.$route.query.invitation
      );
      request.setRequestHeader(
        "Content-type",
        "application/json;charset=UTF-8"
      );


      request.onreadystatechange = function (oEvent) {  
        if (request.readyState === 4) {  
          if (request.status !== 200) {  
            this.error = true
          }
        }
      };

      request.onload = function(event) {
        const response = event.target;
        switch (response.status) {
          case 201:
            this.$router.push("/connexion?inscription");
            break;
          case 403:
          case 401:
          default:
            this.error = true
        }
      }.bind(this);

      request.send(
        JSON.stringify({
          firstname: this.$data.firstname,
          lastname: this.$data.lastname,
          birth: parseInt(this.$data.birth),
          password: this.$data.password
        })
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
  },
  beforeRouteEnter(to, from, next) {
    // if (!to.query.hasOwnProperty("invitation")) {
    //   next("/");
    // }

    next();
  }
};
</script>