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
    path: '/',
    exact: true,
    render: null,
    main: () => <Guest />
  },
  {
    path: '/home-student',
    exact: false,
    render: null,
    main: () => <Student />
  },
  {
    path: '/home-tutor',
    exact: false,
    render: null,
    main: () => <Tutor />
  },
  {
    path: '/profile-student',
    exact: false,
    render: null,
    main: () => <StudentProfile />
  },
  {
    path: '/profile-tutor',
    exact: false,
    render: null,
    main: () => <TutorProfile />
  },
  {
    path: '/list-tutors',
    exact: false,
    render: null,
    main: () => <TutorList />
  },
  {
    path: '/list-students',
    exact: false,
    render: null,
    main: () => <StudentList />
  },
  {
    path: '/specialties-tutor',
    exact: false,
    render: null,
    main: () => <SpecialtyList />
  },
  {
    path: '/contracts-tutor',
    exact: false,
    render: null,
    main: () => <ContractTutor />
  },
  {
    path: '/contracts-student',
    exact: false,
    render: null,
    main: () => <ContractStudent />
  },
  {
    path: '/list-subjects',
    exact: false,
    render: ({ location }) => <SubjectList location={location} />,
    main: null
  },
  {
    path: '/login',
    exact: false,
    render: null,
    main: () => <Login />
  },
  {
    path: '/register',
    exact: false,
    render: null,
    main: () => <Register />
  },
  {
    path: '/register-tutor',
    exact: false,
    render: null,
    main: () => <RegisterTutor />
  },
  {
    path: '/roles',
    exact: false,
    render: null,
    main: () => <RolePicking />
  },
  {
    path: '/logout',
    exact: false,
    render: null,
    main: () => <Logout />
  },
  {
    path: '/chat',
    exact: false,
    render: null,
    main: () => <Chat />
  },
  {
    path: '/contract',
    exact: false,
    render: null,
    main: () => <Contract />
  },
  {
    path: '',
    exact: false,
    render: null,
    main: () => <NotFound />
  }
];

export default routes;
