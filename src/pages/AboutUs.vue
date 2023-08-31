<script>
export default {
    name: 'AboutUs'
}
</script>
<template >
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <h1 class="text-center">Chi siamo ?</h1>
                <p class="mt-5 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente veniam rem debitis, obcaecati sint optio! Tenetur expedita, perspiciatis dignissimos molestias quaerat enim commodi necessitatibus quas, aliquam dolorem voluptate excepturi?
                </p>
                <div class="mt-5">
                    <router-link class="btn btn-primary" :to="{name: 'request' }">Inviaci le tue domande </router-link>
                </div>
            </div>

        </div>
        
    </div>
</template>
<style lang="scss">
    
</style>