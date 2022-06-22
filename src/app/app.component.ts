import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public appPages = [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'On Board', url: '/onboard', icon: 'home' },
        { title: 'Profile', url: '/myaccount', icon: 'paper-plane' }
    ];

    constructor(
        private translate: TranslateService,
        private storage: Storage
    ) 
    {
        this.setLanguage();
    }

    setLanguage() {
        this.translate.use("en");
    }

    async ngOnInit() {
        await this.storage.create();
    }
}
