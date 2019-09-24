<template>
  <div class="wrapper">
    <div class="section section-pricing-5 section-gray" style="padding-bottom:0;">
      <div class="container">
        <h1 class="title" style="padding:40px 0 20px 0">Don</h1>
        <div class="md-layout">

          <div class="md-layout-item md-size-60 md-small-size-100" style="text-align: justify">
            <p
              style="font-size:1.1rem;"
            >
            Ponctuel ou régulier, votre don représente une aide précieuse pour contribuer à ce qu’émerge un modèle plus inclusif, juste et respectueux de l’Homme et de son environnement. 
            </p>
            <p
              style="font-size:1.1rem;"
            >
            Ce don vous donne droit à une réduction d’impôt sur le revenu à hauteur de 66 % de son montant (dans la limite de 20 % de votre revenu net imposable) ou à hauteur de 60 % de votre impôt sur les sociétés. Les coupons fiscaux sont délivrés une fois par an au titulaire du moyen de paiement, sous réserve que le montant de vos dons annuels soit supérieur ou égal à 10 €. 
            </p>
          </div>

          <div class="md-layout-item md-size-40 md-small-hide" style="text-align: center;">
            <div class="icon icon-rose" style="margin: 0 auto; ">
              <i
                class="material-icons"
                style="font-size: 7.5em; display: inline-block; border-radius: 100%; border: 4px solid #e91e63; text-align: center; position: relative; padding: 15px;"
              >favorite_border</i>
            </div>
          </div>
        </div>
      </div>
    </div>    

     <div class="section section-pricing-5 section-gray">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-small-size-100">
            <p style="font-size:1.1rem;">
              Avec le Lobby citoyen MUSES vous avez l’assurance d’un don utilisé efficacement pour une cause juste.
            </p>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
        backgroundPosition: "right 35% bottom 40%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };
    }
  },
  methods: {
  }
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
