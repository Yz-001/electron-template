// stores/counter.js
//demo 可删
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义状态
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})