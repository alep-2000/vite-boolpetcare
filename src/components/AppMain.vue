<script>
  import axios from 'axios';
  import { store } from '../store.js';
  import AppLoading from '../components/AppLoading.vue';
export default {
  components:{
    AppLoading,
  },
  data() {
    return {
      name: "PetsList",
      store,
      pets: [],
      currentPage: 1,
      lastPage: null
    }
  },
  created(){
    this.getPets(1);
  },
  methods:{
    getPets(num_page){
        this.store.loading = true;
        axios.get(`${this.store.baseUrl}/api/pets`, {params: { page: num_page }}).then((response) => {
          if(response.data.success){
              this.pets = response.data.results.data;
              this.currentPage = response.data.results.current_page;
              this.lastPage = response.data.results.last_page;
              this.store.loading = false;
          }
      });
    },
    turncateText(text){
      if(text.length > this.maxCaracters){
          return text.substr(0, this.maxCaracters) + '...';
      }
          return text     
    }
  }
}
</script>
<template>
  <AppLoading v-if="this.store.loading"/>
    <div v-else>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center my-5">BOOLPET</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4" v-for="pet in pets" :key="pet.id">
                  <div class="card-body">
                    <h5 class="card-title">{{ pet.name }}</h5>
                    <h5 class="card-title">{{ pet.owner }}</h5>
                    <p class="card-text">{{ turncateText(pet.notes) }}</p>
                    <p class="card-text"><small class="text-muted">{{ pet.date_born }}</small></p>
                </div>
                <div class="card-footer">
                  <router-link class="btn btn-outline-primary w-100" :to="{ name: 'determinato_proggetto', params: { title: pet.name } }">Vedi Antoni Gisondi</router-link>
                </div>
            </div>
          </div>
            </div>
            <div class="row mt-5">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <nav>
                            <ul class="pagination">
                                <li :class="currentPage === 1 ? 'disabled' : ''">
                                    <button class="page-link" @click="getPets(currentPage - 1)">Precedente</button>
                                </li>
                                <li :class="currentPage === lastPage ? 'disabled' : ''">
                                    <button class="page-link" @click="getPets(currentPage + 1)">Successivo</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="text-center mt-3">
                        Pagina {{ currentPage }} di {{ lastPage }}
                    </div>
                </div>
            </div>
        </div>
</template>
<style lang="">
  
</style>