import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  public appPages = [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'On Board', url: '/onboard', icon: 'home' },
        { title: 'Delivery Batch', url: '/delivery_batch', icon: 'send' },
        { title: 'My Deliveries', url: '/my_deliveries', icon: 'send' },
        { title: 'Search Page', url: '/search', icon: 'search' },
        { title: 'Profile', url: '/myaccount', icon: 'paper-plane' },
        { title: 'Logout', url: '/login', icon: 'log-out' }
    ];
    constructor() { }

    ngOnInit() {}

}
