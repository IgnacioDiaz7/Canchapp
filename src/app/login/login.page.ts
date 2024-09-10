import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  loginForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loadingCtrl: LoadingController, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[A-Z])[A-Za-z0-9]+$')
        ]
      ]
    });
  }


  onLogin() {
    if (this.loginForm.valid) {
      console.log('Credencial válida', this.loginForm.value);
    } else {
      console.log('Credencial inválida');
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
    });

    loading.present();
  }

}
