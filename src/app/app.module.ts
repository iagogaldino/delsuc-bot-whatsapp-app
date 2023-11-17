import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NewScheduleComponent } from './components/new-schedule/new-schedule.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TimeSelectorComponent } from './components/time-selector/time-selector.component';
import { AppRequestService } from './services/app-request.service';

const MATERIAL = [
  CommonModule, MatSidenavModule
  , MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule
  , CalendarComponent, TimeSelectorComponent, SchedulesComponent, HttpClientModule, MatProgressBarModule, MatSnackBarModule, ReactiveFormsModule]

const COMPONENTS = [NewScheduleComponent, SideNavComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MATERIAL,
    ReactiveFormsModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule
  ],
  exports:[],
  providers: [AppRequestService]
})
export class AppModule { }
