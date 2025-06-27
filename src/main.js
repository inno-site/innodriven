import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Components from './components/Global/'
import './assets/css/tailwind.css'
import './assets/css/font.css'
import './assets/css/common.css'

const app = createApp(App)
app.use(router)
// app.use(Components);
app.mount('#app')
