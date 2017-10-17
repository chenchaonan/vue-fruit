import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue';
import Cart from '../pages/Cart.vue';
import Mine from '../pages/Mine.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/cart',component:Cart},
    {path:'/mine',component:Mine},
    {path:'*',redirect:Mine},
  ]
})
