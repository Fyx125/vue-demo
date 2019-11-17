export default {
  state: {
    name: 'abc',
    age: 18,
    time: 1572989500000
  },
  mutations: {
    setAge (state, arg) {
      state.age = arg
    }
  },
  actions: {
    setAge (store, arg) {
      store.commit('setAge', arg)
    }
  }
}
