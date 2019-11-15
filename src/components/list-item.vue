<template lang="html">
  <div>
    <li>
      <h3><input type="checkbox" v-model="checked"/>{{item.name}}</h3>
      <span>￥{{item.price}}</span>
      <span>月售：{{item.sales}}</span>
      <input type="button" value="加++" @click="addNum"/>
      <input type="button" value="减--" @click="minusNum"/>
    </li>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  data () {
    return {
      item: {},
      checked: false
    }
  },
  mounted () {
    this.item = this.$attrs.data
  },
  methods: {
    addNum () {
      this.$store.dispatch('addNum', 10)
    },
    minusNum () {
      this.$store.dispatch('minusNum', 5)
    }
  },
  watch: {
    checked () {
      if (this.checked) {
        this.$attrs.add()
      } else {
        this.$attrs.minus()
      }
    }
  }
}
</script>

<style scoped>

</style>
