import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';

//Language
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function LanguageLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
//Storage Module
import { IonicStorageModule } from '@ionic/storage-angular';
//Cordova Plugins
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@NgModule({
    declarations: [AppComponent,SidemenuComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({ swipeBackEnabled: false ,mode: 'ios' }),
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (LanguageLoader),
                deps: [HttpClient]
            }
        }),
        IonicStorageModule.forRoot()
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        HTTP
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
