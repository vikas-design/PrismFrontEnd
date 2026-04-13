import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { SignUp } from '../components/sign-up/sign-up';
import { ForgotPassword } from '../components/forgot-password/forgot-password';

export const routes: Routes = [

    {
        path: '',
        component: Login   // 👈 Default page
    },
    {
        path: 'sign-up',
        component: SignUp
    },
    {
        path: 'forgot-password',
        component: ForgotPassword
    }
];
