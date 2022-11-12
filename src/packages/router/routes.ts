import { RouteRecordRaw } from 'vue-router'

/**
 * 基础路由
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'admin',
        component: () => import('@/packages/layout/Index.vue'),
        children: [{ path: '', redirect: 'home' }],
    },
    {
        path: '/login', name: 'login', meta: { title: '登录' },
        component: () => import('@/packages/views/login/Index.vue'),
    },
    {
        path: '/test', name: 'test', meta: { title: '测试页面' },
        component: () => import('@/packages/views/test/Index.vue'),
    },
    {
        path: '/404',
        component: () => import('@/packages/views/error/404.vue'),
    },
]

export default routes
