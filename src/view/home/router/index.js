import home from '@/view/home/Home'
import HomeIndex from '@/view/home/HomeIndex'
import HomeClassroom from '@/view/home/HomeClassroom'
import HomeSinayikao from '@/view/home/HomeSinayikao'
import HomeSchool from '@/view/home/HomeSchool'
import HomeInstitution from '@/view/home/HomeInstitution'
import HomeUser from '@/view/home/HomeUser'
// // 更多信息
// import moreDataList from '@/view/moreDataList/Moredatalist'

export default [{
  path: '/',
  component: home,
  children: [{
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex,
    meta: {
      title: '艺考'
    }
  }, {
    path: '/home/classroom',
    name: 'HomeClassroom',
    component: HomeClassroom,
    meta: {
      title: '课堂'
    }
  }, {
    path: '/home/sinayikao',
    name: 'HomeSinayikao',
    component: HomeSinayikao,
    meta: {
      title: '艺考圈'
    }
  }, {
    path: '/home/institution',
    name: 'HomeInstitution',
    component: HomeInstitution,
    meta: {
      title: '机构'
    }
  }, {
    path: '/home/user',
    name: 'HomeUser',
    component: HomeUser,
    meta: {
      title: '用户信息'
    }
  }, {
    path: '/home/school',
    name: 'HomeSchool',
    component: HomeSchool,
    meta: {
      title: '艺考院校'
    }
  }]
}
// , {
//   path: '/moredata',
//   name: 'moreDataList',
//   component: moreDataList,
// }
]
