import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { CalendarComponent } from '../calendar/calendar.component';
import { TimeSelectorComponent } from '../time-selector/time-selector.component';
import { SchedulesComponent } from '../schedules/schedules.component';
import { NewScheduleComponent } from '../new-schedule/new-schedule.component';
import { Router, RouterOutlet } from '@angular/router';
import { RoutesApp } from '../../models/enums/routes.enum';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
routesApp = RoutesApp;
constructor(private _route: Router) {}

  onClickBtMenu(routeName: RoutesApp): void {
    const path = `${RoutesApp.DASHBOARD}/${routeName}`;
    this._route.navigate([path]);
  }

  onClickExit(): void {
    this._route.navigate([RoutesApp.LOGIN]);
  }

}
