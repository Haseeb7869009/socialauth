import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatchDetailPageRoutingModule } from './batch_detail-routing.module';

import { BatchDetailPage } from './batch_detail.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatchDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [BatchDetailPage,HeaderComponent]
})
export class BatchDetailPageModule {}
