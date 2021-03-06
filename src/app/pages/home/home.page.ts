import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    profile()
    {
         this.router.navigate(['/myaccount']);
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
