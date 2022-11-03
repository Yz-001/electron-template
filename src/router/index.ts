import {createRouter,RouteRecordRaw,createWebHashHistory} from "vue-router"
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'home',
        redirect:'/home',
        component: () => import("../layout/index.vue"),
        children:[
          {
            path:'/home',
            name:'home',
            component: () => import("../views/home/index.vue"),
          },
          {
            path:'/demo',
            name:'demo',
            component: () => import("../views/demo/index.vue"),
          }
        ]
    },
];
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach((next,from)=>{
  console.log('进入',next)
})
export default router;

