// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';

const app = createApp(App);
app.use(store);
app.use(router);
app.mixin(mixins); // 믹스인 전역 등록
app.mount('#app');
app.directive('focus', {
    mounted(el) {
        el.focus();
    } 
})