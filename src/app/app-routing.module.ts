import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppSchedule } from './app-schedule/app-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', component: AppSchedule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
