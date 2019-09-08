<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-80 md-small-size-80 md-xsmall-size-100">
            <h1 class="title-brand" style="opacity:.9">Le lobby citoyen MUSES</h1>
            <h3 class="subtitle-brand">Agir aujourd’hui. Transformer demain.</h3>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
            >
              <i class="fas fa-play"></i> Voir la vidéo
            </md-button>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="title text-center">Pourquoi MUSES ?</h2>
              <p>Dans un monde dominé par le tout-économique, MUSES est un lobby citoyen qui se donne pour objectif de façonner une vision alternative de la société – plus juste et plus soutenable – fondée sur l’Humain.</p>
              <p>A rebours des lobbys s’afférant en coulisses pour la promotion d’intérêts particuliers, la création d’un lobby citoyen agissant en pleine lumière relève d’un impératif démocratique.</p>
              <p>Face à des défis sans précédent qu’il nous faut anticiper, il est urgent de concilier essor technologique et protection des individus, sauvegarde de la planète et mondialisation, valeurs républicaines et modernité.</p>
              <p>Par ses analyses et propositions, MUSES veut peser auprès des décideurs économiques et politiques pour ériger collectivement un Modèle Universel, Social, Emancipateur et Solidaire</p>
            </div>
          </div>

          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>group</md-icon>
                  </div>
                  <h4 class="info-title">Citoyens</h4>
                  <p>Pour toutes celles et ceux qui veulent faire entendre leur voix par une meilleure représentation de leurs intérêts et participer à l’élaboration collective d’un modèle au profit d’une société inclusive, juste et respectueuse de l’Homme et de son environnement.</p>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>business</md-icon>
                  </div>
                  <h4 class="info-title">Entreprises</h4>
                  <p>Pour tous les acteurs économiques qui souhaitent engager leur marque employeur dans une démarche citoyenne, conscients de la nécessité d’agir pour co-construire une société plus juste, plus solidaire et plus soutenable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-dark text-center">
        <div class="container">
          <h2 class="title">Votre engagement, notre mission</h2>
          <p>Parce que s’engager à plusieurs permet d’aller plus loin, MUSES se donne pour mission d’agir comme un trait d’union entre les citoyens, les associations ainsi que les décideurs politiques, institutionnels et économiques, en tant que lobby citoyen défenseur du progrès.</p>
        </div>
      </div>

      <div id="priorities" class="section text-center">
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
      </div>

      <div id="join" class="section section-dark text-center">
        <div class="container">
          <h2 class="title">Rejoignez-nous</h2>
          <p>
            Notre combat pour une plus grande justice sociale, fiscale et environnementale est indispensable.
            Rejoignez-nous pour co-construire le modèle de demain.
          </p>
        </div>
      </div>

      <div class="section section-contacts"></div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lighthouse3.jpg")
    },
    action1: {
      type: String,
      default: "/img/trottinette-electrique.png"
    },
    action2: {
      type: String,
      default: "/img/cheque-consommation.png"
    },
    action3: {
      type: String,
      default: "/img/indexation-retraite.png"
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
        backgroundPosition: "10% 100%",
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
</style>
