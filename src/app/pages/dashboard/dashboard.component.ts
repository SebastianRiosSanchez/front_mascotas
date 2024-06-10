import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Usuario } from 'src/app/services/auth/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuarioLogueado: boolean = true;
  data?: Usuario;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.UsuarioLogueado.subscribe({
      next: (userLogin => {
        this.usuarioLogueado = userLogin;
      })
    });
    this.loginService.datosUsuario.subscribe({
      next: (userData => {
        this.data = userData;
        console.log('Datos del usuario: ', userData);

      })
    });
  }


}
