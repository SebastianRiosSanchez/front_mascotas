import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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



}
