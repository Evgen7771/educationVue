<template>
  <div class="table-container">
    <elem />
  </div>
  
</template>
 
<script>
  import elem from './components/CompA.vue';
  

  export default {
    name : 'app',
    components : { elem }
  }
</script>
<style src="./assets/css/style.css"></style>