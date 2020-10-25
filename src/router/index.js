import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import User from "../components/User";
import Detail from "../components/Detail";


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', name: 'home',component:Home},
    {path: '/user', name: 'user',component:User},
    {path: '/detail',component: Detail},
    {path: '/',component: Home},

  ]
})
