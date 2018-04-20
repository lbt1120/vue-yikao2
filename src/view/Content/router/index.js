// 内容页
import content from '@/view/content/Content'
import contentvideo from '@/view/content/Content-Video'
import contenttext from '@/view/content/Content-Text'
import contentrichtext from '@/view/content/Content-RichText'
// import schoolrichtext from '@/components/content/Content-schooltext'

export default [{
  path: '/content',
  name: 'content',
  component: content,
  children: [{
      path: '/content/video/:docid',
      name: 'contentvideo',
      component: contentvideo
    }, {
      path: '/content/text/:docid',
      name: 'contenttext',
      component: contenttext,
      // meta: { title: ':title' }
    },{
      path: '/content/:docid',
      name: 'contentrichtext',
      component: contentrichtext,
      // meta: { title: ':title' }
    }
  ]
}]
