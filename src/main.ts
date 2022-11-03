import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import router from './router/index'
import { createPinia } from 'pinia'
import './styles/index.scss'

createApp(App).use(router).use(createPinia()).mount('#app')
