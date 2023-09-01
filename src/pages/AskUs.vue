<script>
import axios from 'axios';
import { store } from '../store.js'


export default {
    name: 'AskUs',
    data() {
        return {
            store,
        }
    },
    created() {

    },
    methods: {

    }
}
</script>
<template >
    <div class="container">
        <div class="row">
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
                    <label class="control-label">Domanda</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="class-group my-3">
                    <button type="submit" class="btn btn-primary btn-success">Invia</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="scss"></style>