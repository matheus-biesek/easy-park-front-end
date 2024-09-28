import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component'; 
import { CreateVacancyComponent } from './component/vacancy/create-vacancy/create-vacancy.component';
import { StatusVacanciesComponent } from './component/vacancy/status-vacancies/status-vacancies.component';
import { DeleteVacancyComponent } from './component/vacancy/delete-vacancy/delete-vacancy.component';
import { RoleUserComponent } from './component/auth/register-user/role-user/role-user.component';
import { AuthGuard } from './auth.guard';
import { UpdateRoleComponent } from './component/auth/update-role-user/update-role.component'; 
import { RoleGuard } from './role.guard';
import { DeleteUserComponent } from './component/auth/delete-user/delete-user.component';
import { ParkingBarrierComponent } from './component/parking-barrier/parking-barrier.component';
import { AdmAlertComponent } from './component/adm/send-adm-alert/send-adm-alert.component';
import { StatusAdmAlertComponent } from './component/adm/status-adm-alert/status-adm-alert.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-vacancy', component: CreateVacancyComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'status-vacancies', component: StatusVacanciesComponent, canActivate: [AuthGuard] }, // USER E ADMIN
  { path: 'delete-vacancy', component: DeleteVacancyComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'register-client', component: RoleUserComponent },
  { path: 'update-role', component: UpdateRoleComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'delete-user', component: DeleteUserComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'parking-barrier', component: ParkingBarrierComponent, canActivate: [AuthGuard] }, // USER E ADMIN
  { path: 'status-adm-alert', component: StatusAdmAlertComponent, canActivate: [AuthGuard] }, // USER E ADMIN
  { path: 'adm-alert', component: AdmAlertComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'ADMIN' } },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
