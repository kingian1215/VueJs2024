<template>
  <div>
    <label for="number"></label>
    <input
      type="text"
      name="number"
      placeholder="Enter a number"
      v-model="number"
    />
    <button @click="addNumber">Add number</button>
  </div>
</template>

<script>

// import { EventBus } from '../EventBus.js'; // 引入EventBus實體
import { store } from '../store.js'; // 引入store實體

export default {
data() {
  return {
    number: 0
  }
},
methods: {
  addNumber() {
    store.addNumber(this.number)
    // EventBus.emit('addNumber',parseInt(this.number))
  }
}
}
</script>