import Vue from "vue";
import PrismicVue from 'prismic-vue'
import App from "./App.vue";
import router from "./router";
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");