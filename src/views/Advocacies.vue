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
                  <router-link :to="'/plaidoyer/' + focus.uid" class="md-button md-white md-simple md-theme-default">
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

            <div
              v-for="highlight in highlights"
              v-bind:key="highlight.id"
              class="highlight md-layout-item md-size-50 md-small-size-100"
              style="display:flex"
            >
              <router-link :to="'/plaidoyer/' + highlight.uid">
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
                    <router-link :to="'/plaidoyer/' + highlight.uid" class="md-button md-white md-simple md-theme-default">
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
      articles: []
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
          { pageSize: 3, orderings: "[document.first_publication_date desc]" }
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
.card-category {
  color: #eb0060;
  text-shadow: black 0px 0px 3px;
}
</style>
