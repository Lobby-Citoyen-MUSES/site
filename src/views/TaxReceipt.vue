<template>
  <div class="receipt">
    <h1>
      Reçu fiscal pour don
      <br /><small>(Article 200 du Code général des Impôts)</small>
    </h1>
    <div v-if="receipt">
      <p class="address">
        Lobby Citoyen MUSES<br/> 
        (Pour un Modèle Universel Social Emancipateur et Solidaire)
        <br />65 rue du chemin vert
        <br />75011 Paris
        <br />
      </p>

      <p class="address" style="text-align:right">
        {{receipt.donator.firstname}} {{receipt.donator.lastname}}
        <br />
        <span v-if="receipt.donator.address.line1">
          {{receipt.donator.address.line1}}
          <br />
        </span>
        <span v-if="receipt.donator.address.line2">
          {{receipt.donator.address.line2}}
          <br />
        </span>
        {{receipt.donator.address.zip}} {{receipt.donator.address.locality}}
      </p>

      <h2>Reçu numéro: {{receipt.id}}</h2>

      <p>Organisme d’intérêt général, MUSES se donne pour mission d’agir comme un trait d’union entre les citoyens et les décideurs politiques, institutionnels et économiques. Ce Lobby citoyen entend contribuer à la lutte contre les inégalités et concourir au développement durable dans ses dimensions sociale, environnementale et économique notamment à travers l’émergence de propositions concrètes au service d’un modèle de société plus juste, plus solidaire et plus soutenable.</p>
      <p>MUSES certifie sur l’honneur que les dons et versements qu’il reçoit ouvrent droit à la réduction d’impôts prévue à l’article 200 du Code général des Impôts, ce qui permet à tout donateur particulier de déduire 66% du montant dans la limite de 20% du revenu imposable.</p>

      <p>
        Pour l’année 2019, le Lobby citoyen MUSES reconnait d’avoir reçu de ce donateur la somme totale de ***{{ receipt.total }}*** euros :
        <br /><br />
        <span v-for="(donation, index) in receipt.donations" v-bind:key="index">
          Le {{donation.date.getDate()}} {{new Intl.DateTimeFormat('fr-FR', {month: 'long'}).format(donation.date)}} {{donation.date.getFullYear()}}, ***{{ donation.amount }} €***, en virement bancaire
          <br />
        </span>
      </p>

      <div class="signature">
        <p>Paris, le 1 janvier 2020</p>
        <p>Ludovic FLEURY<br/>
        Trésorier
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Security from "../security";

export default {
  name: "RecuFiscal",
  data() {
    return {
      receipt: null
    };
  },
  computed: {},
  methods: {},
  created() {
    var request = new XMLHttpRequest();
    request.open("GET", process.env.VUE_APP_MUSES_API_HOST + "/tax-receipts");
    request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    request.setRequestHeader("Authorization", "Bearer " + Security.jwt);
    request.onload = function(event) {
      const response = event.target;
      switch (response.status) {
        case 200:
          let result = JSON.parse(response.response);

          let total = 0;
          let donations = [];

          result.donations.forEach(donation => {
            total += donation.amount;
            donations.push({
              date: new Date(donation.date),
              amount: (donation.amount / 100).toFixed(2)
            });
          });

          result.donations = donations;
          result.total = (total / 100).toFixed(2);

          this.receipt = result;
          break;
        case 403:
        case 401:
          break;
        case 409:
          // member didn't domicile yet
          this.$router.push('/adherent/domiciliation-fiscale');
          break;
        case 404:
          // no invoice found for this year
          this.$router.push('/adherent');
          break;
        default:
      }
    }.bind(this);

    request.send();
  }
};
</script>
<style lang="scss" scoped>
* {
  all: initial;
}  

body {
  background-color: #FFFFFF !important;
  letter-spacing: unset;
  font-size: 1rem;
  line-height: 1.5em;
}

h1, h2, p, div {
  display:block;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align:center;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

p {
  margin-top: 15px;
  margin-bottom: 15px;
}

.receipt {
    display: block;
    margin: 20px;
}

.address {
  margin-top: 40px;
  margin-bottom: 40px;
}

.signature {
  margin-top: 50px;
  p { 
    text-align: right;
  }
}

</style>
