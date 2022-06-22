import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.page.html',
    styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    reservation()
    {
         this.router.navigate(['/reservation']);
    }

    detail()
    {
         this.router.navigate(['/reservation_detail']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
