import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(datos: any) {
    console.log("Datos enviados: ", datos);
  }

}
