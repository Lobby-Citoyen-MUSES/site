<template>
  <div class="wrapper board">
    <div class="section page-header mt-6 header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-100 richtext"
          >
          <h1
                class="title text-center"
                style="font-variant:small-caps; font-size:40px; padding-bottom: 0"
              >Statuts & Mentions légales</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="main readability">
      <div class="section">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div
              class="md-layout-item md-xsmall-size-100"
              style="display: flex; flex-direction: column;"
            >
            </div>
          </div>

          <div class="md-layout" style="padding-top: 70px;">
            <div class="md-layout-item md-size-80 md-xsmall-size-100 mx-auto drop-cap">

              <p>En vigueur au 1er Octobre 2019</p>

              <p>
                Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site https://muses-lobby-citoyen.org les présentes mentions et informations légales.
                La connexion et la navigation sur le site https://muses-lobby-citoyen.org par l’Utilisateur impliquent acceptation intégrale et sans réserve des présentes mentions et informations légales.
                Ces dernières sont accessibles sur le site à la rubrique « Statuts & Mentions légales ».
              </p>

              <p>
                <strong>Les Statuts :</strong><br/>
                L’Utilisateur peut prendre connaissance et <a target="_blank" href="/statuts-muses.pdf">télécharger les statuts du Lobby citoyen MUSES</a>.
              </p>
              <p>
                <strong>Editeur du présent site Internet :</strong><br/>
                Association : Le Lobby citoyen MUSES, pour un Modèle Universel, Social, Emancipateur et Solidaire.
                Cette association est régie par la Loi du 1er Juillet 1901 et son siège est établi au 65 rue du Chemin Vert, 75011.
                La déclaration au Journal Officiel des Associations et Fondations d'Entreprise est en date du 27 Juillet 2019.<br/>
                SIREN : 853 679 157<br/>
                SIRET : 853 679 157 00018<br/>
                Contact : contact@muses-lobby-citoyen.org
              </p>
              <p>
                <strong>Directeur de la Publication :</strong><br/>
                L’édition et la direction de la publication du site https://muses-lobby-citoyen.org sont assurées par Christophe HABAS, Président.
              </p>

              <p>
                <strong>Hébergeur :</strong><br/>
                L'hébergeur du site https://muses-lobby-citoyen.org est la Société Amazon, dont le siège social est situé au 67 Boulevard du Général Leclerc à Clichy, 92110 FRANCE.
              </p>

              <p>
                <strong>Accessibilité du site :</strong><br/>
                Le site https://muses-lobby-citoyen.org est accessible par tout endroit, 7j/7, 24h/24. Le Lobby citoyen MUSES se réserve cependant la possibilité de fermer ou de rendre inaccessible tout ou partie du site notamment pour des opérations de maintenance ou en cas de force majeure. En cas de modification, interruption ou suspension des services, le Lobby citoyen MUSES ne saurait être tenu responsable.
              </p>

              <p>
                <strong>Traitement des données à caractère personnel :</strong><br/>
                Les données à caractère personnel de tout Utilisateur qui sont collectées sur ce site sont le nom, le prénom, l’âge, le sexe et l’adresse e-mail. Ces données sont recueillies et destinées à un usage exclusif par le Lobby citoyen MUSES ; en aucun cas, elles ne sont partagées ou communiquées avec des tiers. Conformément aux articles de la Loi Informatique & Libertés du 6 Janvier 1978 et au Règlement général sur la protection des données (RGPD) du 27 avril 2016, l’Utilisateur a la possibilité, en écrivant à l'adresse contact@muses-lobby-citoyen.org d'exercer un droit d’accès à ses données. Il est également possible à l’Utilisateur de demander à ce que ses données personnelles, qui seraient inexactes ou incomplètes, soient rectifiées; de demander à ce que ses données soient effacées de notre base dans les conditions prévues à l’article 17 du RGPD; de demander la limitation des données le concernant dans les conditions prévues à l’article 18 du RGPD ou encore de recevoir les données le concernant dans un format structuré.
              </p>

              <p>
                <strong>Cookies :</strong><br/>
                L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
                En naviguant sur le site, il les accepte.
                Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
              </p>

              <p>
                <strong>Liens hypertextes :</strong><br/>
                Les liens hypertextes mis en place sur ce site en direction d’autres ressources présentes sur l’Internet sont proposés uniquement pour fournir à l’Utilisateur une information la plus complète possible. Ni leur contenu, ni les mises à jour éventuelles de ces liens ne sauraient engager la responsabilité du Lobby citoyen MUSES.
              </p>
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
</style>
