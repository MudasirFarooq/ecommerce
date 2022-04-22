import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Productd from "../views/Productd.vue";
import Jewelery from "../components/Jewelery.vue";
import Men from "../components/Men.vue";
import Cart from "../components/Cart.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/men",
    name: "men",
    component: Men,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/jewelery",
    name: "jewelery",
    component: Jewelery,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
  path: "/productd/:id",
    name: "productd",
    component: Productd,
    props : true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
