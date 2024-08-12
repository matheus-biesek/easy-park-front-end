import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})


export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;

    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/status-vacancies']); 
        } else {
          this.errorMessage = 'Resposta inválida do servidor.';
        }
      },
      error: (error) => {
        this.errorMessage = 'Login falhou. Verifique suas credenciais.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
