import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.authService.signOut();
    this.router.navigateByUrl('/auth');
  }

}
