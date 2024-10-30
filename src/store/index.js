import { createStore } from 'vuex'

export default createStore({
  state: {
    numbers: [2,4,8,6,10]
  },
  getters: {
    sortedNumbers:(state) => state.numbers.sort((a,b) => a - b)
  },
  mutations: {
    ADD_NUMBER(state,payload){
      state.numbers.push(payload)
    }
  },
  actions: {
    addNumber(context,number){
      context.commit("ADD_NUMBER",number)
    }
  },
  modules: {
  }
})
