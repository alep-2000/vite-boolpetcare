<script>
    import axios from 'axios';
    import { store } from '../store.js';
export default {
    data(){
        return{
            name: "ContactForm",
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false
        }
    },
    methods:{
        sendForm(){
            this.loading = true

            const data = {
                name: this.name,
                email: this.email,
                content: this.message
            }

            //PULISCO L'ARRAY DEGLI ERRORI
            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts/`, data).then((response) => {
                this.success = response.data.success;
                if(!this.success){
                    this.errors = response.data.errors;
                }
                else{
                    //PULISCO I DATI IN INPUT
                    this.name = '';
                    this.email = '';
                    this.message = '';

                    this.$router.push({ name: 'thank-you' })
                }
                this.loading = false
            });
        },
    }
}
</script>
<<<<<<< HEAD
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="sendForm()" class="row">
                        <div class="col-12 col-md-6">
                            <label class="control-label" for="name">Nome e cognome</label>
                            <input type="text" name="name" id="name" v-model="name" placeholder="Nome" class="form-control" :class="errors.name ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.name" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="control-label" for="email">Email</label>
                            <input type="text" name="email" id="email" v-model="email" placeholder="email" class="form-control" :class="errors.email ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.email" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="control-label" for="name">Messaggio</label>
                            <textarea name="message" id="message" v-model="message" placeholder="Messagio" class="form-control" :class="errors.content ? 'is-invalid' : ''"></textarea>
                            <p v-for="(error, index) in errors.content" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6 my-3">
                            <button class="btn btn-sm btn-success" :disabled="loading" type="submit">{{ loading ? 'Invio email in corso' : 'Invia' }}</button>
                        </div>
                    </form>
                </div>
            </div>
=======
<template >
    <div class="container">
        <div class="row mt-5">
            <h1>Inviaci le tue domande :</h1>
            <form action="" method="POST">
                <div class="class-group">
                    <label class="control-label">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Name">
                </div>
                <div class="class-group">
                    <label class="control-label">Cognome</label>
                    <input type="text" id="surname" name="surname" placeholder="Surname">
                </div>
                <div class="class-group">
                    <label class="control-label">Email</label>
                    <input type="email" class="form-control" placeholder="name@example.com">
                </div>
                <div class="class-group">

                    <input type="text" id="name" name="name" placeholder="Name" class="form-control">
                </div>
                <div class="class-group my-3">
                    <label class="control-label">Cognome</label>
                    <input type="text" id="surname" name="surname" placeholder="Surname" class="form-control">
                </div>
                <div class="class-group my-3">
                    <label class="control-label">Email</label>
                    <input type="email" class="form-control" placeholder="name@example.com">
                </div>
                <div class="class-group my-3">
                    >>>>>>> 87d5add56ef90c0026dc063f9add1da20872bff9
                    <label class="control-label">Domanda</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="class-group my-3">
                    <button type="submit" class="btn btn-primary btn-success">Invia</button>
                </div>
            </form>
>>>>>>> 42b210e11bb9d2d36cd64dd1df8b0998de3615c0
        </div>
    </div>
</template>
<style lang="scss">
    @use '../styles/generals.scss' as *;
</style>