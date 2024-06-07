import { Injectable } from '@angular/core';
import { LoginRequest } from './LoginRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rutaBackend = "";


  constructor(
    private http: HttpClient
  ) { }

  login(datos: LoginRequest) {
    //Petición al back para usuario
    console.log("Datos enviados: ", datos);
    const peticion = this.http.get("http://localhost:8080/cliente");
    console.log("peticion: ", peticion);
  }

}
