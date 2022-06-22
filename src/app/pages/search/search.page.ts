import { Component, OnInit } from '@angular/core';
import { MenuController ,ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../../services/main.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


    constructor(
        public menuCtrl: MenuController,
        private router: Router,
        public actionSheetController: ActionSheetController,
        private location: Location,
        private mainserv: MainService,
    ) { }

    ngOnInit() 
    {

    }

    detail()
    {
         this.router.navigate(['/detail']);
    }
    
    goback()
    {
        this.location.back();
    }



    ionViewWillEnter()
    {
        this.menuCtrl.enable(true);
        
    }

    async presentActionSheet() 
    {
        const actionSheet = await this.actionSheetController.create({
            header: this.mainserv.translateWord("filter_by"),
            cssClass: 'custom-action',
            buttons: [
                {
                    text: this.mainserv.translateWord("locker"),
                    icon: '',
                    data: 10,
                    handler: () => {
                      console.log('locker clicked');
                    }
                },
                {
                    text: this.mainserv.translateWord("address"),
                    icon: '',
                    data: 10,
                    handler: () => {
                      console.log('address clicked');
                    }
                },
                 {
                    text: this.mainserv.translateWord("city"),
                    icon: '',
                    data: 10,
                    handler: () => {
                      console.log('city clicked');
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                      console.log('Cancel clicked');
                    }
                }
            ]
        });
        await actionSheet.present();

        const { role, data } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role and data', role, data);
  }

}
