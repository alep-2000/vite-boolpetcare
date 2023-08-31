import { createRouter, createWebHistory } from "vue-router";

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
        }
    ]
});

export { router };