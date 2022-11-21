import config from '~/config';
import AdminLayout from '~/layouts/AdminLayout';
import AuthLayout from '~/layouts/AuthLayout';
import ClassSubject from '~/pages/admin/ClassSubject/ClassSubject';
import CreateSchedule from '~/pages/admin/CreateSchedule/CreateSchedule';
import Dashboard from '~/pages/admin/Dashboard';
import Faculty from '~/pages/admin/Faculty/Faculty';
import Program from '~/pages/admin/Program/Program';
import Room from '~/pages/admin/Room/Room';
import Student from '~/pages/admin/Student/Student';
import Subject from '~/pages/admin/Subject/Subject';
import Teacher from '~/pages/admin/Teacher/Teacher';
import Team from '~/pages/admin/Team/Team';
import Login from '~/pages/auth/Login';
import CourseRegistration from '~/pages/course_registration/CourseRegistration';
import Home from '~/pages/home/Home';
import Profile from '~/pages/profile/Profile';
import ScheduleWeek from '~/pages/schedule/ScheduleWeek';
import Test from '~/pages/test/Test';
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
    {
        path: config.routes.test,
        component: Test,
    },
];

export const adminPrivateRoute = [
    {
        path: config.routes.adminDashboard,
        component: Dashboard,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminFaculty,
        component: Faculty,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminProgram,
        component: Program,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminRoom,
        component: Room,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminStudent,
        component: Student,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminTeacher,
        component: Teacher,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminTeam,
        component: Team,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminSubject,
        component: Subject,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminClassSubject,
        component: ClassSubject,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminCreateSchedule,
        component: CreateSchedule,
        layout: AdminLayout,
    },
];
