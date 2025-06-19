<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日我的自拍">
        <img :src="imageUrl" alt="我的自拍" />
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls />
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
  { id: 'vue04', name: '斗罗大陆' }
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
</style>
