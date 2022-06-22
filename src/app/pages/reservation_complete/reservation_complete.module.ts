import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationCompletePageRoutingModule } from './reservation_complete-routing.module';

import { ReservationCompletePage } from './reservation_complete.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationCompletePageRoutingModule,
    TranslateModule
  ],
  declarations: [ReservationCompletePage ,HeaderComponent]
})
export class ReservationCompletePageModule {}
