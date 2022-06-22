import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationDetailPageRoutingModule } from './reservation_detail-routing.module';

import { ReservationDetailPage } from './reservation_detail.page';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [ReservationDetailPage,HeaderComponent]
})
export class ReservationDetailPageModule {}
