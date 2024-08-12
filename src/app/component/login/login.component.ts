import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
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
        // Suponha que a resposta contenha um token e redirecione para a página principal
        localStorage.setItem('authToken', response.token); // Ajuste conforme a resposta da API
        this.router.navigate(['/']); // Redireciona para a página principal ou outra página
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
