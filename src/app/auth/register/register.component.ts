import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompromisedPasswordService } from 'src/app/shared/services/compromised-password/compromised-password.service';
import { MatchService } from 'src/app/shared/services/match/match.service';
import { RegisterField } from '../models/register-field.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  registerField: typeof RegisterField = RegisterField;
  constructor(
    private readonly matchService: MatchService,
    private readonly compromisedPasswordService: CompromisedPasswordService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  buildForm(): void {
    this.registerForm = new FormGroup({
      [RegisterField.EMAIL]: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.email,
        ]),
      [RegisterField.PASSWORD]: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ],
        [
          this.compromisedPasswordService.validate
        ]),
      [RegisterField.PASSWORD_CONFIRMATION]: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ])
    }, {
      validators: [this.matchService.validate]
    });
  }

  ngOnInit(): void {
    if (this.authService.userData) {
      this.router.navigateByUrl('/home');
    }
    this.buildForm();
  }

  async register(): Promise<void> {
    if (this.registerForm.invalid) {
      return;
    }
    const { email, password } = this.registerForm.value;
    try {
      let result = await this.authService.signUp(email, password);
      this.router.navigateByUrl('/auth/login');
    } catch (e) {
      this.registerForm.setErrors({ registrationFailed: true });
    }
  }

}
