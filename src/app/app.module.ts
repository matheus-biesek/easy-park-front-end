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
import { LoginComponent } from './component/auth/login/login.component'; 
import { RoleUserComponent } from './component/auth/register-user/role-user/role-user.component'; 
import { RoleAdmComponent } from './component/auth/register-user/role-adm/role-adm.component'; 
import { authInterceptorFn } from './service/interceptors/authInterceptor.service'; 
import { AuthGuard } from './auth.guard';
import { TopComponent } from './component/navbar/nav-adm/nav-adm.component'; 
import { NavFooterComponent } from './component/footer/nav-footer.component';
import { UpdateRoleComponent } from './component/auth/update-role-user/update-role.component'; 
import { NavUserComponent } from './component/navbar/nav-user/nav-user.component'; 
import { NavLoginComponent } from './component/navbar/nav-login/nav-login.component';
import { DeleteUserComponent } from './component/auth/delete-user/delete-user.component';
import { AdmAlertComponent } from './component/adm/adm-alert/adm-alert.component';
import { ParkingBarrierComponent } from './component/parking-barrier/parking-barrier.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CreateVacancyComponent,
    StatusVacanciesComponent,
    ReserveVacancyComponent,
    DeleteVacancyComponent,
    LoginComponent,
    RoleUserComponent,
    RoleAdmComponent,
    TopComponent,
    NavFooterComponent,
    UpdateRoleComponent,
    NavUserComponent,
    NavLoginComponent,
    DeleteUserComponent,
    AdmAlertComponent,
    ParkingBarrierComponent
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
