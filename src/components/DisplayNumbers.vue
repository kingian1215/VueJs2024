<template>
    <div>
      <h2>{{ numbers }}</h2>
    </div>
  </template>
  
  <script>
import { EventBus } from '../EventBus.js'; // 引入EventBus實體
import { store } from '../store.js'; // 引入store實體

  export default {
    data() {
      return {
        numbers: [1,2,3,5,7,9,11,13,15,17,19]
      }
    },
    
    methods: {
      handleAddNumber(){
        EventBus.on('addNumber',(payload)=>{
          this.numbers.push(payload)
        })
      }
    },
    created(){
      this.handleAddNumber()
      console.log(store)
    }      
  }
  </script>