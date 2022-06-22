import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(
        private translate: TranslateService,
        private toastController: ToastController
    ) { }

    translateWord(words)
    {
        var data = '';
        this.translate.get(words).subscribe(
        (value) => 
            {
                data =  value;
            }
        )
        return data;
    }

    api_url()
    {
        return "https://bkn-ssl-dev-vivipost.vivipost.com/server/mobile";
    }

    token()
    {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjU0MjcwNzEwfQ.lwX4QRUju9eB8FS4Ww1cyvweSF4yxx7jqx9cz4VkHd8';
    }
    current_lang()
    {
        return this.translate.currentLang;
    }

    showtoast(msg,clasds)
    {
         this.toastController.create({
              message: msg,
              cssClass:clasds,
              duration: 3000
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
              console.log('Loading dismissed! after 2 Seconds');
            });
         });
    }
}
