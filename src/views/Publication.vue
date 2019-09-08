<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-80 md-small-size-80 md-xsmall-size-100"
          >
          </div>
        </div>
      </div>
    </parallax>

    <div class="main readability">

      <div class="section">
        <div class="container">

          <div  v-if="article" class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100 mx-auto">
              <h6 class="text-right"><i class="fa fa-clock"></i>&nbsp;Temps de lecture&nbsp;: {{ article.reading_time }} minutes</h6>
              <h2 class="title text-center">{{ article.title }}</h2>
              <prismic-rich-text :field="article.body[0].primary.text"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Publications',
    props: {
        header: {
          type: String,
          default: require("@/assets/img/france.jpg")
        },
    },
    data () {
        return {
            article: null
        }
    },
    computed: {
        headerStyle() {
          return {
              backgroundImage: this.article ? `url(${this.article.header.url})` : `url(${this.header})`,
              height: '70vh'
          };
        }
    },
    methods: {    
        getArticle (uid) {
            this.$prismic.client.getByUID('article', uid).then((document) => {
              this.article = { id: document.id, uid: document.uid, ...document.data};
            })
        }
    },
    created () {
        this.getArticle(this.$route.params.uid)
    },
    beforeRouteUpdate (to, from, next) {
        //this.getContent(to.params.uid)
        next()
    }
}
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
