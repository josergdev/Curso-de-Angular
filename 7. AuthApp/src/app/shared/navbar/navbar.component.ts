import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {
    authService.handleAuthentication();
  }

  ngOnInit() {
  }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
