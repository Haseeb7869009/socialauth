import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delivery_batch',
  templateUrl: './delivery_batch.page.html',
  styleUrls: ['./delivery_batch.page.scss'],
})
export class DeliveryBatchPage implements OnInit {

    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    confirm()
    {
         this.router.navigate(['/batch_detail']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
