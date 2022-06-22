import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-batch_detail',
    templateUrl: './batch_detail.page.html',
    styleUrls: ['./batch_detail.page.scss'],
})
export class BatchDetailPage implements OnInit {

    constructor(
        public menuCtrl: MenuController,
        private router: Router,
    ) { }

    ngOnInit() 
    {

    }

    confirm()
    {
         this.router.navigate(['/confirmed']);
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
