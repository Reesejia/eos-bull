import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mex from './views/mex/index.vue';
import Market from './views/market/index.vue';
import OrderDetails from './views/orderDetails/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/mex',
      name: 'mex',
      component: Mex,
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
    },
    {
      path: '/order-details',
      name: 'orderDetails',
      component: OrderDetails,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/markets',
      name: 'markets',
      // component: markets
    },
  ],
});
