<template>
  <div class="header">
    <ul>
      <li>首页</li>
      <li>产品</li>
      <li>关于</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmpHeader'
}
</script>

<style scoped>
  .header ul{
    overflow: hidden;
  }
  .header ul li{
    float: left;
    list-style: none;
  }
</style>
