import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reservation_detail',
    templateUrl: './reservation_detail.page.html',
    styleUrls: ['./reservation_detail.page.scss'],
})
export class ReservationDetailPage implements OnInit { 

    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }


    confirm()
    {
         this.router.navigate(['/reservation_confirmation']);
    }

    ngOnInit() 
    {

    }

}
