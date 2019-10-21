<template>
  <div class="wrapper home">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-80 md-small-size-80 md-xsmall-size-100">
            <h1
              class="title-brand"
              style="opacity:.9; position: relative; top:-45px"
            >Le lobby citoyen MUSES</h1>
            <h3
              class="subtitle-brand"
              style="position: relative; top:-55px"
            >Agir aujourd’hui. Transformer demain.</h3>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised readable">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="title text-center muses-purple">Pourquoi un lobby citoyen ?</h2>
              <p>Le lobbying relève d’une véritable stratégie d’influence, avec des méthodes et des moyens visant à informer les décideurs pour ensuite convaincre d’adhérer à un point de vue. Le poids du lobbying aux mains des multinationales qui en font un instrument privilégié de leur communication, est aujourd’hui tel qu’il gangrène en coulisses le processus démocratique.</p>

              <p>Pour contrebalancer cette tendance, la création d’un lobby citoyen agissant en pleine lumière relève d’un impératif pour la défense de l’intérêt commun.</p>

              <div class="blockquote">
                <p>“Il est temps d'utiliser les mêmes armes que les lobbys traditionnels pour les prendre à leur propre jeu.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="title text-center muses-purple">
                Pourquoi
                <abbr title="Modèle Universel Social Emancipateur et Solidaire">MUSES</abbr> ?
              </h2>
              <p>
                Pour un
                <span class="initial">M</span>odèle
                <span class="initial">U</span>niversel
                <span class="initial">S</span>ocial
                <span class="initial">E</span>mancipateur et
                <span class="initial">S</span>olidaire. C’est la vision du Lobby citoyen qui sera portée à travers ses analyses et propositions à destination des décideurs publics et économiques.
              </p>
              <p>Dans un monde dominé par le tout-économique, l’humain et l’environnemental sont relégués au second plan. Pourtant rien n’est inéluctable et de multiples solutions existent ou sont à construire au profit d’une société plus juste et plus soutenable.</p>
              <p>Face à des défis sans précédent qu’il nous faut anticiper, l’urgence est de concilier intelligemment essor technologique et protection des individus, sauvegarde de la planète et mondialisation, valeurs républicaines et modernité.</p>

              <div class="blockquote">
                <p>“Il est temps de transformer positivement demain, au profit d’un modèle pensé par tous et pour tous.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" style="padding: 50px 0 80px 0">
        <div class="container">
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="md-card md-theme-default info">
                  <div class="md-card-content">
                    <div class="illustration">
                      <img src="/img/engagement-citoyen.svg" />
                    </div>
                    <h4 style="font-variant:small-caps">Citoyens</h4>
                    <p
                      style="text-align:justify; color:#3C4858; line-height: 28px; padding: 0 10px;"
                    >Pour toutes celles et ceux qui veulent faire entendre leur voix pour la défense de leurs intérêts et en faveur d'une société inclusive, juste et respectueuse de l'Homme et de son environnement.</p>
                  </div>
                  <div class="md-card-actions md-alignment-center">
                    <a
                      href="/engagement/citoyen"
                      class="md-button md-round md-theme-default"
                      style="background-color: #a80841 !important; margin: 0 auto;"
                    >
                      <div class="md-ripple">
                        <div class="md-button-content">Je m'engage</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="md-card md-theme-default info">
                  <div class="md-card-content">
                    <div class="illustration">
                      <img src="/img/engagement-business.svg" />
                    </div>
                    <h4 style="font-variant:small-caps">Entreprises</h4>
                    <p
                      style="text-align:justify; color:#3C4858; line-height: 28px"
                    >Pour tous les acteurs économiques qui souhaitent engager leur marque employeur dans une démarche citoyenne, conscients de la nécessité de co-construire une société plus solidaire et plus soutenable.</p>
                  </div>
                  <div class="md-card-actions md-alignment-center">
                    <a
                      href="/engagement/entreprise"
                      class="md-button md-primary md-round md-theme-default"
                      style="background-color: #a80841 !important; margin: 0 auto;"
                    >
                      <div class="md-ripple">
                        <div class="md-button-content">On s'engage</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div id="priorities" class="section text-center">
        <div class="container">
          <h2 class="title">Nos actions</h2>

          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="action1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Usage des trottinettes
                      <br />
                      <small class="card-description text-muted">règlementé nationalement</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some
                        <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="action2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Chèque consommation
                      <br />
                      <small class="card-description text-muted">en faveur du pouvoir d’achat</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your actions
                        You can give more details about what they do.
                        Feel free to add some
                        <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="action3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Départ à la retraite
                      <br />
                      <small class="card-description text-muted">indexé sur l’espérance de vie</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some
                        <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->

      <div id="join" class="section section-dark text-center">
        <div class="container">
          <div class="md-layout-item md-medium-size-50 md-small-size-100">
            <h2 class="title">Rejoignez-nous !</h2>
            <p style="text-align:justify;">
              Parce que s’engager à plusieurs permet d’aller plus loin, MUSES se donne pour mission d’agir comme un trait d’union entre les citoyens, les associations ainsi que les décideurs politiques, institutionnels et économiques.
              Votre soutien est indispensable à notre combat pour une plus grande justice sociale, économique et environnementale.
            </p>

            <router-link :to="'/engagement/citoyen'"
              class="md-button md-white md-round md-theme-default"
              style="font-size: .8em; font-variant: small-caps; display: inline-block; margin: 30px auto;"
            >
              <div class="md-ripple">
                <div class="md-button-content">Agissons ensemble</div>
              </div>
            </router-link>
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
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
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

.illustration {
  width: 200px;
  max-height: 215px;
  padding: 0 auto;
  margin: 0 auto;
}

.blockquote {
  padding: 10px 20px;
  margin: 20px 0 20px;
  border-left: 5px solid #a80841;
  font-style: italic;
  p {
    font-size: 22px !important;
  }
}

.initial {
  color: #a80841;
  font-weight: 500;
}
</style>
