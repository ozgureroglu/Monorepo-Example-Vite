<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld1 from 'app-1/HelloWorld'
import HelloWorld2 from 'app-2/HelloWorld'
import HelloWorld3 from 'app-3/HelloWorld'
</script>

<template>
  <div><h1>Shell Application</h1></div>
  <div>This section will hold the exported application components</div>
  <div style="border:1px solid red; margin-bottom: 10px;">
    App1
    <HelloWorld1 msg="test-1"></HelloWorld1>
  </div>
  <div style="border:1px solid blue; margin-bottom: 10px;">
    App2
    <HelloWorld2 msg="test-2"></HelloWorld2>
  </div>
  <div style="border:1px solid cyan; margin-bottom: 10px;">
    App3
    <HelloWorld3 msg="test-3"></HelloWorld3>
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
