import Vue from "vue";``
import VueRouter from 'vue-router';

import PrismicVue from 'prismic-vue';
import linkResolver from './prismic/link-resolver';
import htmlSerializer from './prismic/html-serializer';

import MaterialKit from "./plugins/material-kit";

import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter)

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

Vue.use(MaterialKit);

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