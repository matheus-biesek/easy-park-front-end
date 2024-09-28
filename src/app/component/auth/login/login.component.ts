import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service'; 
import { Router } from '@angular/router';
import { SessionService } from '../../../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.errorMessage = null;

    this.authService.loginAuth(this.loginForm.value).subscribe({
      next: (response) => {
        if (response && response.token) {
          //Criar variavel que sera enviada a role do usuario para uma api de verificação a role
          this.sessionService.login(response.token);
          this.router.navigate(['/status-vacancies']); 
        } else {
          this.errorMessage = 'Resposta inválida do servidor.';
        }
      },
      error: (error) => {
        this.errorMessage = 'Login falhou. Verifique suas credenciais.';
      }
    });
  }
}
