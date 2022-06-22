import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reservation_complete',
    templateUrl: './reservation_complete.page.html',
    styleUrls: ['./reservation_complete.page.scss'],
})
export class ReservationCompletePage implements OnInit {
    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    search()
    {
        this.router.navigate(['/search']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
