<template>
  <div class="wrapper board">
    <div
      class="section page-header header-filter"
      style="background-color: rgb(220, 220, 220); height: unset;"
    >
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-100 richtext"
            style="padding-top:80px"
          >
            <h1
              class="title text-center"
              style="font-variant:small-caps; font-size:40px; padding-bottom: 0; padding-top:0"
            >Votre espace adhérent</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="main readability">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-layout md-alignment-top-center md-large-size-50 md-small-size-100">
              <p>Bienvenue sur votre espace adhérent. Il vous est personnel et vous permet en toute sécurité de télécharger votre reçu fiscal pour l'année passée afin de bénéficier d'une réduction d'impôts.</p>
              <md-button class="md-primary"><router-link to="/adherent/recu-fiscal" style="color:white !important" target="_blank">Voir mon reçu fiscal imprimable pour 2019</router-link></md-button>
            </div>

            <div class="md-layout-item md-large-size-50 md-small-size-100 teaser">
              <p>
                <em>Dans un second temps - fonctionnalité en cours de développement -, cet espace occupera un rôle essentiel, car il centralisera l'ensemble de vos votes sur nos propositions. Au-delà de faire entendre votre voix directement, sans aucun intermédiaire, chez MUSES, vous aurez la garantie qu’une personne = une voix, quel que soit son niveau de responsabilité dans la structure. Seules les propositions que la communauté soutiendra massivement, à savoir plus de 66% de votes favorables, seront portées par nous tous.</em>
              </p>
              <p>Enfin un lobby qui a pour seul objectif de défendre les intérêts réels des citoyens !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adherent",
  data() {},
  computed: {},
  methods: {},
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

@media (max-width: 960px) {
  .teaser {
    margin-top: 60px;
  }
}
</style>
