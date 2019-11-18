<template>
  <div>
    <input v-for="(json,index) in msg" :key="index" type="button" value="按钮" @click="fn_switch(index)">
    <transition-group name="fade">
      <div class="box" v-for="(json,index) in msg" :key="index" v-if="json.show">{{index}}</div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'cmpHello',
  data () {
    return {
      msg: [
        {show: true},
        {show: true},
        {show: true},
        {show: true}
      ]
    }
  },
  methods: {
    fn_switch (index) {
      this.msg[index].show = !this.msg[index].show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    height: 100px;
    width: 100px;
    background-color: #ddd;
    margin: 10px;
  }
</style>
