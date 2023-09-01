import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import AskUs from './pages/AskUs.vue';
import NotFound from './pages/NotFound.vue';
import PetsList from './pages/PetsList.vue';
<<<<<<< HEAD
import SinglePet from './pages/SinglePet.vue';
=======
import PetSingle from './pages/SinglePet.vue';
>>>>>>> 87d5add56ef90c0026dc063f9add1da20872bff9

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/pets-list',
            name: 'pets_list',
            component: PetsList
        },
        {
            path: '/single-pet/:id',
            name: 'single-pet',
            component: PetSingle
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