import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDeliveryDetailPage } from './my_delivery_detail.page';

const routes: Routes = [
  {
    path: '',
    component: MyDeliveryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDeliveryDetailPageRoutingModule {}
