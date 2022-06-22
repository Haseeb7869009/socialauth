import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-editprofile',
    templateUrl: './editprofile.page.html',
    styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

    constructor(
        public menuCtrl: MenuController,
        private router: Router,
        private location: Location,
    ) { }

    ngOnInit() 
    {

    }

    goback()
    {
        this.location.back();
    }

    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
    }

}
