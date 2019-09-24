<template>
  <div v-if="content" class="wrapper about">
    <parallax class="section page-header mt-3 header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div class="md-layout-item md-large-size-80">
            <h1 class="title" style="padding: 70px 0 35px 0; font-size: 2.0rem;">{{ content.title }}</h1>
          </div>

          <div class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-100">
            <prismic-rich-text :field="content.introduction" class="introduction richtext" />
          </div>
        </div>
      </div>
    </parallax>

    <div  class="main readability">
        <div class="section">
        <div class="container">
          <div class="md-layout">

              <div
                v-for="concept in content.concepts"
                v-bind:key="concept.primary.concept_title"
                class="concept md-layout-item md-size-80 md-xsmall-size-100 mx-auto"
                style="margin-bottom: 40px;"
              >
                <h2 style="font-variant: small-caps; color: #c2185b">{{ concept.primary.concept_title }}</h2>
                <prismic-rich-text :field="concept.primary.concept_description" />
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="section ">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-80 md-xsmall-size-100 mx-auto">
            <h1
              class="title text-center"
              style="font-variant: small-caps; padding-bottom: 20px;"
            >{{ content.values_title }}</h1>
            <prismic-rich-text :field="content.values_introduction" class="richtext readability" style="text-align: justify;padding: 40px 0"/>
          </div>

          <div
            v-for="value in content.values"
            v-bind:key="value.primary.value_title"
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <div class="rotating-card-container">
              <div class="md-card md-card-rotate md-theme-default bg-rose">
                <div class="front">
                  <div class="md-card-content">
                    <div style="width: 150px; height: 150px; fill: white; margin: 20px auto;">
                      <img
                        :src="value.primary.value_illustration.url"
                        style="fill: white; color: white;"
                      />
                    </div>
                    <h4
                      class="card-title"
                      style="font-size: 1.4rem; text-align:center; padding: 20px 0; color: white;"
                    >{{ value.primary.value_title }}</h4>
                    <p
                      class="card-description text-center"
                      style="color: white; font-variant: small-caps; font-size: 1.1rem; font-weight: 500"
                    >{{ value.primary.value_summary }}</p>
                  </div>
                </div>
                <div class="back">
                  <div class="md-card-content">
                    <prismic-rich-text
                      :field="value.primary.value_description"
                      class="card-description card-back"
                      style="color: white; text-align: left;"
                    />
                  </div>
                
                </div>
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
  name: "About",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    }
  },
  data() {
    return {
      content: null
    };
  },
  computed: {
    headerStyle() {
      return {
        //backgroundImage: `url(${this.header})`,
        height: "unset",
        backgroundPosition: "top"
      };
    }
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query([this.$prismic.Predicates.at("document.type", "about")])
        .then(response => {
          response.results.forEach(document => {
            this.content = document.data;
          });
        });
    }
  },
  created() {
    this.getContent();
  },
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>


<style lang="scss">

.concept:nth-child(even) {
    text-align-last: right;
    -moz-text-align-last: right;
}

.introduction p {
  text-align: justify;
}

.richtext p {
    font-size: 1.2rem;
    line-height: 1.8;
}

.card-back p {
    font-size: 1.1rem;
    line-height: 1.8;
}

.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}

.bg-rose .back,
.bg-rose .front {
  background: linear-gradient(60deg, rgb(136, 10, 60), rgb(197, 0, 92) 70%);//linear-gradient(60deg, #ec407a, #c2185b);
}

.rotating-card-container:hover .md-card {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.rotating-card-container .md-card-rotate {
  background: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.rotating-card-container .md-card {
  -webkit-transition: all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1);
  transition: all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;
}

.rotating-card-container .md-card .front {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 6px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  position: relative;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);
}

.rotating-card-container .md-card .back {
  -webkit-transform: rotateY(180deg);
  -webkit-box-pack: center;
  transform: rotateY(180deg);
  border-radius: 6px;
  z-index: 5;
  text-align: center;
  width: 100%;
  height: 100%;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);
}
</style>
