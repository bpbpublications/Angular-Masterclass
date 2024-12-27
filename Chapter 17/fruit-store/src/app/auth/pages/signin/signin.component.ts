import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-signin',
  template: `
    <div class="signin-container">
      <form (ngSubmit)="onSubmit()" class="signin-form">
        <label for="email" class="form-label">Email</label>
        <input id="email" [(ngModel)]="email" name="email" placeholder="Email" class="form-input">
        
        <label for="password" class="form-label">Password</label>
        <input id="password" [(ngModel)]="password" name="password" type="password" placeholder="Password" class="form-input">
        
        <button type="submit" class="submit-btn">Sign In</button>
      </form>
    </div>
  `,
  styleUrls: ['./signin.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class SignInPageComponent {
  email!: string;
  password!: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  onSubmit() {
    this.authService.signin(this.email, this.password)
      .subscribe({
        complete: () => {
          this.router.navigate(['/orders']);
        },
        error: error => {
          console.error('SignIn failed', error);
        }
      });
  }
}