import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loadingCtrl: LoadingController) { }


  onLogin(){
    console.log('Email:',this.email);
    console.log('Password:', this.password)

    this.router.navigate(['/home']);
  }

  

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
    });

    loading.present();
  }

}
