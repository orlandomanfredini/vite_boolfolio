<template>
<main>
    <AppCardProject v-for="(project, i) in projects" :key="i" :project="project" />
</main>
</template>

<script>
import axios from 'axios'
import AppCardProject from './AppCardProject.vue';
    export default {
        components: {
            AppCardProject,
        },
        data(){
            return{
               projects: [],
            };
            
        },
        methods: {
            fetchProjects(){
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((res)=>{
                    console.log(res.data.projects);
                    this.projects= res.data.projects.data
                })
                
            }
        },
        mounted(){
            this.fetchProjects();
        }
    }

</script>

<style lang="scss" scoped>
main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px;
}
</style>