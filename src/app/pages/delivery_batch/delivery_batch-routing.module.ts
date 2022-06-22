import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryBatchPage } from './delivery_batch.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryBatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryBatchPageRoutingModule {}
