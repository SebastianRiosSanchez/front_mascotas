import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm = this.formBulder.group({
    nombreCliente: [Validators.required],
    apellidoCleinte: [Validators.required],
    direccionCliente: [Validators.required],
    ccCliente: [Validators.required],
    emailCliente: [Validators.required, Validators.email],
    passCliente: [Validators.required],
  });

  constructor(
    private formBulder: FormBuilder,
    private router: Router
  ) {

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


  //Registro
  register() {

    if (this.registerForm.valid) {
      console.log('Datos del formulario: ', this.register);

    }

  }




}
