import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  // registroForm: FormGroup;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    //private fb: FormBuilder
  ) {

    //this.registroForm = this.fb.group({
    //nombre: ['', Validators.required],
    //email: ['', [Validators.required, Validators.email]],
    //password: ['', Validators.required]
    //}
    //);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
    });

    loading.present();
  }

  onSubmit() {
    const nombreInput = document.getElementById('nombre') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (nombreInput && emailInput && passwordInput) {
      const nombre = nombreInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;

      if (!this.validateEmail(email)) {

        alert("Por favor, ingresa un correo electrónico válido.");
        return;
      }

      console.log('Formulario enviado correctamente:', nombre, email, password);
      // Redirige al usuario después de un exitoso registro
      this.router.navigate(['/login']);
    } else {
      alert("Por favor, completa todos los campos.");
    }

    

    

    // onSubmit() {
    //if (this.registroForm.valid) {

    //  console.log('Formulario enviado correctamente:', this.registroForm.value);
    //  this.router.navigate(['/login']); 
    //} else {
    //  console.log('Formulario invalido:')
    //}
  }
  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
