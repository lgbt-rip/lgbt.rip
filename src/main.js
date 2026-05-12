import './assets/style.css'

import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

//其他頁面
import Home from './routes/home.vue'
import NotFound from './routes/404.vue'

const app = createApp(App)

// 聲明全局變量，建議使用 $ 前綴以區分普通屬性
app.config.globalProperties.$Title = 'HosinoNeko'
app.config.globalProperties.$HeadImageX64px = 'https://avatars.githubusercontent.com/u/177436503?v=4&size=64'

//路由表
const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)//注冊路由
app.mount('#app')
