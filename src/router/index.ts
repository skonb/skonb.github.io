import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Top from '../views/Top.vue';
import Achievement from '../views/Achievement.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Top',
        component: Top,
    },
    {
        path: '/achievement',
        name: 'Achievement',
        component: Achievement,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
