import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CreateVacancyComponent } from './component/vacancy/create-vacancy/create-vacancy.component';
import { StatusVacanciesComponent } from './component/vacancy/status-vacancies/status-vacancies.component';
import { ReserveVacancyComponent } from './component/vacancy/reserve-vacancy/reserve-vacancy.component';
import { DeleteVacancyComponent } from './component/vacancy/delete-vacancy/delete-vacancy.component';
import { RoleClientComponent } from './component/register-user/role-client/role-client.component';
import { RoleAdmComponent } from './component/register-user/role-adm/role-adm.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-vacancy', component: CreateVacancyComponent, canActivate: [AuthGuard] },
  { path: 'status-vacancies', component: StatusVacanciesComponent, canActivate: [AuthGuard] },
  { path: 'reserve-vacancy', component: ReserveVacancyComponent, canActivate: [AuthGuard] },
  { path: 'delete-vacancy', component: DeleteVacancyComponent, canActivate: [AuthGuard] },
  { path: 'register-client', component: RoleClientComponent },
  { path: 'register-admin', component: RoleAdmComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
