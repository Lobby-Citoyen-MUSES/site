import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Inspirational from "./views/Inspirational.vue";
import About from "./views/About.vue";
import Board from "./views/Board.vue";
import Committee from "./views/Committee.vue";
import Member from "./views/Member.vue";
import Advocacies from "./views/Advocacies.vue";
import Advocacy from "./views/Advocacy.vue";
import Editorial from "./views/Editorial.vue";
import PledgeCitizen from "./views/PledgeCitizen.vue";
import PledgeBusiness from "./views/PledgeBusiness.vue";
import SubscriptionSuccess from "./views/SubscriptionSuccess.vue";
import SubscriptionFailed from "./views/SubscriptionFailed.vue";
import Donation from "./views/Donation.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Legal from "./views/Legal.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/le-mot-du-president",
      name: "inspirational",
      components: { default: Inspirational, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/methode-et-valeurs",
      name: "about",
      components: { default: About, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
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
      path: "/comite-scientifique",
      name: "committee",
      components: { default: Committee, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/membre/:uid",
      name: "member",
      components: { default: Member, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/plaidoyers",
      name: "advocacies",
      components: { default: Advocacies, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 50 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/plaidoyer/:uid",
      name: "advocacy",
      components: { default: Advocacy, header: MainNavbar, footer: MainFooter },
      meta: { requiresAuth: true },
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
    },
    {
      path: "/engagement/citoyen",
      name: "pledge-citizen",
      components: { default: PledgeCitizen, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/engagement/entreprise",
      name: "pledge-business",
      components: { default: PledgeBusiness, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/don",
      name: "donation",
      components: { default: Donation, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/adhesion/confirmation",
      name: "subscription-success",
      components: { default: SubscriptionSuccess, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/adhesion/interrompue",
      name: "subscription-failed",
      components: { default: SubscriptionFailed, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/mentions-legales",
      name: "legal",
      components: { default: Legal, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100, background: "gradient" },
        footer: { backgroundColor: "black" }
      }
    },

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});


export default router;
