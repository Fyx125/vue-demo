import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

// Test Suites 测试集
describe('HelloWorld.vue', () => {
  // test 测试项
  it('should render correct contents', () => {
    // 让组件独立存在
    const Constructor = Vue.extend(HelloWorld)
    // 挂载到虚拟DOM
    const vm = new Constructor().$mount()
    // 测试逻辑
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
