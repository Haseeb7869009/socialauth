import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-onboard',
    templateUrl: './onboard.page.html',
    styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
    slideOpts = {
        initialSlide: 0,
        speed: 400,
        autoplay: {
            delay: 5000,
        },
    };
    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    login()
    {
         this.router.navigate(['/login']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(false);
    }

}
