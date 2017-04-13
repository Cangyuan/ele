<template>
  <div id="app">
    <top></top>
    <v-main></v-main>
    <hello></hello>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Top from './components/Top'
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    'top':Top,
    'v-main':Main
  }
}
</script>
<style>

</style>
