<template>
    <div class="col-4">
        <div class="card">
            <h4>Project Title: {{ project.title }}</h4>
            <div>{{ project.slug }}</div>
            <div class="type"> Type: <strong>{{ project.type.type }}</strong></div>
            <div>
                Tecnology:
                <strong class="tecnology" v-for="tecnology in project.tecnologies">
                {{ tecnology.tecnology }}
                </strong>

            </div>
            <strong>
                <RouterLink :to="{name: 'portfolio.show', params: {slug: project.slug}}">View More...</RouterLink>
            </strong>
            


        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        
        props: ['project'],
        data(){
            return{
                tecnology: 0,
            }
        },
        methods: {
            fetchProject(){
                axios.get('')
            }
        }
    }
</script>

<style lang="scss" scoped>
.col-4{
    width: calc(4 * (100% / 12) - 40px);
    padding: 20px;
}
.card{
    padding: 20px;
    border-radius: 6px;
    border: 1px solid rgb(220, 151, 151);
}
.type{
    margin-top: 7px;
}
.tecnology{
    margin-left: 4px;
    color:rgb(220, 151, 151);
}
</style>