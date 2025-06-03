<template>
  <div class="person">
    <h2>汽车信息: 一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br />
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="s in songs" :key="s.id">{{ s.name }}</li>
    </ul>
    <button @click="changeFirstSong">修改第一个歌曲的名字</button>
    <hr />
    <h2>测试: {{ obj.a.b.c.d }}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive } from 'vue'
// 数据
let car = reactive({ brand: '奔驰', price: 100 })

console.log(car)
console.log(Proxy)

let songs = reactive([
  { id: 'beyond', name: '昔日舞曲' },
  { id: '周华健', name: '你现在还好吗' },
  { id: '周杰伦', name: '发如雪' },
])

let obj = reactive({
  a: {
    b: {
      c: {
        d: 666,
      },
    },
  },
})

// 方法
function changePrice() {
  car.price += 10
  console.log(car.price)
}

function changeFirstSong() {
  songs[0].name = '逝去日子'
}

function changeObj() {
  obj.a.b.c.d = 999
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

li {
  font-size: 20px;
}
</style>
