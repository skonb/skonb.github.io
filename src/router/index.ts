import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Top from '../views/Top.vue';
import Achievement from '../views/Achievement.vue';
import GameCorner from '../views/GameCorner.vue';

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
    {
        path: '/game',
        name: 'Game Corner',
        component: GameCorner,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
