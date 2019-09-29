<template>
  <div class="wrapper board">
    <div class="main readability" style="padding-top:50px;">
      <div v-if="member" class="section">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div
              class="md-layout-item md-large-size-60 md-xsmall-size-100"
              style="display: flex; flex-direction: column;"
            >
              <h1
                class="title text-center"
                style="font-variant:small-caps; font-size:40px; flex: 1 0 auto; padding-bottom: 0"
              >{{ member.fullname }}</h1>
              <h5
                class="text-center"
                style="font-size:22px;font-variant:small-caps;"
              >{{ member.occupation }}</h5>
            </div>

            <div class="md-layout-item md-large-size-20 md-xsmall-size-100">
              <img
                :src="member.portrait.url"
                class="img"
                style="border-radius: 6px;"
              />
            </div>
          </div>

          <div class="md-layout" style="padding-top: 70px;">
            <div class="md-layout-item md-size-80 md-xsmall-size-100 mx-auto drop-cap">
              <prismic-rich-text :field="member.body[0].primary.text"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/lobby-citoyen-muses.jpg")
    }
  },
  data() {
    return {
      member: null
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
      getMember(uid) {
        this.$prismic.client.getByUID('person', uid).then(document => {
            this.member = { id: document.id, ...document.data };
        });
      }
  },
  created() {
    this.getMember(this.$route.params.uid)
  },
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
