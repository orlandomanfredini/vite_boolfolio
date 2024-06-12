<template>
  <h1>Ecco Il FronEnd dei miei progetti</h1>
  <AppMain />
</template>

<script>
import AppMain from './components/AppMain.vue';
  export default {
    components: {
      AppMain
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
h1{
  color: rgb(220, 151, 151);
  text-align: center;
  padding: 20px;
}
</style>