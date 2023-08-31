<script>

import axios from 'axios';
import { store } from '../store.js';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SinglePet',
    components: {
        AppLoader
    },
    data() {
        return {
            store,
            pet: null
        }
    },
    created() {
        this.getSinglePet();
    },
    methods: {
        getSinglePet() {
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/pets/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.pet = response.data.pet;
                    this.store.loading = false;
                }
                else {
                    this.$router.push({ name: 'not-found' });
                }
            })
        }
    }
}
</script>

<template lang="">
    <div>
        <AppLoader v-if="store.loading" />
        <div class="container" v-else>
            <div class="row">
                <div class="col-12 text-center mb-4">
                    <h1><strong>Nome:</strong>{{ pet.name }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <strong>Specie:</strong>{{ pet.species }}
                </div>
                <div class="col-12">
                    <strong>Data di nascita:</strong>{{ pet.date_born }}
                </div>
                <div class="col-12">
                    <strong>Genere:</strong>{{ pet.genre }}
                </div>
                <div class="col-12">
                    <strong>Proprietario:</strong>{{ pet.owner }}
                </div>
                <div class="col-12">
                    <strong>Note:</strong>{{ pet.notes }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>