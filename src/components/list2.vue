<template lang="html">
  <div>
    <ul>
      <ListItem v-for="item in items" :data="item" :key="item.id" :add="addOne" :minus="minusOne"/>
    </ul>
    {{a}}
    <p>对store的modules的测试--用户名：{{name}}--年龄：{{age}}--<span :title="time|mkTime">时间：{{time|mkTime}}</span></p>
    <input type="button" value="设置年龄" @click="setAge">
  </div>
</template>

<script>
import ListItem from './list-item'

export default {
  name: 'list2',
  components: {ListItem},
  data () {
    return {
      a: this.$store.getters.a
      // items: this.$store.state.arr
      // state: this.$store.state
    }
  },
  methods: {
    addOne () {
      this.count++
    },
    minusOne () {
      this.count--
    },
    setAge () {
      this.$store.dispatch('setAge', 20)
    }
  },
  mounted () {
    // this.$store.dispatch('loadArr')  手动触发action  可异步
  },
  computed: {
    items () {
      // return this.$store.state.arr
      return this.$store.getters.arr
    },
    name () {
      // return this.$store.state.arr
      return this.$store.state.user.name
    },
    age () {
      // return this.$store.state.arr
      return this.$store.state.user.age
    },
    time () {
      // return this.$store.state.arr
      return this.$store.state.user.time
    }
  },
  filters: {
    mkTime (t) {
      let now = Date.now()
      let diff = Math.floor((now - t) / 1000)
      if (diff < 60) {
        return '现在'
      } else if (diff < 3600) {
        return Math.floor(diff / 60) + '分钟前'
      } else if (diff < 86400) {
        return Math.floor(diff / 3600) + '小时前'
      } else if (diff < 86400 * 30) {
        return Math.floor(diff / 86400) + '天前'
      } else {
        let oTime = new Date(t)
        return `${oTime.getFullYear()}-${oTime.getMonth() + 1}-${oTime.getDate()}`
      }
    }
  }
}
</script>

<style scoped>

</style>
