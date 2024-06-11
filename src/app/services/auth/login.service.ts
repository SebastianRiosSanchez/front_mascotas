import { Injectable } from '@angular/core';
import { LoginRequest } from './LoginRequest';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLogueado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataUsuarioLogueado: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({ id: 0, correo: '' });

  constructor(
    private http: HttpClient
  ) { }

  login(datos: LoginRequest): Observable<Usuario> {
    console.log('Datos desde login.service: ', datos);
    return this.http.get<Usuario>('././assets/data.json').pipe(
      tap((datosUsuario: Usuario) => {
        this.dataUsuarioLogueado.next(datosUsuario);
        this.usuarioLogueado.next(true);
      }),
      catchError(this.manejoError)
    );
  }

  //Manejo de errores
  private manejoError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`Se ha producido un error: ${error.error}`);
    } else {
      console.error(`El backenFd ha retornado:  ${error.status} y el error: ${error.error}`);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get datosUsuario(): Observable<Usuario> {
    return this.dataUsuarioLogueado.asObservable();
  }

  get UsuarioLogueado(): Observable<boolean> {
    return this.usuarioLogueado.asObservable();
  }

}
