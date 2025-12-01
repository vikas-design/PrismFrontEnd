import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { ForgotPassword } from './forgot-password/forgot-password';

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
