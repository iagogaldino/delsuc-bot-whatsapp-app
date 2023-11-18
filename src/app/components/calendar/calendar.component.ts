import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { MatButtonModule } from '@angular/material/button';
declare global {
  interface Array<T> {
    chunk(size: number): T[][];
  }
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  currentDate!: moment.Moment;
  daysInMonth: any;
  selectedDate!: moment.Moment;

  @Output() onSelectDate = new EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = moment();
    this.generateCalendar();
  }

  generateCalendar(): void {
    const startOfMonth = moment(this.currentDate).startOf('month');
    const endOfMonth = moment(this.currentDate).endOf('month');
    const daysInMonth = endOfMonth.diff(startOfMonth, 'days') + 1;

    const daysArray: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    // Split the array into weeks
    const weeks: number[][] = [];
    while (daysArray.length > 0) {
      weeks.push(daysArray.splice(0, 7));
    }

    this.daysInMonth = weeks;
  }

  isSelectedDay(day: number): boolean {
    return this.selectedDate && this.selectedDate.date() === day;
  }

  selectDate(day: number): void {
    this.selectedDate = moment(this.currentDate).date(day);
    const selectedDate = this.selectedDate.format('YYYY-MM-DD');
    this.onSelectDate.emit(selectedDate)
  }

  nextMonth(): void {
    this.currentDate.add(1, 'month');
    this.generateCalendar();
  }

  prevMonth(): void {
    this.currentDate.subtract(1, 'month');
    this.generateCalendar();
  }
}
