import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Import Pinia
import '@coreui/coreui/dist/css/coreui.min.css';

const app = createApp(App);


// Create and use Pinia
const pinia = createPinia();
app.use(pinia);

// Use Vue Router
app.use(router);

app.mount('#app');
