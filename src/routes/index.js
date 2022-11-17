import config from '~/config';
import AuthLayout from '~/layouts/AuthLayout';
import Login from '~/pages/auth/Login';
import CourseRegistration from '~/pages/course_registration/CourseRegistration';
import Home from '~/pages/home/Home';
import Profile from '~/pages/profile/Profile';
import ScheduleWeek from '~/pages/schedule/ScheduleWeek';
import UmbrellaProgram from '~/pages/umbrella_program/UmbrellaProgram';

export const publicRoutes = [
    {
        path: config.routes.login,
        component: Login,
        layout: AuthLayout,
    },
];

export const privateRoute = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.me,
        component: Profile,
    },
    {
        path: config.routes.umbrellaPrograms,
        component: UmbrellaProgram,
    },
    {
        path: config.routes.courseRegistration,
        component: CourseRegistration,
    },
    {
        path: config.routes.scheduleWeek,
        component: ScheduleWeek,
    },
];
