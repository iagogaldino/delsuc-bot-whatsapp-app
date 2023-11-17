import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AppService } from '../../services/app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarComponent } from '../calendar/calendar.component';
import { NewScheduleComponent } from '../new-schedule/new-schedule.component';
import { SchedulesComponent } from '../schedules/schedules.component';
import { TimeSelectorComponent } from '../time-selector/time-selector.component';
import { RoutesApp } from '../../models/enums/routes.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ MatToolbarModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, CalendarComponent, TimeSelectorComponent,
    SchedulesComponent,
    RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  // private service1: AppService = inject(AppService);
  constructor(private _router: Router) { }

  ngOnInit(): void {
    // console.log('logged', this.service1.logged)
  }

  goRegister(): void{
    this._router.navigate([RoutesApp.REGISTER]);
  }

  onClickEnter(): void{
    // this._router.navigate([RoutesApp.DASHBOARD]);
    const path = `${RoutesApp.DASHBOARD}/${RoutesApp.CONNECT}`;
    this._router.navigate([path]);
  }

}
