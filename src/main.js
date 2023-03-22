import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import axios from '../src/plugins/axiosInstance.js'
//createApp(App).mount('#app')
//app.config.globalProperties.$axios = axios;  //配置axios的全局引用
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
