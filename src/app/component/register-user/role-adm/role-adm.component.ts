import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserClientService } from '../../../service/register-user/role-client/register-user-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-adm',
  templateUrl: './role-adm.component.html',
  styleUrls: ['./role-adm.component.css']
})
export class RoleAdmComponent {
  registerForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterUserClientService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      role: ['', [Validators.required]] // Novo campo para o papel do usuário
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Validador customizado para verificar se as senhas coincidem
  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { 'mismatch': true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;

    this.registerService.registerUserClient(this.registerForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/status-vacancies']);
      },
      error: (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
