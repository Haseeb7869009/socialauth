import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    @Input() type:any = 1;
    @Input() title:any = '';
    translatetitle:any = '';

    constructor(
        private mainserv: MainService,
        private location: Location,
    ) {

    }


    goback()
    {
        this.location.back();
    }

    ngOnInit() {
        this.translatetitle = '';
        this.translatetitle = this.mainserv.translateWord(this.title)
    }

}
