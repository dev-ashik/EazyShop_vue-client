import { createRouter, createWebHistory } from "vue-router";
import ProductsPageVue from "@/views/ProductsPage.vue";
import ProductDetailPageVue from "@/views/ProductDetailPage.vue";
import CartPageVue from "@/views/CartPage.vue";
import LoginPageVue from "@/views/LoginPage.vue";
import NotFoundPageVue from "@/views/NotFoundPage.vue";


const routes = [
  {
    path: "/products",
    name: "ProductPage",
    component: ProductsPageVue,
  },
  {
    path: "/products/:id",
    name: "ProductDetailPage",
    component: ProductDetailPageVue,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPageVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPageVue,
  },
  {
    path: "/",
    redirect: "/products",
  },
  {
    // path: '*',
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
