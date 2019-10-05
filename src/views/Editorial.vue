<template>
  <div class="wrapper">
    <div class="main readability">

      <div class="section">

        <div v-if="editorial" class="container" style="padding-top: 70px;">
          <div class="md-layout md-alignment-center">

            <div class="md-layout-item md-large-size-60 md-xsmall-size-100" style="display: flex; flex-direction: column;">  
              <h1 class="title text-left" style="font-variant:small-caps; flex: 1 0 auto"><span style="font-size: 5rem; position:relative; top: 20px;">“</span>{{ editorial.title }}<span style="font-size: 5rem; position:relative; top: 20px;">”</span></h1>
              <h5 class="text-right">L'édito <span class="md-small-hide">du {{ editorial.date }}<br/></span>de {{ editorial.author.fullname }}</h5>
            </div>

            <div class="md-layout-item md-large-size-20 md-xsmall-size-100">
              <img :src="editorial.author.portrait.url" class="img" style="border-radius: 6px;"/>
            </div>
          </div>

          <div class="md-layout" style="padding-top: 70px;">
            <div class="md-layout-item md-size-80 md-xsmall-size-100 mx-auto drop-cap">
              <prismic-rich-text :field="editorial.body[0].primary.text"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Editorial',
    props: {
        header: {
          type: String,
          default: require("@/assets/img/lobby-citoyen-muses.jpg")
        },
    },
    data () {
        return {
            editorial: null
        }
    },
    computed: {
    },
    methods: {    
        getEditorial (uid) {
            this.$prismic.client.getByUID('editorial', uid, {fetchLinks :  ['person.fullname', 'person.portrait']})
            .then((document) => {
              let author = document.data.author;

              // let months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

              this.editorial = {
                id: document.id,
                uid: document.uid,
                date: new Date(document.first_publication_date).toLocaleString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric'}),
                ...document.data,
                author: {
                  id: author.id,
                  uid: author.uid,
                  ...author.data
                }
              };
            })
        }
    },
    created () {
        this.getEditorial(this.$route.params.uid)
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

.drop-cap:first-letter {
    font-size: 6.5em;
    float: left;
    margin-top: .25em;
    margin-bottom: .06em;
    margin-right: .05em;
}
</style>
