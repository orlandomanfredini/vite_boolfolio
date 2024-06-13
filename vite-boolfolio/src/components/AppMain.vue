<template>
<main>
    <section>
        <div class="row">
            <AppCardProject v-for="(project, i) in projects" :key="i" :project="project" />
        </div>
    </section>
    <div v-if="this.lastPage  > 1" >
         <ul class="pages">
            <li @click="fetchPages(page)" v-for=" page in lastPage" >
                {{ page }}
            </li>
         </ul>
    </div>
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
               lastPage:null,
               currentPage: 1,
            };
            
        },
        methods: {
            fetchProjects(){
                axios.get('http://127.0.0.1:8000/api/projects',{
                    params: {
                        page: this.currentPage
                    }
                }).then((res)=>{
                    console.log(res.data.projects);
                    this.projects= res.data.projects.data
                    this.lastPage=res.data.projects.last_page
                })
            },
            fetchPages(page){
                if(page  === this.currentPage) return
                console.log(page);
                this.currentPage = page;
                this.fetchProjects
            }
        },
        mounted(){
            this.fetchProjects();
        }
    }

</script>

<style lang="scss" scoped>
.row{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px;
}
.pages{
    display: flex;
    gap: 18px;
    list-style: none;
    justify-content: center;
    align-items:center ;
    padding: 10px;

    li{
        border-radius: 50%;
        border: 1px solid rgb(220, 151, 151);
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
        width: 24px;
        
        
       

    }
    
}

</style>