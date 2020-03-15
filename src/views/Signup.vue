<template>
  <div class="wrapper advocacy">
    <parallax class="section page-header">
      <div class="container">
        <div class="md-layout">Création de votre compte d'adhérent MUSES</div>
      </div>
    </parallax>

    <div class="main readability">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div>
              Afin de finaliser votre adhésion à MUSES, veuillez renseigner les informations suivantes
              <form @submit.prevent="signup">
                <label for="firstname">Prénom</label>
                <input required v-model="firstname" type="text" id="firstname" />

                <label for="lastname">Nom</label>
                <input required v-model="lastname" type="text" id="lastname" />

                <label for="birth">Année de naissance</label>
                <input required v-model="birth" type="number" min="1910" max="2003" step="1" id="birth" />

                <label for="password">Choisissez un mot de passe (8 caractères minimum)</label>
                <input required v-model="password" type="password" id="password" />

                <button type="submit">Enregistrer</button>
              </form>
            </div>
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
        process.env.VUE_APP_MUSES_API_HOST + "/members?invitation=" + this.$route.query.invitation
      );
      request.setRequestHeader(
        "Content-type",
        "application/json;charset=UTF-8"
      );
      request.onload = function(event) {
        const response = event.target;
        switch (response.status) {
          case 201:
            this.$router.push("/connexion?inscription");
            break;
          case 403:
          case 401:
            break;
          default:
        }
      }.bind(this);

      request.send(JSON.stringify({
        firstname: this.$data.firstname,
        lastname: this.$data.lastname,
        birth: parseInt(this.$data.birth),
        password: this.$data.password
      }));
    }
  },
  beforeRouteEnter (to, from, next) {
    if (!to.query.hasOwnProperty('invitation')) {
      next('/');
    }

    next();
  },
};
</script>