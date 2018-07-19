import Vue from 'vue'
import Router from 'vue-router'
import HomeHeader from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:  HomeHeader
    }
  ]
})
