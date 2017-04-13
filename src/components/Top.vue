<template>
  <header class="top">
    <div class="logo-nav">
      <div class="icon-wrap"><a href="" class="icon">饿了么</a></div>
      <a href="">首页</a>
      <a href="">我的订单</a>
      <a href="">加盟合作</a>
      <nav class="nav-a">
        <a href="">
          <router-link to="/support">服务中心</router-link>
        </a>
        <a href="">
          <router-link to="/rule">规则中心</router-link>
        </a>
        <a href="">手机应用</a>
        <a href="">登录/注册</a>
      </nav>   
    </div>
    
    <h1>{{ msg }}</h1>
    
  </header>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Top'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
