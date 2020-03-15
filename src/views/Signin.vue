<template>
<div class="wrapper board">
    <div class="section page-header header-filter">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <h1
                class="title text-center"
                style="font-variant:small-caps; font-size:40px; padding-bottom: 0"
              >Connexion à votre espace adhérent</h1>
        </div>
      </div>
    </div>

    <div class="main readability">
      <div class="section">
        <div class="container">
            <div>
                <div v-if="this.$route.query.invitation" >
                    toto
                </div>
            <form @submit.prevent="signin">
                <h1>Sign in</h1>
                <label>Email</label>
                <input required v-model="username" type="email" placeholder="votre@adresse.email"/><br/>
                <label>Mot de passe</label>
                <input required v-model="password" type="password" placeholder="*******"/>
                <hr/>
                <button type="submit">Se connecter</button>
            </form>
            </div>
        </div>
      </div>
    </div>
</div>
</template>


<script>
import security from '../security';

export default {
    name: 'signin',
    data () {
        return {
            username: null,
            password: null,
        }
    },
    computed: {
    },
    methods: {    
        signin() {
            var request = new XMLHttpRequest();
            request.open("POST", process.env.VUE_APP_MUSES_API_HOST + "/auth");
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.onload = function(event) {
                const response = event.target;
                switch (response.status) {
                    case (200):
                        const auth = JSON.parse(response.responseText);
                        security.authenticate(auth.access_token);
                        this.$router.push('adherent')
                    break;
                    case (403):
                    case (401):

                    break;  
                    default:
                }
            }.bind(this)

            request.send('grant_type=password&username=' + encodeURIComponent(this.username) + '&password=' + encodeURIComponent(this.password));
        }
    }
}
</script>
