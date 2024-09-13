import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  email: string = '';

  constructor(private router: Router, private loadingCtrl: LoadingController) {}

  onResetPassword() {
    if (this.email) {
      alert(`Revisa tu bandeja en ${this.email} para recuperar tu contraseña.`);
      this.router.navigate(['/login']);
    } else {
      alert('Correo electrónico inexistente.');
    }
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
    });

    loading.present();
  }
}