import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loadingCtrl: LoadingController) {
  }


  onLogin() {
    if (this.email === 'admin@canchapp.cl' && this.password === '123456' ){
      this.router.navigate(['/home']);
      alert('Bienvenido Admin')
    }else{
      alert('Email o contraseña incorrecta');
    }
  }

  onResetPassword() {
    this.router.navigate(['/reset-password']);
  } 

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
    });

    loading.present();
  }

}
