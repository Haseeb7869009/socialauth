import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationCompletePage } from './reservation_complete.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationCompletePageRoutingModule {}
