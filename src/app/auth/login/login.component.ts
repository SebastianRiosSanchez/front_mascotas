import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/services/auth/LoginRequest';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: String = "";
  loginForm = this.formBuilder.group({
    correo: ['correodeprueba@gmail.com', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required]
  });


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (datoUsuario) => {
          console.log("Datos del usuario desde el fomulario de login: ", datoUsuario);
        },
        error: (datoError) => {
          console.log("Error: ", datoError);
          this.loginError = datoError;
        },
        complete: () => {
          console.info('Login completado');
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      });

    } else {
      this.loginForm.markAllAsTouched();
    }

  }

  registrar() {

  }


}
