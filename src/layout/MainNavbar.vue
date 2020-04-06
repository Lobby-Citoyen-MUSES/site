<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <router-link to="/">
          <h3 class="md-title">MUSES</h3>
          <!-- <img src="/img/muses-lobby-citoyen-logo.svg" style="display:block;width:100px;"/> -->
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">account_balance</i>
                        <p>Qui sommes-nous ?</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <router-link to="/le-mot-du-president">
                            <i class="material-icons">format_quote</i>
                            <p>Le mot du Président</p>
                          </router-link>
                        </li>
                         <li>
                          <router-link to="/methode-et-valeurs">
                            <i class="material-icons">emoji_objects</i>
                            <p>Notre approche</p>
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/conseil-administration">
                            <i class="material-icons">how_to_reg</i>
                            <p>Conseil d'administration</p>
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/comite-scientifique">
                            <i class="material-icons">school</i>
                            <p>Comité scientifique</p>
                          </router-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <router-link to="/plaidoyers" class="md-list-item-router md-list-item-container md-button-clean">
                  <div class="md-list-item-content">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">library_books</i>
                        <p>Nos plaidoyers</p>
                      </md-button>
                  </div>
                </router-link>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">favorite</i>
                        <p>Nous soutenir</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <router-link to="/engagement/citoyen">
                            <i class="material-icons">people</i>
                            <p>Citoyen</p>
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/engagement/entreprise">
                            <i class="material-icons">domain</i>
                            <p>Entreprise</p>
                          </router-link>
                        </li>
                        <!-- <li>
                          <a href="/don">
                            <i class="material-icons">stars</i>
                            <p>Don</p>
                          </a>
                        </li> -->
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <router-link to="/adherent" class="md-list-item-router md-list-item-container md-button-clean">
                  <div class="md-list-item-content">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">person</i>
                        <p>Adhérent</p>
                      </md-button>
                  </div>
                </router-link>
              </li>

              <md-list-item
                href="https://twitter.com/MusesCitoyen"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Suivez nous sur Twitter</md-tooltip
                >
              </md-list-item>

              <md-list-item
                href="https://www.facebook.com/MusesCitoyen/"
                target="_blank"
              >
                <i class="fab fa-facebook"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Suivez nous sur Facebook</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    background: {
      type: String,
      default: "transparent",
      validator(value) {
        return [
          "transparent",
          "gradient"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: `md-${this.background}`,
      toggledClass: false
    };
  },
  computed: {
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = `md-${this.background}`;
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement(id) {
      let element_id = document.getElementById(id);
      if (element_id) {
        element_id.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
