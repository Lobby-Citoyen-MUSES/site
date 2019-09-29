<template>
  <div class="wrapper board">
    <div class="section section-pricing-5 mt-10 page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout" style="padding-top:10px;">
          <div
            class="md-layout-item md-size-80 md-small-size-100 readable"
            style="text-align: justify;"
          >
            <h1>Le lobby citoyen est très fier de voir une nouvelle Muse rejoindre ses rangs !</h1>
            <p>Par votre soutien, vous nous donnez les moyens d’agir au quotidien pour changer les choses.</p>
            <p>Par votre présence, vous renforcez l’indépendance et la crédibilité du lobby citoyen.</p>
            <p>Par vos actions, vous nous inspirez pour construire ensemble nos propositions.</p>
            <p>MUSES venant d’ouvrir ses portes, nous vous remercions de faire preuve d’indulgence car notre esprit de co-construction s’applique également aux diverses fonctionnalités que nous vous proposons.</p>
            <p>En tout cas, nous tenons à vous remercier chaleureusement pour votre engagement.</p>

            <p>N’hésitez aucunement à nous contacter à l’adresse <a href="mailto:contact@muses-lobby-citoyen.org" target="_blank" class="white">contact@muses-lobby-citoyen.org</a> !</p>

            <p>L’équipe du Lobby citoyen MUSES</p>

            <p>LE TEMPS EST A L’EVEIL DES CONSCIENCES ! REJOIGNEZ LA (R)EVOLUTION CITOYENNE !</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-pricing-5 section-gray" style="padding-top:40px;">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100">
            <p style="font-size:16px;text-align:center;">
                Pour vous désabonner, contactez nous par email à <a target="_blank" href="mailto:contact@muses-lobby-citoyen.org">contact@muses-lobby-citoyen.org</a></br>
                Nous traîterons votre requête sous 72H ouvrées.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    }
  },
  data() {
    return {
      loading: false
    };
  },
  mounted() {},
  computed: {
    headerStyle() {
      return {
        height: "unset"
      };
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: "#DCDCDC",
        height: "unset"
      };
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
a.white {
  color: white !important;
  text-shadow: white 0px 0px 4px;

  &:hover {
    color: white;
    text-shadow: white 0px 0px 10px;
  }
}

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
