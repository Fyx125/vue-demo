<template lang="html">
  <div>
    <ul>
      <ListItem v-for="item in items" :data="item" :key="item.id" :add="addOne" :minus="minusOne"/>
    </ul>
    {{a}}
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
    }
  },
  mounted () {
    // this.$store.dispatch('loadArr')  手动触发action  可异步
  },
  computed: {
    items () {
      // return this.$store.state.arr
      return this.$store.getters.arr
    }
  }
}
</script>

<style scoped>

</style>
