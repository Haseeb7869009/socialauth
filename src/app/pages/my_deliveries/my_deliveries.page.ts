import { Component, OnInit } from '@angular/core';
import { MenuController ,ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
    selector: 'app-my_deliveries',
    templateUrl: './my_deliveries.page.html',
    styleUrls: ['./my_deliveries.page.scss'],
})
export class MyDeliveriesPage implements OnInit {


    constructor(
        public menuCtrl: MenuController,
        private router: Router,
        public actionSheetController: ActionSheetController,
        private mainserv: MainService,
    ) { }

    ngOnInit() 
    {

    }

    detail()
    {
         this.router.navigate(['/my_delivery_detail']);
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
                    text: this.mainserv.translateWord("tracking_id"),
                    icon: '',
                    data: 10,
                    handler: () => {
                      console.log('locker clicked');
                    }
                },
                {
                    text: this.mainserv.translateWord("time"),
                    icon: '',
                    data: 10,
                    handler: () => {
                      console.log('address clicked');
                    }
                },
                {
                    text: this.mainserv.translateWord("name"),
                    icon: '',
                    data: 10,
                    handler: () => {
                      console.log('city clicked');
                    }
                }
            ]
        });
        await actionSheet.present();

        const { role, data } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role and data', role, data);
  }

}
