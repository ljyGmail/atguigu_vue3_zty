<template>
  <div class="person">
    <h2>汽车信息: 一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br />
    <h2>歌曲列表:</h2>
    <ul>
      <li v-for="s in songs" :key="s.id">{{ s.name }}</li>
    </ul>
    <button @click="changeFirstSong">修改第一个歌曲的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue'
// 数据
let car = ref({ brand: '奔驰', price: 100 })

let songs = ref([
  { id: 'beyond', name: '昔日舞曲' },
  { id: '周华健', name: '你现在还好吗' },
  { id: '周杰伦', name: '发如雪' },
])

let obj = reactive({ x: 999 })

console.log(car)
console.log(obj)

// 方法
function changePrice() {
  car.value.price += 10
  console.log(car.value.price)
}

function changeFirstSong() {
  songs.value[0].name = '逝去日子'
}
</script>
<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
