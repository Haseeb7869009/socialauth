import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationConfirmationPageRoutingModule } from './reservation_confirmation-routing.module';

import { ReservationConfirmationPage } from './reservation_confirmation.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationConfirmationPageRoutingModule,
    TranslateModule
  ],
  declarations: [ReservationConfirmationPage ,HeaderComponent]
})
export class ReservationConfirmationPageModule {}
