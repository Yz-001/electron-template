<template>
  <div class="b-solid cs">标题</div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '../../stores/demo'
  import { useTitle } from '@vueuse/core' 

  useTitle('这里游')

  const counter = useCounterStore()
  console.log('counter: ', counter)
  counter.count++
  // 编辑器会有代码提示 
  counter.$patch({ count: counter.count + 1 })
  // 也可以使用action来代替
  counter.increment()
</script>

<style lang="scss" scoped>
.cs{
  color:$demo;
}
</style>