import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CreateVacancyComponent } from './component/vacancy/create-vacancy/create-vacancy.component';
import { StatusVacanciesComponent } from './component/vacancy/status-vacancies/status-vacancies.component';
import { ReserveVacancyComponent } from './component/vacancy/reserve-vacancy/reserve-vacancy.component';
import { DeleteVacancyComponent } from './component/vacancy/delete-vacancy/delete-vacancy.component';
import { RoleClientComponent } from './component/register-user/role-client/role-client.component';
import { RoleAdmComponent } from './component/register-user/role-adm/role-adm.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-vacancy', component: CreateVacancyComponent },
  { path: 'status-vacancies', component: StatusVacanciesComponent },
  { path: 'reserve-vacancy', component: ReserveVacancyComponent },
  { path: 'delete-vacancy', component: DeleteVacancyComponent },
  { path: 'register-client', component: RoleClientComponent },
  { path: 'register-admin', component: RoleAdmComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redireciona para a página de login por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
