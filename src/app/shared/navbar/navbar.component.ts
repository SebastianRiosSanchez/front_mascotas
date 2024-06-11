import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  usuarioLogueado: boolean = false;

  constructor(
    private loginService: LoginService
  ) { }


  ngOnInit(): void {
    this.loginService.usuarioLogueado.subscribe({
      next: (userloginOn) => {
        this.usuarioLogueado = userloginOn;
      }
    });
  }
  ngOnDestroy(): void {
    this.loginService.dataUsuarioLogueado.unsubscribe();
    this.loginService.usuarioLogueado.unsubscribe();

  }



}
