import { Component } from '@angular/core';
import { faCalendarDays, faArrowLeft, faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import { Payment } from '../model/payment';

import { PaymentsService } from '../services/payments.service';
import {
  CalendarView,
  CalendarDateFormatter
} from 'angular-calendar';
import { CustomDateFormatter } from '../custom-date-formatter.provider';

@Component({
  selector: 'app-schedule',
  templateUrl: './app-schedule.component.html',
  styleUrls: ['./app-schedule.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})

export class AppSchedule {
  faCalendar = faCalendarDays;
  faArrowLeft = faArrowLeft;
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;

  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  locale: string = 'es';

  protected payments: Payment[] = [];


  constructor(private paymentService: PaymentsService) { }

  ngOnInit() {
    this.payments = this.paymentService.getPayments();
  }
}