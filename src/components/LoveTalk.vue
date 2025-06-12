<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useTalkStore } from '@/store/loveTalk'

const talkStore = useTalkStore()
talkStore.$subscribe((mutation, state) => {
  console.log('talkStore里面保存的数据发生了变化', mutation, state)
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

// 方法
function getLoveTalk() {
  // talkStore.getATalk()
  talkStore.talkList.push({ id: 'vue04', title: '当初像生来容易，日后如生离难事' })
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
