import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchDetailPage } from './batch_detail.page';

const routes: Routes = [
  {
    path: '',
    component: BatchDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatchDetailPageRoutingModule {}
