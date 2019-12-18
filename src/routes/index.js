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
import TutorList from '../components/tutor/list';
import SpecialtyList from '../components/tutor/specialties';
import StudentList from '../components/tutor/students';
import ContractTutor from '../components/tutor/contracts';
import StudentProfile from '../components/profile/student';


import ContractStudent from '../components/student/contracts';


import SubjectList from '../components/subject/list';

import Logout from '../components/logout/logout';
import Chat from '../components/ui-components/ChatComponent/chat';
import Contract from '../components/contract/contract';

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
        path: "/list-tutors",
        exact: false,
        main: () => <TutorList />
    },
    {
        path: "/list-students",
        exact: false,
        main: () => <StudentList />
    },
    {
        path: "/specialties-tutor",
        exact: false,
        main: () => <SpecialtyList />
    },
    {
        path: "/contracts-tutor",
        exact: false,
        main: () => <ContractTutor />
    },
    {
        path: "/contracts-student",
        exact: false,
        main: () => <ContractStudent />
    },
    {
        path: "/list-subjects",
        exact: false,
        main: () => <SubjectList />
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
        path: "/chat",
        exact: false,
        main: () => <Chat />
    },
    {
        path: "/contract",
        exact: false,
        main: () => <Contract />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    },
];

export default routes;
