<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome User Account View"/>
      <h1>{{ $route.query.name }}</h1>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/Use.vue'
  
  export default {
    name: 'HomeView',
    components: {
        HelloWorld
    }
  }
  </script>