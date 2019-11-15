<template lang="html">
    <div>
      {{state.num}}
      已选择：{{count}}件
      <ul>
        <ListItem v-for="item in items" :data="item" :key="item.id" :add="addOne" :minus="minusOne"/>
      </ul>
    </div>
</template>

<script>
import ListItem from './list-item'

export default {
  name: 'list',
  components: {ListItem},
  data () {
    return {
      items: [],
      count: 0,
      state: this.$store.state
    }
  },
  methods: {
    addOne () {
      this.count++
    },
    minusOne () {
      this.count--
    }
  },
  async mounted () {
    // 方式一 不需要async
    // this.$a('http://localhost:8081/list').then(res => {
    //   console.log(res)
    //   this.items = res.data
    // }, err => {
    //   console.log(err)
    // })
    // 方式二
    try {
      this.items = (await this.$a('http://localhost:8081/list')).data
    } catch (e) {
      alert('数据加载失败，请刷新重试！！！')
    }
    // 方式三
    // this.items = await (await fetch('http://localhost:8081/list')).json()
  }
}
</script>

<style scoped>

</style>
