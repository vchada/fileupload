import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService
  ) {}

  login(): void {
    this.authService.authenticate(this.username, this.password)
      .subscribe(
        () => {
          this.router.navigate(['/file-upload']);
        },
        (error: any) => {
          this.snackBar.open('Invalid username or password', 'Close', { duration: 3000 });
        }
      );
  }
}
