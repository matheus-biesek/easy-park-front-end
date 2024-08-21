import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVacancyComponent } from './component/vacancy/create-vacancy/create-vacancy.component';
import { StatusVacanciesComponent } from './component/vacancy/status-vacancies/status-vacancies.component';
import { ReserveVacancyComponent } from './component/vacancy/reserve-vacancy/reserve-vacancy.component';
import { DeleteVacancyComponent } from './component/vacancy/delete-vacancy/delete-vacancy.component';
import { LoginComponent } from './component/login/login.component';
import { RoleClientComponent } from './component/register-user/role-client/role-client.component';
import { RoleAdmComponent } from './component/register-user/role-adm/role-adm.component';
import { authInterceptorFn } from './service/interceptors/authInterceptor.service'; 
import { AuthGuard } from './auth.guard';
import { TopComponent } from './component/navbar/nav-top/top.component';
import { NavFooterComponent } from './component/navbar/nav-footer/nav-footer.component';
import { UpdateRoleComponent } from './component/update/role/update-role.component';
import { NavTopComponent } from './component/navbar/client/nav-top/nav-top.component';
import { NavLoginComponent } from './component/navbar/nav-login/nav-login.component';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVacancyComponent,
    StatusVacanciesComponent,
    ReserveVacancyComponent,
    DeleteVacancyComponent,
    LoginComponent,
    RoleClientComponent,
    RoleAdmComponent,
    TopComponent,
    NavFooterComponent,
    UpdateRoleComponent,
    NavTopComponent,
    NavLoginComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    provideHttpClient(
      withFetch(), // Habilita fetch
      withInterceptors([authInterceptorFn]) // Aplica o interceptor
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
