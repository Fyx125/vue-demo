import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    // num: 0,
    arr: []
  },
  mutations: {
    // list版本
    // addNum (state, arg) {
    //   arg = arg || 1
    //   state.num += arg
    // },
    // minusNum (state, arg) {
    //   arg = arg || 1
    //   state.num -= arg
    // }
    // list2版本
    setArr (state, arg) {
      // arg.forEach(a => {
      //   state.arr.push(a)
      // })
      state.arr = arg
    }
  },
  actions: {
  // list版本
  //   addNum (store, arg) {
  //     store.commit('addNum', arg)
  //   },
  //   minusNum (store, arg) {
  //     store.commit('minusNum', arg)
  //   }
    // list2版本
    async loadArr (state, arg) {
      let arr = await (await fetch('http://localhost:8081/list')).json()
      state.commit('setArr', arr)
    }
  },
  getters: {
    // list版本用getters  适合同步
    a () {
      return 12
    },
    arr (state) {
      if (state.arr.length === 0) {
        store.dispatch('loadArr')
      }
      return state.arr
    }
  }
})

export default store
