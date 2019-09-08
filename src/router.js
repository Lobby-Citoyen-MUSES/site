import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Board from "./views/Board.vue";
import Publications from "./views/Publications.vue";
import Publication from "./views/Publication.vue";
import Editorial from "./views/Editorial.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/conseil-administration",
      name: "board",
      components: { default: Board, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/publications",
      name: "publications",
      components: { default: Publications, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 50 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/publication/:uid",
      name: "publication",
      components: { default: Publication, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/editorial/:uid",
      name: "editorial",
      components: { default: Editorial, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
