import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { animation } from '@angular/animations';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    data: { animation: 'DashboardPage' }
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin', 'user'], animation: 'ProfilePage' } // Example role-based access
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, data: { animation: 'NotFoundPage' } } // 404 Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
