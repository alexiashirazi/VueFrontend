import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogInView from '../views/LogInView.vue';
import CreateAccount from '../views/CreateAccountView.vue';
import BlogSection from '../components/BlogSection.vue'
import QuizView from '../views/QuizView.vue'
import CalendarView from '../views/CalendarView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: LogInView,
        },
        {
            path: '/createAccount',
            name: 'createAccount',
            component: CreateAccount,
        },
        {
            path: '/blog', // Default route
            name: 'Blog',
            component: BlogSection, // Render BlogSection on the root path
        },
        {
          path: '/quiz',
          name:'quiz',
          component: QuizView,
        },
        {
          path: '/calendar',
          name:'calendar',
          component: CalendarView,
        },
    ],
});

export default router;
