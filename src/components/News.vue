<template>
  <div class="news">
    <ul>
      <li><a href="#">新闻001</a></li>
      <li><a href="#">新闻002</a></li>
      <li><a href="#">新闻003</a></li>
      <li><a href="#">新闻004</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 新闻 */
.news{
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul{
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
</style>
