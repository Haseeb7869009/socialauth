import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-myaccount',
    templateUrl: './myaccount.page.html',
    styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    edit()
    {
         this.router.navigate(['/editprofile']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
