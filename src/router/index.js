import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Productd from "../views/Productd.vue";
import Jewelery from "../components/Jewelery.vue";
import Men from "../components/Men.vue";
import Cart from "../components/Cart.vue"
import Login from "../views/Login.vue";
import Signin from "../views/Signin.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/men",
    name: "men",
    component: Men,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
    meta: {
      hideNavbar: true,
     }
  },
  
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/products/category/:name",
    name: "category",
    component: Jewelery,
    props: true
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      children:[
        
      ]
  },

  {
  path: "/productd/:id",
    name: "productd",
    component: Productd,
    props : true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
