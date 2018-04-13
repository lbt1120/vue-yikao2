import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/router/index'
// import institution from '@/view/institution/router/index'
// import login from '@/view/login/router/index'
// import user from '@/view/user/router/index'
// import content from '@/view/content/router/index'
// import order from '@/view/deal/router/index'
// import school from '@/view/school/router/index'
// import repository from '@/view/repository/router/index'

Vue.use(Router)

export default new Router({
  routes: [
    ...home,
    // ...institution,
    // ...login,
    // ...user,
    // ...content,
    // ...order,
    // ...school,
    // ...repository
  ]
})
