import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm:  FormGroup ;
    passwordtype:string = 'password';
    response:any;
    spiner:boolean = false;
    constructor(
        public menuCtrl: MenuController,
        private router: Router,
        private http: HTTP,
        private mainservice: MainService,
        private storageservice: StorageService,
        
    ) { }

    ngOnInit() 
    {
       this.loginForm = new FormGroup({
            email: new FormControl('user_test@vivipost.com',[Validators.email]),
            password: new FormControl('54a0642bb33abad97e53d3ac4be530818a7f737500c62f533fc6a587ee5f6084609ab26d910c6a54a5cfca1a14e00ff6e15df2f91b59a8ef5ce0daaeeccf17f5',[Validators.required])
        });
    }

    get email() { return this.loginForm.get('email')!; }
    get password() { return this.loginForm.get('password')!; }

    home()
    {
        this.router.navigate(['/home']);
    }

    ionViewWillEnter()
    {
        this.storageservice.set('loggedin','ok');
        this.menuCtrl.enable(false);
    }

    showpass()
    {
        if(this.passwordtype == 'password')
        {
            this.passwordtype = 'text';
        }
        else
        {
            this.passwordtype = 'password';
        }
        
    }

    onSubmit()
    {

        if(this.loginForm.status == "VALID")
        {
            this.spiner = true;
            var token = this.mainservice.token();
            let url = this.mainservice.api_url()+'/auth/login';
            let current_lang = this.mainservice.current_lang();

            var DataToPost = {
                language:current_lang,
                user:this.email.value,
                pass:this.password.value,
                mobile:'',
                tecnico:false
            }
            var headers = { 
                Authorization: 'token: '+token
            }

            this.http.post(url,DataToPost,headers).then((response) => {
                this.response = JSON.parse(response.data);
                if(this.response.mensaje_return.ERROR == false)
                {

                    var stored = JSON.stringify(this.response.result);
                    this.storageservice.set('loggedin',stored);
                    this.spiner = false;
                    this.home();
                }
                else
                {
                    this.spiner = false;
                    if(this.response.mensaje_return.CODE == '1202')
                    {
                        this.mainservice.showtoast('Email or Password is invalid','error');
                    }
                }

            }).catch(error => {
                alert(error.status);
                alert(error.error); 
                alert(error.headers);
                this.spiner = false;
            });;

        }
        else
        {
            this.mainservice.showtoast('Email or Password is invalid','error');
        }
    }

}
