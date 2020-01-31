<template>
<div class="wrapper board">
    <div class="section page-header mt-6 header-filter">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-100 richtext"
          >
          <h1
                class="title text-center"
                style="font-variant:small-caps; font-size:40px; padding-bottom: 0"
              >Statuts & Mentions légales</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="main readability">
      <div class="section">
        <div class="container">
            <div>
            <form @submit.prevent="signin">
                <h1>Sign in</h1>
                <label>Email</label>
                <input required v-model="username" type="email" placeholder="Email"/>
                <label>Mot de passe</label>
                <input required v-model="password" type="password" placeholder="Mot de passe"/>
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
            request.open("POST", "https://ooq2tndh90.execute-api.eu-west-3.amazonaws.com/preprod/auth");
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.onload = function(event) {
                const response = event.target;
                switch (response.status) {
                    case (200):
                        const auth = JSON.parse(response.responseText);
                        security.authenticate(auth.access_token);
                    break;
                }
            }.bind(this)

            request.send('grant_type=password&username=' + encodeURIComponent(this.username) + '&password=' + encodeURIComponent(this.password));
        }
    }
}
</script>
