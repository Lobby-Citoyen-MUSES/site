<template>
  <div class="wrapper board">
    
    <div class="section page-header mt-6 header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-large-size-100"
            style="padding-top:40px"
          >
            <h1 style="font-size:36px;font-weight:300;text-align:justify">
                Editoriaux
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="section">
        <div class="container">
          <div class="md-layout advocacies">
            <div
              v-for="editorial in editorials"
              v-bind:key="editorial.id"
              class="advocacy md-layout-item md-size-50 md-small-size-100"
            >
              <router-link :to="'/editorial/' + editorial.uid" style="display:flex;">
                <div
                  class="md-card md-card-background md-theme-default"
                  :style="editorialBackground(editorial)"
                >
                  <div class="md-card-content">
                    <h3 class="card-title">{{ editorial.title }}</h3>
                  </div>

                  <div class="md-card-actions">
                    <router-link
                      :to="'/editorial/' + editorial.uid"
                      class="md-button md-white md-simple md-theme-default"
                    >
                      <div class="md-ripple">
                        <div class="md-button-content">
                          <i class="md-icon md-icon-font md-theme-default">subject</i> Lire l'éditorial
                        </div>
                      </div>
                    </router-link>
                    <router-link
                      :to="'/plaidoyer/' + editorial.uid"
                      class="md-button md-white md-simple md-theme-default"
                    >
                      <div class="md-ripple">
                        <div class="md-button-content">
                          <i class="md-icon md-icon-font md-theme-default">watch_later</i>
                          {{ editorial.reading_time }} min
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
  name: "editorials",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    }
  },
  data() {
    return {
      editorials: []
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
  methods: {
    editorialBackground(editorial) {
      return { 
        backgroundImage: (editorial.header) ? `url(${editorial.header.url})` : null,
        backgroundSize: "cover"
      };
    },
    getEditorials(category) {
        this.$prismic.client
        .query(
          [
            this.$prismic.Predicates.at("document.type", "editorial"),
          ],    
          { pageSize: 100, orderings: "[document.first_publication_date desc]" }
        )
        .then(response => {
          response.results.forEach(document => {
            this.editorials.push({
              id: document.id,
              uid: document.uid,
              ...document.data
            });
          });
        });
    }
  },
  created() {
    this.getEditorials();
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

.advocacy {
    display: flex;
    a {
        display: flex;
    }
}

@media (max-width: 960px) {
  .advocacy {
    display: block;
    a {
        display: block;
    }
  }
}
</style>
