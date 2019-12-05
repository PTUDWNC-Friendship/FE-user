import React from 'react';
import Guest from '../components/home/guest';
import Student from '../components/home/student';
import Tutor from '../components/home/tutor';
import Login from '../components/login/login';
import NotFound from '../components/notfound/notfound';
import RegisterStudent from '../components/register/student';
import RegisterTutor from '../components/register/tutor';
import Logout from '../components/logout/logout'

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
        path: "/login",
        exact: false,
        main: () => <Login />
    },
    {
        path: "/register-student",
        exact: false,
        main: () => <RegisterStudent />
    },
    {
        path: "/register-tutor",
        exact: false,
        main: () => <RegisterTutor />
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