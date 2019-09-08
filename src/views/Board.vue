<template>
  <div class="wrapper board">
    <div class="section page-header mt-3 header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div class="md-layout-item md-large-size-100">
            <h1>Le Conseil d'administration</h1>
          </div>

          <div class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-100">
            <p class="introduction">
              Le Conseil d’administration est un organe décisionnel,
              chargé de déterminer les priorités du Lobby citoyen MUSES.
              Chargé de valider la stratégie la plus pertinente,
              il est composé de personnalités de premier plan aux profils professionnels d’une grande diversité,
              ce qui constitue une vraie richesse.
              Ce Conseil d’administration s’appuie sur l’action quotidienne du Directeur général, Pascal PAVAGEAU
              ainsi que de l’ensemble de son équipe, afin de veiller à la gestion pratique de la structure ainsi qu’à la cohérence et à la qualité des travaux.
            </p>
          </div>
        </div>

        <div class="md-layout md-alignment-center" style="align-items: stretch">
          <div class="md-layout-item md-large-size-100">
            <h2>Le collège des personnes qualifiées</h2>
          </div>

          <div
            v-for="member in members"
            v-bind:key="member.id"
            class="person md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-90"
          >
            <div class="md-card md-card-profile md-theme-default">
              <div class="md-card-header md-card-header-image">
                <a class="portrait">
                  <img v-bind:src="member.square.url" v-bind:alt="member.fullname" class="img" />
                </a>
                <div class="colored-shadow" :style="profileBackground(member)"></div>
              </div>

              <div class="md-card-content">
                <h4 class="card-title">{{ member.fullname }}</h4>
                <h6 class="card-category text-gray">{{ member.position }}</h6>
                <p class="card-description">{{ member.occupation}}</p>
              </div>

              <div class="md-card-actions md-alignment-right">
                <span class="md-button md-just-icon" style="visibility:hidden" />

                <a
                  v-if="member.twitter.url"
                  v-bind:href="member.twitter.url"
                  target="_blank"
                  class="md-button md-twitter md-just-icon md-simple md-theme-default"
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="fab fa-twitter"></i>
                    </div>
                  </div>
                </a>

                <a
                  v-if="member.linkedin.url"
                  v-bind:href="member.linkedin.url"
                  target="_blank"
                  class="md-button md-link md-just-icon md-simple md-theme-default"
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="fab fa-linkedin"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="md-layout md-alignment-center" style="align-items: stretch">
          <div class="md-layout-item md-large-size-100">
            <h2>Le collège des adhérents</h2>
          </div>

          <div
            v-for="member in members"
            v-bind:key="member.id"
            class="person md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-90"
          >
            <div class="md-card md-card-profile md-theme-default">
              <div class="md-card-header md-card-header-image">
                <a class="portrait">
                  <img v-bind:src="member.square.url" v-bind:alt="member.fullname" class="img" />
                </a>
                <div class="colored-shadow" :style="profileBackground(member)"></div>
              </div>

              <div class="md-card-content">
                <h4 class="card-title">{{ member.fullname }}</h4>
                <h6 class="card-category text-gray">{{ member.position }}</h6>
                <p class="card-description">{{ member.occupation}}</p>
              </div>

              <div class="md-card-actions md-alignment-right">
                <span class="md-button md-just-icon" style="visibility:hidden" />

                <a
                  v-if="member.twitter.url"
                  v-bind:href="member.twitter.url"
                  target="_blank"
                  class="md-button md-twitter md-just-icon md-simple md-theme-default"
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="fab fa-twitter"></i>
                    </div>
                  </div>
                </a>

                <a
                  v-if="member.linkedin.url"
                  v-bind:href="member.linkedin.url"
                  target="_blank"
                  class="md-button md-link md-just-icon md-simple md-theme-default"
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="fab fa-linkedin"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="md-layout md-alignment-center" style="align-items: stretch">
          <div class="md-layout-item md-large-size-100">
            <h2>Le collège des entreprises</h2>
          </div>

          <div
            v-for="member in members"
            v-bind:key="member.id"
            class="person md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-90"
          >
            <div class="md-card md-card-profile md-theme-default">
              <div class="md-card-header md-card-header-image">
                <a class="portrait">
                  <img v-bind:src="member.square.url" v-bind:alt="member.fullname" class="img" />
                </a>
                <div class="colored-shadow" :style="profileBackground(member)"></div>
              </div>

              <div class="md-card-content">
                <h4 class="card-title">{{ member.fullname }}</h4>
                <h6 class="card-category text-gray">{{ member.position }}</h6>
                <p class="card-description">{{ member.occupation}}</p>
              </div>

              <div class="md-card-actions md-alignment-right">
                <span class="md-button md-just-icon" style="visibility:hidden" />

                <a
                  v-if="member.twitter.url"
                  v-bind:href="member.twitter.url"
                  target="_blank"
                  class="md-button md-twitter md-just-icon md-simple md-theme-default"
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="fab fa-twitter"></i>
                    </div>
                  </div>
                </a>

                <a
                  v-if="member.linkedin.url"
                  v-bind:href="member.linkedin.url"
                  target="_blank"
                  class="md-button md-link md-just-icon md-simple md-theme-default"
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="fab fa-linkedin"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/france.jpg")
    }
  },
  data() {
    return {
      members: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: "#DCDCDC",
        height: "unset"
      };
    }
  },
  created() {
    this.getMembers();
  },
  methods: {
    getMembers() {
      this.members = [];
      this.$prismic.client
        .query([
          this.$prismic.Predicates.at("document.type", "person"),
          this.$prismic.Predicates.at("document.tags", [
            "membre_conseil_administration"
          ])
        ])
        .then(response => {
          response.results.forEach(document => {
            this.members.push({ id: document.id, ...document.data });
          });
        });
    },
    profileBackground(member) {
      return {
        backgroundImage: `url(${member.square.url})`,
        opacity: 1
      };
    }
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
