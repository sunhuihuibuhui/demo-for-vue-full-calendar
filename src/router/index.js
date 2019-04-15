import Vue from 'vue'
import Router from 'vue-router'

import calendar from '@/pages/calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: calendar
    }
  ]
})
