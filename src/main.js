// import './assets/main.css'
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令

app.directive("img-lazy",{
  mounted (el, binding) {
    //el: 指令绑定的那个元素 img
    // binding: binding.value 指令等于号后面绑定的表达式的值 图片url
    console.log(el, binding.value)
  }
})
