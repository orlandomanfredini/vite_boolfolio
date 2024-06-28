<template>
    <section>
        <div class="container">
            <h1>DETTAGLIO DEL PROGETTO</h1>
            <strong>SLUG:</strong>
            <span>{{ slug }}</span>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        props:{
            slug: {
                type: String,
                required: true,
            }
        },

        data(){
            return{

            }
        },
        mounted(){
            console.log('ciao mounted');
        },
        unmounted(){
            console.log('ciao unmounted');
        }
    }
</script>

<style lang="scss" scoped>

</style>