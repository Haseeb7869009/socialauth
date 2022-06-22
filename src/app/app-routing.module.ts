import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

const routes: Routes = [
{
    path: '',
    redirectTo: 'onboard',
    pathMatch: 'full'
    },
    {
        path: 'onboard',
        loadChildren: () => import('./pages/onboard/onboard.module').then( m => m.OnboardPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    },
    {
        path: 'myaccount',
        loadChildren: () => import('./pages/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
    },
    {
        path: 'editprofile',
        loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
    },
    {
        path: 'search',
        loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
    },
    {
        path: 'detail',
        loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
    },
    {
        path: 'reservation',
        loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
    },
    {
        path: 'reservation_detail',
    loadChildren: () => import('./pages/reservation_detail/reservation_detail.module').then( m => m.ReservationDetailPageModule)
    },
    {
        path: 'reservation_confirmation',
        loadChildren: () => import('./pages/reservation_confirmation/reservation_confirmation.module').then( m => m.ReservationConfirmationPageModule)
    },
    {
        path: 'reservation_complete',
        loadChildren: () => import('./pages/reservation_complete/reservation_complete.module').then( m => m.ReservationCompletePageModule)
    },
    {
        path: 'delivery_batch',
        loadChildren: () => import('./pages/delivery_batch/delivery_batch.module').then( m => m.DeliveryBatchPageModule)
    },
    {
        path: 'batch_detail',
        loadChildren: () => import('./pages/batch_detail/batch_detail.module').then( m => m.BatchDetailPageModule)
    },
    {
        path: 'confirmed',
        loadChildren: () => import('./pages/confirmed/confirmed.module').then( m => m.ConfirmedPageModule)
    },
    {
        path: 'complete',
        loadChildren: () => import('./pages/complete/complete.module').then( m => m.CompletePageModule)
    },
    {
        path: 'my_deliveries',
        loadChildren: () => import('./pages/my_deliveries/my_deliveries.module').then( m => m.MyDeliveriesPageModule)
    },
    {
        path: 'my_delivery_detail',
        loadChildren: () => import('./pages/my_delivery_detail/my_delivery_detail.module').then( m => m.MyDeliveryDetailPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(
        private storageservice: StorageService,
        private storage: Storage,
        private router: Router
    )
    {
        this.check_login_status();
    }

    async check_login_status()
    {
        const data = await this.storage.get('loggedin');
        if(data != null)
        {
            this.router.navigate(['/home']);
        }
    }
}
