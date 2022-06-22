import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryBatchPageRoutingModule } from './delivery_batch-routing.module';

import { DeliveryBatchPage } from './delivery_batch.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryBatchPageRoutingModule,
    TranslateModule
  ],
  declarations: [DeliveryBatchPage ,HeaderComponent]
})
export class DeliveryBatchPageModule {}
