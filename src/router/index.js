import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/router/index'
import content from '@/view/content/router/index'
import institution from '@/view/Institution/router/index'
import login from '@/view/Login/router/index'
import user from '@/view/User/router/index'
// import order from '@/view/deal/router/index'
// import school from '@/view/school/router/index'
// import repository from '@/view/repository/router/index'

Vue.use(Router)

export default new Router({
  routes: [
    ...home,
    ...content,
    ...institution,
    ...login,
    ...user,
    // ...order,
    // ...school,
    // ...repository
  ]
})
