<template>
  <div class="catalog">
    <h1><p>目录</p></h1>
    <ul>
      <li><router-link to="/htmlToImg">html转图片 （使用html2canvas）</router-link></li>
      <li><router-link to="/about">js预览pdf</router-link></li>
      <li><router-link to="/about">预览图片</router-link></li>
      <li><router-link to="/about">预览视频</router-link></li>
      <li><router-link to="/about">播放音频</router-link></li>
      <li><router-link to="/about">录制音频</router-link></li>
      <li><router-link to="/about">预览office</router-link></li>
    </ul>
  </div>
</template>
<script setup>
import { reactive,ref } from 'vue'
const obj = reactive({
  foo: ref(0)
})
console.log(obj.foo)
let {foo} = obj //bad
let foo1 = obj.foo //bad
function increment() {
  obj.foo++;
  foo++;
  foo1++
}
</script>

<style lang="scss" scoped>
h1{
  p{
    color: #333;
    font-size: 28px;
  }
}
</style>