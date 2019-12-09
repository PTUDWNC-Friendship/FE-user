import React from 'react';

import Guest from '../components/home/guest';
import Student from '../components/home/student';
import Tutor from '../components/home/tutor';

import Login from '../components/login/login';

import NotFound from '../components/notfound/notfound';

import Register from '../components/register/register';
import RegisterTutor from '../components/register/tutor';
import RolePicking from '../components/login/role';

import TutorProfile from '../components/profile/tutor';
import StudentProfile from '../components/profile/student';

import Logout from '../components/logout/logout';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Guest />
    },
    {
        path: "/home-student",
        exact: false,
        main: () => <Student />
    },
    {
        path: "/home-tutor",
        exact: false,
        main: () => <Tutor />
    },
    {
        path: "/profile-student",
        exact: false,
        main: () => <StudentProfile />
    },
    {
        path: "/profile-tutor",
        exact: false,
        main: () => <TutorProfile />
    },
    {
        path: "/login",
        exact: false,
        main: () => <Login />
    },
    {
        path: "/register",
        exact: false,
        main: () => <Register />
    },
    {
        path: "/register-tutor",
        exact: false,
        main: () => <RegisterTutor />
    },
    {
        path: "/roles",
        exact: false,
        main: () => <RolePicking />
    },
    {
        path: "/logout",
        exact: false,
        main: () => <Logout />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    },
];

export default routes;
