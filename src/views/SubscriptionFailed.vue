<template>
  <div class="wrapper board">
    <div class="section section-pricing-5 mt-10 page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout" style="padding-top:10px;">
          <div
            class="md-layout-item md-size-80 md-small-size-100 readable"
            style="text-align: justify;"
          >
            <h1>Le processus de souscription au superbe Lobby citoyen MUSES a malencontreusement été interrompu.</h1>

            <p>Votre compte ne sera pas débité.</p>

            <p>
              Comme il s’agit vraisemblablement d’une défaillance informatique et peu probablement d’une volonté de votre part, n’hésitez pas à nous contacter de toute urgence à
              <a href="mailto:contact@muses-lobby-citoyen.org" target="_blank">contact@muses-lobby-citoyen.org</a>
            </p>

            <p>Excellente journée à vous,</p>

            <p>L’équipe du Lobby citoyen MUSES</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-pricing-5 section-gray" style="padding-top:40px;">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-60 md-small-size-100"></div>
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
a {
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
