<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </Category>
      <Category>
        <template #s2>
          <img :src="imageUrl" alt="我的自拍" />
        </template>
        <template #s1>
          <h2>今日我的自拍</h2>
        </template>
      </Category>
      <Category>
        <template #s2>
          <video :src="videoUrl" controls />
        </template>
        <template #s1>
          <h2>今日影视推荐</h2>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from 'vue'

let games = reactive([
  { id: 'vue01', name: '英雄联盟' },
  { id: 'vue02', name: '王者荣耀' },
  { id: 'vue03', name: '红色警戒' },
  { id: 'vue04', name: '斗罗大陆' },
])

let imageUrl = ref('/images/myself.jpg')
let videoUrl = ref('/images/movie.mp4')
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>
