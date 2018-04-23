import institution from '@/view/Institution/InsHome'
import insdetails from '@/view/Institution/InsDetails'
import classdetails from '@/view/Institution/InsClassDetails'
export default [{
  path: '/institution',
  name: 'institution',
  component: institution,
  children: [{
    path: '/institution/classdetails/:id',
    name: 'classdetails',
    component: classdetails
  }, {
    path: '/institution/insdetails/:id',
    name: 'insdetails',
    component: insdetails
  }]
}]
