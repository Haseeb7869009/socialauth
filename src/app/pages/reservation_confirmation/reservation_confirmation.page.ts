import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reservation_confirmation',
    templateUrl: './reservation_confirmation.page.html',
    styleUrls: ['./reservation_confirmation.page.scss'],
})
export class ReservationConfirmationPage implements OnInit {
   constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    complete()
    {
         this.router.navigate(['/reservation_complete']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
