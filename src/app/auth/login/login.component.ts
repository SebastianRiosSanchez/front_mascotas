import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: String = "";
  loginForm = this.formBuilder.group({
    correo: ['sebastianrios@gmail.com', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required]
  });


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  get correo() {
    return this.loginForm.controls.correo
  }

  get contrasena() {
    return this.loginForm.controls.contrasena
  }

  // login() {
  //   if (this.loginForm.valid) {
  //     this.loginError = "";
  //     this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
  //       next: (userData) => {
  //         console.log(userData);
  //       },
  //       error: (errorData) => {
  //         console.error(errorData);
  //         this.loginError = errorData;
  //       },
  //       complete: () => {
  //         console.info("Login completo");
  //         this.router.navigateByUrl('/inicio');
  //         this.loginForm.reset();
  //       }
  //     })
  //   }
  //   else {
  //     this.loginForm.markAllAsTouched();
  //     alert("Error al ingresar los datos.");
  //   }
  // }



}
