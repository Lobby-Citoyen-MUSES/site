<template>
  <div class="wrapper advocacies">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            v-if="headline"
            class="md-layout-item md-size-80 md-small-size-80 md-xsmall-size-100"
          >
            <h1 style="opacity:.9; font-variant: small-caps">{{ headline.title }}</h1>
            <h3
              class="hidden-sm"
              style="font-size:1.3rem; line-height: 1.6em"
            >{{ headline.summary }}</h3>
            <br />
            <router-link :to="'/plaidoyer/' + headline.uid">
              <md-button :href="'/plaidoyer/' + headline.uid" class="md-success md-lg">
                <i class="fas fa-plus"></i> Lire la suite
              </md-button>
            </router-link>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              v-if="editorial"
              class="editorial md-layout-item md-large-size-35 md-small-size-100"
            >
              <router-link :to="'/editorial/' + editorial.uid">
                <div
                  class="md-card md-card-background editorial md-theme-default"
                  :style="editorialBackground(editorial)"
                >
                  <div class="md-card-content">
                    <div style="flex-grow: 1;"></div>
                    <router-link class="editorial-title" :to="'/editorial/' + editorial.uid">
                      <h3 class="card-title">{{ editorial.title }}</h3>
                    </router-link>

                    <div class="card-stats text-center">
                      <router-link
                        :to="'/editorial/' + editorial.uid"
                        class="md-button md-white md-round md-theme-default"
                      >
                        <div class="md-ripple">
                          <div
                            class="md-button-content"
                          >Lire l'édito de {{ editorial.author.fullname }}</div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="md-layout-item md-size-65 md-small-size-100" style="display:flex">
              <div
                v-if="focus"
                class="focus md-card md-card-background md-theme-default"
                :style="highlightBackground(focus)"
              >
                <div class="md-card-content">
                  <router-link :to="'/plaidoyer/' + focus.uid">
                    <h6 class="card-category">{{ focus.category }}</h6>
                    <h3 class="card-title">{{ focus.title }}</h3>
                    <p class="card-description">{{ focus.summary }}</p>
                  </router-link>
                </div>

                <div class="md-card-actions">
                  <router-link
                    :to="'/plaidoyer/' + focus.uid"
                    class="md-button md-white md-simple md-theme-default"
                  >
                    <div class="md-ripple">
                      <div class="md-button-content">
                        <i class="md-icon md-icon-font md-theme-default">subject</i> Lire le plaidoyer
                      </div>
                    </div>
                  </router-link>
                  <router-link
                    :to="'/plaidoyer/' + focus.uid"
                    class="md-button md-white md-simple md-theme-default"
                  >
                    <div class="md-ripple">
                      <div class="md-button-content">
                        <i class="md-icon md-icon-font md-theme-default">watch_later</i>
                        {{ focus.reading_time }} min
                        <span
                          class="hidden-sm"
                        >de lecture</span>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="md-layout">
            <div
              v-for="highlight in highlights"
              v-bind:key="highlight.id"
              class="highlight md-layout-item md-size-50 md-small-size-100"
            >
              <router-link :to="'/plaidoyer/' + highlight.uid" style="display:flex">
                <div
                  class="md-card md-card-background md-theme-default"
                  :style="highlightBackground(highlight)"
                >
                  <div class="md-card-content">
                    <h6 class="card-category">{{ highlight.category }}</h6>
                    <h3 class="card-title">{{ highlight.title }}</h3>
                    <p class="card-description">{{ highlight.summary }}</p>
                  </div>

                  <div class="md-card-actions">
                    <router-link
                      :to="'/plaidoyer/' + highlight.uid"
                      class="md-button md-white md-simple md-theme-default"
                    >
                      <div class="md-ripple">
                        <div class="md-button-content">
                          <i class="md-icon md-icon-font md-theme-default">subject</i> Lire le plaidoyer
                        </div>
                      </div>
                    </router-link>
                    <router-link
                      :to="'/plaidoyer/' + highlight.uid"
                      class="md-button md-white md-simple md-theme-default"
                    >
                      <div class="md-ripple">
                        <div class="md-button-content">
                          <i class="md-icon md-icon-font md-theme-default">watch_later</i>
                          {{ highlight.reading_time }} min
                          <span
                            class="hidden-sm"
                          >de lecture</span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>


        
      </div>

      <div class="section section-dark text-center">
        <div class="container readable">
          <p>
            En décryptant des problématiques d’actualité, nos plaidoyers visent à présenter une analyse et délivrer des clés de compréhension afin de nourrir la réflexion collective. Il s’agit, en s’appuyant sur des chiffres et des illustrations, de construire des propositions tout à la fois ambitieuses et réalistes. Instrument clé pour porter une voix dans le débat public et peser auprès des décideurs. 
          </p>
          <h3 style="text-align:center">
            Nos plaidoyers ont pour prisme unique la défense passionnée de l’intérêt commun au service d’un modèle résolument plus juste et plus soutenable.
          </h3>
          <div class="md-layout md-alignment-top-center">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <router-link 
              v-for="(category, link) in categories[0]"
              v-bind:key="category"
              :to="'/plaidoyers/' + link"
              class="md-button md-white md-round md-theme-default"
              style="font-size: .8em; font-variant: small-caps; display:block; margin: 20px auto"
            >
              <div class="md-ripple">
                <div class="md-button-content" style="color: rgb(168, 8, 65) !important">{{ category }}</div>
              </div>
            </router-link>
          </div>
           <div class="md-layout-item md-size-50 md-small-size-100">
            <router-link 
              v-for="(category, link) in categories[1]"
              v-bind:key="category"
              :to="'/plaidoyers/' + link"
              class="md-button md-white md-round md-theme-default"
              style="font-size: .8em; font-variant: small-caps; display:block; margin: 20px auto"
            >
              <div class="md-ripple">
                <div class="md-button-content" style="color: rgb(168, 8, 65) !important">{{ category }}</div>
              </div>
            </router-link>
             <router-link 
              :to="'/editoriaux'"
              class="md-button md-white md-round md-theme-default"
              style="font-size: .8em; font-variant: small-caps; display:block; margin: 20px auto"
            >
              <div class="md-ripple">
                <div class="md-button-content" style="color: rgb(168, 8, 65) !important">éditoriaux</div>
              </div>
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plaidoyers",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    }
  },
  data() {
    return {
      headline: null,
      editorial: null,
      focus: null,
      highlights: [],
      advocacies: [],
      categories: [{
        "Modèle d'organisation de la société": "organisation de la société",
        "Modèle d'organisation du travail": "organisation du travail",
        "Modèle de développement durable": "développement durable",
        "Modèle économique & technologique": "économie & technologie",
      },{
        "Modèle de gouvernance européenne et internationale": "gouvernance internationale",
        "Modèle de justice sociale": "justice sociale",
        "Modèle social": "social",
      }]
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: this.headline
          ? `url(${this.headline.header.url})`
          : `url(${this.header})`,
        height: "80vh"
      };
    }
  },
  methods: {
    editorialBackground(editorial) {
      return {
        backgroundImage: `url(${this.editorial.author.portrait.url})`,
        backgroundSize: "cover"
      };
    },
    highlightBackground(highlight) {
      return {
        backgroundImage: `url(${highlight.header.url})`,
        backgroundSize: "cover"
      };
    },
    getPlaidoyers() {
      this.$prismic.client
        .query(
          [
            this.$prismic.Predicates.at("document.type", "article"),
            this.$prismic.Predicates.at("document.tags", ["premiere"])
          ],
          {
            pageSize: 1,
            orderings: "[document.first_publication_date desc]"
          }
        )
        .then(response => {
          response.results.forEach(document => {
            this.headline = {
              id: document.id,
              uid: document.uid,
              ...document.data
            };
          });
        });

      this.$prismic.client
        .query([this.$prismic.Predicates.at("document.type", "editorial")], {
          pageSize: 1,
          orderings: "[document.first_publication_date desc]",
          fetchLinks: ["person.fullname", "person.portrait"]
        })
        .then(response => {
          response.results.forEach(document => {
            let author = document.data.author;

            this.editorial = {
              id: document.id,
              uid: document.uid,
              ...document.data,
              author: {
                id: author.id,
                uid: author.uid,
                ...author.data
              }
            };
          });
        });

      this.$prismic.client
        .query(
          [
            this.$prismic.Predicates.at("document.type", "article"),
            this.$prismic.Predicates.at("document.tags", ["zoom"])
          ],
          {
            pageSize: 1,
            orderings: "[document.first_publication_date desc]"
          }
        )
        .then(response => {
          response.results.forEach(document => {
            this.focus = {
              id: document.id,
              uid: document.uid,
              ...document.data
            };
          });
        });

      this.$prismic.client
        .query(
          [
            this.$prismic.Predicates.at("document.type", "article"),
            this.$prismic.Predicates.at("document.tags", ["en_avant"])
          ],
          { pageSize: 10, orderings: "[document.first_publication_date desc]" }
        )
        .then(response => {
          response.results.forEach(document => {
            this.highlights.push({
              id: document.id,
              uid: document.uid,
              ...document.data
            });
          });
        });

        this.$prismic.client
        .query(
          [
            this.$prismic.Predicates.at("document.type", "article"),
            this.$prismic.Predicates.not("document.tags", ["premiere"]),
            this.$prismic.Predicates.not("document.tags", ["zoom"]),
            this.$prismic.Predicates.not("document.tags", ["en_avant"])
          ],
          { pageSize: 10, orderings: "[document.first_publication_date desc]" }
        )
        .then(response => {
          response.results.forEach(document => {
            this.advocacies.push({
              id: document.id,
              uid: document.uid,
              ...document.data
            });
          });
        });
    }
  },
  created() {
    this.getPlaidoyers();
  },
  beforeRouteUpdate(to, from, next) {
    //this.getContent(to.params.uid)
    next();
  }
};
</script>

<style lang="scss" scoped>
.section-dark {
  color: #fff;
  background: linear-gradient(30deg,#53132d 10%,#c5005c);
}

.card-category {
  color: #eb0060;
  text-shadow: black 0px 0px 3px;
}

.highlight {
    display: flex;
    a {
      display: flex;
    }
  }

@media (max-width: 960px) {
  .highlight {
    display: block;
    a {
      display: block;
    }
  }
}
</style>
