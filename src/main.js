import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import TestComp from './components/Test.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/test/:type', component: TestComp }],
});

createApp(App).use(router).mount('#app');
