import signin from '@/view/User/Signin'

export default [{
  path: '/signin',
  name: 'signin',
  component: signin,
  meta: { auth: false, title: '我的积分' }
}]
