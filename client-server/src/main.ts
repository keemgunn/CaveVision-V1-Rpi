import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router/router';
import App from './App.vue';

// ====== MAIN APP CONTAINER
const app = createApp(App);

// ====== STORE
app.use(createPinia());

// ====== DEV SETTINGS
const process_env = (process.env.NODE_ENV) as string;
app.provide('process_env', process_env);

// ====== ROUTER
app.use(router);

// ====== FINALLY, MOUNT
app.mount('#app');