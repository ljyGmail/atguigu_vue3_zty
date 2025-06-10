<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'

// 数据
let talkList = reactive([
  { id: 'vue01', title: '你今天有点怪，哪里怪?怪好看的!' },
  { id: 'vue02', title: '草莓、蓝莓、蔓越莓，今天想我了没?' },
  { id: 'vue03', title: '心里给你留了一块地，我的死心塌地' },
])

const loveTalkDB = [
  { id: 'vue04', title: '你的脸上有点东西，有什么?有点漂亮。' },
  { id: 'vue05', title: '我可以不为别人难过，但你不是别人，你是我的人。' },
  { id: 'vue06', title: '有些事不用在一晚内做完的，我们又不赶时间，可以每晚都做一做' },
  { id: 'vue07', title: '我在找一匹马。什么马?你的微信号码。' },
  { id: 'vue08', title: '你是我最爱的女孩，再多奶茶都不换那种。' },
  { id: 'vue09', title: '我怀疑你的本质是一本书，不然为什么让我越看越想睡。' },
]

// 方法
async function getLoveTalk() {
  /*
  // 发请求，下面这行的写法是: 连续解构赋值+重命名
  let {
    data: { content: title },
  } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  // 把请求回来的字符串，包装成一个对象
  let obj = { id: nanoid(), title }
  console.log(obj)
   */
  // 放到数组中
  // talkList.unshift(obj)
  talkList.unshift(loveTalkDB[Math.floor(Math.random() * loveTalkDB.length)])
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
