import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDeliveriesPageRoutingModule } from './my_deliveries-routing.module';

import { MyDeliveriesPage } from './my_deliveries.page';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDeliveriesPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyDeliveriesPage,HeaderComponent]
})
export class MyDeliveriesPageModule {}
