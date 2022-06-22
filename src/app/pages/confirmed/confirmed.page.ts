import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirmed',
    templateUrl: './confirmed.page.html',
    styleUrls: ['./confirmed.page.scss'],
})
export class ConfirmedPage implements OnInit {

    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    complete()
    {
         this.router.navigate(['/complete']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
