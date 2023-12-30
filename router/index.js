import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Video from '@/Trash/Video.vue'
import Left from '@/AboutComponent/Left.vue'
import Right from '@/AboutComponent/Right.vue'
import GMap from '@/AboutComponent/Component/GMap.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/video',
    component: Video
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/homeView',
    name: 'map',
    component: HomeView
  },
  {
    path: '/aboutview',
    name: 'about',
    component: AboutView,
    children: [
      {
        path: 'Left',
        component: Left,
        children: [
          {
            path: 'Right',
            component: Right,
          }
        ]
      }
    ]
  },
  {
    path:'/gmap',
    name:'GMap',
    component:GMap
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {

  // next() 放行   next('./login) 强制跳转
  //如果访问登录页，就放行
  if (to.path === '/video') return next();
  //获取token
  const Success = window.sessionStorage.getItem('true');
  // 判断tokenStr可能是一个空值，可能是一个token
  // 空值强制跳转
  if (!Success) return next('/video');
  next();
  
});
export default router
