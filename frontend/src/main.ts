import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import './style.scss';
import App from './App.vue';

import HomeView from './pages/home.vue';
import LoginView from './pages/login.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
