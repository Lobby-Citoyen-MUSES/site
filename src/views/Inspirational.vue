<template>
  <div class="wrapper board">
    <div class="section page-header mt-6 header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-100 richtext"
            style="padding-top:80px"
          >
            <blockquote>
              <p
                style="font-size:22px;font-weight:300;text-align:justify"
              >« Le courage, c’est de chercher la vérité et de la dire ; c’est de ne pas subir la loi du mensonge triomphant qui passe, et de ne pas faire écho, de notre âme, de notre bouche et de nos mains aux applaudissements imbéciles et aux huées fanatiques. »</p>
              <footer class="text-right" style="font-size:16px;">
                <cite>
                  <a
                    href="https://fr.wikisource.org/wiki/Discours_%C3%A0_la_jeunesse,_par_Jean_Jaur%C3%A8s"
                  >
                    <i>Discours à la jeunesse,</i>
                  </a>
                </cite> Jean Jaurès, 1903.
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div class="main readability">
      <div class="section">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div
              class="md-layout-item md-large-size-60 md-xsmall-size-100"
              style="display: flex; flex-direction: column;"
            >
              <h1
                class="title text-center"
                style="font-variant:small-caps; font-size:40px; flex: 1 0 auto; padding-bottom: 0"
              >Le mot du Président</h1>
              <h5
                class="text-center"
                style="font-size:28px;font-variant:small-caps;"
              >Christophe HABAS</h5>
            </div>

            <div class="md-layout-item md-large-size-20 md-xsmall-size-100">
              <img
                src="https://muses.cdn.prismic.io/muses/b2caefab3376a30a14ffe39db16430f3c7536f4c_christophe-habas.jpg"
                class="img"
                style="border-radius: 6px;"
              />
            </div>
          </div>

          <div class="md-layout" style="padding-top: 70px;">
            <div class="md-layout-item md-size-80 md-xsmall-size-100 mx-auto drop-cap">
              <p>Se réapproprier son destin citoyen, telle est l’ambition de MUSES à l’heure où l’économie incarne “la forme essentielle du monde moderne”, à l’heure où la Politique s’est résolument transformée en un instrument servile de l’économie néo- ou ultra-libérale, à l’heure enfin où la question sociale s’efface progressivement sacrifiant les libertés collectives au profit d’individus prétendument plus libres et responsables, mais en vérité toujours plus isolés et plus fragilisés !</p>
              <p>Cette logique technocratique œuvrant à la libéralisation croissante, à la dérèglementation du travail et à la dérégulation des marchés, ainsi qu’à la destruction de notre écosystème, ne saurait assurer une vie digne et décente à chaque individu, ni matériellement ni intellectuellement, ni aujourd’hui ni demain. L’on pourrait même gager que cette utopie, aujourd’hui largement technophile, ne se métamorphose demain en une dystopie orwellienne fondée sur l’algorithmisation croissante de la société signant la mort définitive du Politique et la mécanisation de la régulation sociale au détriment de la Solidarité et de la Fraternité. Au détriment donc de deux pôles cardinaux de notre République, lesquels garantissent l’égalité de tous les individus non moins que l’usage respectueux de notre liberté envers autrui.</p>
              <p>Il appartient donc aux citoyen(ne)s non seulement de bien saisir les enjeux des politiques actuelles, dont le libertarianisme politique américain pourrait illustrer la tendance, mais aussi, face à l’incurie ou à l’aveuglement idéologique des États et face au lobbying puissant et complaisamment écouté de grands groupes économiques, de préconiser des mesures concrètes et alternatives d’une économie hétérodoxe fermement encadrée par la question sociale et écologique. Puisse MUSES rassembler les citoyens comme les acteurs de la société civile autour d’une volonté commune d’infléchir ici et maintenant le cours de notre société vers plus de Justice, d’Égalité et de Solidarité, par cet outil particulier que constitue le lobbying.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inspirational",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    }
  },
  data() {
    return {
      editorial: null
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
  methods: {},
  created() {},
  beforeRouteUpdate(to, from, next) {
    //this.getContent(to.params.uid)
    next();
  }
};
</script>


<style lang="scss" scoped>
cite {
  a {
    color: white !important;

    &:hover {
      color: white;
    }
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

.drop-cap:first-letter {
  font-size: 6.5em;
  float: left;
  margin-top: 0.25em;
  margin-bottom: 0.06em;
  margin-right: 0.05em;
}
</style>
