// 用户信息
import userinfo from '@/view/User/UserInfo'
import userstatus from '@/view/User/UserStatus'
import usermessage from '@/view/User/UserMessage'
// import usercollect from '@/view/User/Usercollect'
// import userarticles from '@/view/User/Userarticles'
// import studentlist from '@/view/User/UserStudentlist'
// 学生信息
// import studentinfo from '@/components/user/Studentinfo'
export default [{
  path: '/user/userstatus',
  name: 'userstatus',
  component: userstatus,
}, {
  path: '/user/userinfo/:changetype/:type',
  name: 'userinfo',
  component: userinfo,
}, {
  path: '/user/usermessage',
  name: 'usermessage',
  component: usermessage,
  meta: {
    auth: true,
    title: '我的消息'
  }
}]

// export default [{
//   path: '/user/userinfo/:changetype/:type',
//   name: 'userinfo',
//   component: userinfo,
// }, {
//   path: '/user/userarticles/:historypage/:uid',
//   name: 'userarticles',
//   component: userarticles,
//   meta: { auth: true, title: '我的心得' }
// }, {
//   path: '/user/userstatus',
//   name: 'userstatus',
//   component: userstatus,
// }, {
//   path: '/user/usermessage',
//   name: 'usermessage',
//   component: usermessage,
//   meta: { auth: true, title: '我的消息' }
// }, {
//   path: '/user/usercollect',
//   name: 'usercollect',
//   component: usercollect,
//   meta: { auth: true, title: '我的收藏' }
// }, {
//   path: '/user/studentlist',
//   name: 'studentlist',
//   component: studentlist,
//   meta: { auth: true, title: '学生列表' }
// }, {
//   path: '/studentinfo/:data',
//   name: 'studentinfo',
//   component: studentinfo,
//   meta: { title: '学生信息' }
// }]
