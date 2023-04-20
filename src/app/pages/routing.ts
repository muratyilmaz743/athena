import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: '',
    data: { layout: 'light-sidebar' },
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./sign-in/sign-in.component').then((m) => m.SignInComponent),
      },
      {
        path: 'register-user',
        loadChildren: () =>
          import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          ),
      },
      {
        path: 'verify-email-address',
        loadChildren: () =>
          import('./verify-email/verify-email.component').then(
            (m) => m.VerifyEmailComponent
          ),
      },

      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

export { Routing };
