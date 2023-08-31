import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import AskUs from './pages/AskUs.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs
        },
        {
            path: '/ask-us',
            name: 'ask_us',
            component: AskUs
        },
    ]
});

export { router };