<template>
  <div id="app">
    <top></top>
    <v-main></v-main>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <side-bar></side-bar>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Top from './components/Top'
import Main from './components/Main'
import sideBar from './components/sideBar'

export default {
  name: 'app',
  components: {
    'top':Top,
    'v-main':Main,
    'side-bar':sideBar
  }
}
</script>
<style>

</style>
