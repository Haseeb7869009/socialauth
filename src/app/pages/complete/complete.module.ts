import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletePageRoutingModule } from './complete-routing.module';

import { CompletePage } from './complete.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletePageRoutingModule,
    TranslateModule
  ],
  declarations: [CompletePage,HeaderComponent]
})
export class CompletePageModule {}
