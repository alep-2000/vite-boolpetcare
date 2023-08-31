import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/projects-type',
            name: 'projects_type',
            component: ProjectTypeList
        },
        {
            path: '/technology',
            name: 'technology',
            component: TechnologyList
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs
        },
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/pagina-non-trovata'
        }
    ]
});

export { router };