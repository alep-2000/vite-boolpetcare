<script>
export default {
  data() {
    return {
      slides: [
                {
                    image: 'https://www.my-personaltrainer.it/2021/04/13/vaccinazione-cane-orig.jpeg',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    selected: true
                }, 
                {
                    image: 'https://doctorvet.it/wp-content/uploads/2019/10/vaccinazione-cane.jpg',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    selected: false
                }, 
                {
                    image: 'https://www.my-personaltrainer.it/2021/04/13/vaccino-gatto-orig.jpeg',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    selected: false
                }, 
                {
                    image: 'https://www.cani.it/img/330ccd33d85824a3c04b3d9e3c620281/w/755/289.jpg',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    selected: false
                }, 
                {
                    image: 'https://www.starbene.it/content/uploads/2023/07/pappagallo.jpg',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    selected: false
                }
        ],
        movimento: 0,
        autoScroll: null
    }
  },
  created() {
    this.startAutoScroll();
  },
  methods: {
    selectSlide(index){
        this.movimento = index;
    },
    prevSlide(){
        this.movimento--;
        if(this.movimento < 0){
            this.movimento = this.slides.length - 1;
        }
    },
    nextSlide(){
        this.movimento++;
        if(this.movimento > this.slides.length - 1){
            this.movimento = 0;
        }
    },
    startAutoScroll(){
        this.autoScroll = setInterval(() => {
            this.nextSlide();
        }, 3000);
    },
    stopAutoScroll(){
        clearInterval(this.autoScroll);
    }
  }
}
</script>
<template>
  <div class="container">
        <div class="slider-wrapper" @mouseover = "stopAutoScroll" @mouseleave = "startAutoScroll">

            <div class="item">
                <img :src="slides[movimento].image">
                <div class="overlay">
                    <h2>{{ slides[movimento].title }}</h2>
                    <p>{{ slides[movimento].text }}</p>
                </div>
            </div>

            <div class="thumbs">
                <div class="prev" @click="prevSlide"></div>
                <div class="next" @click="nextSlide"></div>
                <img :src="slide.image" v-for="(slide, index) in slides" :key="index" class="thumb" :class="[movimento === index ? 'active' : '']" @click="selectSlide(index)">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    float: left;
    width: 700px;
    height: 300px;
    position: relative;
}

.item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item .text {
    position: absolute;
    right: 20px;
    bottom: 20px;
    text-align: right;
    color: white;
}

.thumbs {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    background: #000;
    position: relative;
}

.thumb {
    height: calc(300px / 5);
    width: 100%;
    opacity: 0.5;
    object-fit: cover;
    cursor: pointer;
}

.thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumb.active {
    border: 2px solid #ccc;
    opacity: 1;
}

.prev, .next {
    width: 20px;
    height: 20px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}

.next {
    bottom: 0;
}

/*
EXTRA: in questo esempio gli accordion vengono creati
usando 2 bordi di un quadratino ruotato di 45 gradi
In una versione base si possono usare delle icone
oppure i caratteri ∧ (&and;) e ∨ (&or;)
 */
.prev::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%) rotate(-45deg);
}

.next::before {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%) rotate(135deg);
}

.overlay{
    position: absolute;
    bottom: 0;
    color: white;
    padding: 20px;
    text-align: right;
}
  
</style>