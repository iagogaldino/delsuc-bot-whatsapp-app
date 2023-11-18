import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRequestService } from '../../services/app-request.service';
import { Schedule } from '../../models/interfaces/responses';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [CommonModule, CalendarComponent, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss'
})
export class SchedulesComponent implements OnInit {

  ngOnInit(): void {
    this.getCalendar();
  }

  public appRequestService: AppRequestService = inject(AppRequestService);

  schedules: Schedule[] = []

  getCalendar(): void {
    this.appRequestService.getCalendar().subscribe((response) => {
      this.schedules = response;
    });
  }

  deleteCalendar(item: Schedule): void {
    this.appRequestService.deleteCalendar(item.key).subscribe((response) => {
      const f = this.schedules.filter(schedules => schedules.key != item.key);
      this.schedules = f;
    });
  }

}
