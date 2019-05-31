<template>
  <div id="app">

     <router-view>   </router-view>

  </div>
</template>
<script>


import Container from '@/components/MainFrame/Container'


export default {
  name: 'app',
  components: {
    'Container':Container
  }
}


</script>


<style>



</style>
