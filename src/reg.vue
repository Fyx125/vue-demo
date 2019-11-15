<template>
  <div>
    <CmpHeader/>
    <form>
      用户：<input type="text" name="username"><br>
      密码：<input type="password" name="password"><br>
      <input type="button" name="submit" value="注册">
      <a href="#/">返回登录</a>
    </form>
    <CmpFooter/>
  </div>
</template>

<script>
import CmpHeader from './components/cmp-header'
import CmpFooter from './components/cmp-footer'

export default {
  name: 'Reg',
  components: {CmpFooter, CmpHeader},
  data () {
    return {
      key: 3
    }
  }
}
</script>

<style scoped>

</style>
