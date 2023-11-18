import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewScheduleComponent } from './components/new-schedule/new-schedule.component';
import { RegisterComponent } from './components/register/register.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RoutesApp } from './models/enums/routes.enum';
import { ConnectPhoneComponent } from './components/connect-phone/connect-phone.component';

export const routes: Routes = [
  {path: '', title: 'Login', component: LoginComponent},
  {path: RoutesApp.REGISTER, title: 'Cadastro de conta', component: RegisterComponent},

  {path: 'dashboard', title: 'Dashboard', component: SideNavComponent, children: [
      {path: RoutesApp.SCHEDULES, title: 'Agendamentos', component: SchedulesComponent},
      {path: RoutesApp.NEW_SCHEDULE, title: 'Nova campanha', component: NewScheduleComponent},
      {path: RoutesApp.CONNECT, title: 'Conectar aparelho', component: ConnectPhoneComponent},
    ]
  },

];
