// import AddNumbers from "./components/AddNumbers.vue";

export const store = {
    state: {
      numbers:[2, 4, 6, 8, 10]
  },
  addNumber(newNumber) {     
    this.state.numbers.push(parseInt(newNumber))
    console.log(this.state.numbers)
  },
}