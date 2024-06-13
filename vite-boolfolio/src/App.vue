<template>
 <AppHeader />
  <router-view></router-view>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

  export default {
    components: {
      AppHeader
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>