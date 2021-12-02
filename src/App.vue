<template>
  <div id="app">
    <navbar v-bind:ser="search" :inputData="search" @update="search = $event;"/>
    <router-view v-bind:ser="search" />
    <footerSet />
  </div>
</template>
<script>
import navbar from '@/components/navbar'
import footerSet from '@/components/footerSet'
export default {
  components: {
    navbar,
    footerSet
  },
  data() {
    return{
      search: ''
    }
  }
}
</script>

<style>
* {
  margin: 0;
  font-family: 'Gilroy', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
