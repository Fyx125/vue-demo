<template>
  <div>
    <CmpHeader/>
    <form>
      用户：<input type="text" name="username"><br>
      密码：<input type="password" name="password"><br>
      <input type="button" name="submit" value="登录">
      <a href="#/reg">我要注册</a>
    </form>
    <CmpFooter/>
  </div>
</template>

<script>
import CmpHeader from '@/components/cmp-header'
import CmpFooter from '@/components/cmp-footer'
export default{
  name: 'Login',
  components: {CmpFooter, CmpHeader}
}
</script>

<style scoped>

</style>
