import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginField } from '../models/login-field.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginField: typeof LoginField = LoginField;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  buildForm(): void {
    this.loginForm = new FormGroup({
      [LoginField.EMAIL]: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.email
        ]
      ),
      [LoginField.PASSWORD]: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
      )
    })
  }

  ngOnInit(): void {
    this.buildForm()
  }

  async login(): Promise<void> {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.value;

    try {
      let result = await this.authService.signIn(email, password);
      this.router.navigateByUrl('/home');
    } catch (e) {
      this.loginForm.setErrors({ loginFailed: true });
    }
  }

}
