import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDeliveryDetailPageRoutingModule } from './my_delivery_detail-routing.module';

import { MyDeliveryDetailPage } from './my_delivery_detail.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDeliveryDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyDeliveryDetailPage,HeaderComponent]
})
export class MyDeliveryDetailPageModule {}
