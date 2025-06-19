<template>
  <div class="game">
    <h2>游戏列表</h2>
    <slot :games="games" x="哈哈" y="你好"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { reactive } from 'vue'

let games = reactive([
  { id: 'vue01', name: '英雄联盟' },
  { id: 'vue02', name: '王者荣耀' },
  { id: 'vue03', name: '红色警戒' },
  { id: 'vue04', name: '斗罗大陆' },
])
</script>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>
