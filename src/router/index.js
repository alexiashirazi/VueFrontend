import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogInView from '../views/LogInView.vue';
import CreateAccount from '../views/CreateAccountView.vue';
import Leaderboard from "@/views/LeaderboardView.vue";
import TestimonialsView from "@/components/Testimonials.vue";
import MyGroups from "@/components/MyGroups.vue";
import MakeGroup from "@/components/MakeGroup.vue";
import MyPrizesView from "@/views/MyPrizesView.vue";
import BlogSection from '../components/BlogSection.vue'
import QuizView from '../views/QuizView.vue'
import CalendarView from '../views/CalendarView.vue';
import LeaderboardView from '../views/LeaderboardView.vue';
import AboutView from '../views/AboutView.vue';
import HomeUser from '../views/HomeUser.vue';
import Contact from '@/views/Contact.vue';
import Recommendation from '@/views/Recommendation.vue';

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
            path: '/leaderboard', // Default route
            name: 'LeaderBoard',
            component: Leaderboard, // Render BlogSection on the root path
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
        },
        {
            path: '/testimonials',
            name: 'Testimonials',
            component: TestimonialsView,
        },
        {
            path: '/mygroups',
            name: 'My Groups',
            component: MyGroups,
        },

        {
            path: '/make-group',
            name: 'Make Groups',
            component: MakeGroup,
        },
        {
            path: '/rewards',
            name: 'Rewards',
            component: MyPrizesView,
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: QuizView,
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: CalendarView,
        },
        {
            path: '/leaderboard',
            name: 'leader',
            component: LeaderboardView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },

        {
            path: '/home1',
            name: 'home1',
            component: HomeUser,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/recommendation',
            name: 'recommendation',
            component: Recommendation,
        }
    ],
});

export default router;
