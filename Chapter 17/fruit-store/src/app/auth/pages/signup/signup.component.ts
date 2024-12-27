import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  template: `
    <div class="signup-container">
      <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="signup-form">
        <label for="email" class="form-label">Email</label>
        <input id="email" formControlName="email" placeholder="Email" class="form-input">
        
        <label for="password" class="form-label">Password</label>
        <input id="password" formControlName="password" type="password" placeholder="Password" class="form-input">
        
        <button type="submit" [disabled]="signupForm.invalid" class="submit-btn">Sign Up</button>
      </form>
    </div>
  `,
  styleUrls: ['./signup.component.css'],
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class SignUpPageComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(
        response => {
          console.log('Registration successful', response);
          // Navigate to signin page or automatically sign in the user
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }
}