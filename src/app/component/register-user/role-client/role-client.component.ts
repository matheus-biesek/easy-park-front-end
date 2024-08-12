import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserClientService } from '../../../service/register-user/role-client/register-user-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-client',
  templateUrl: './role-client.component.html',
  styleUrls: ['./role-client.component.css'] // Corrija aqui para styleUrls
})
export class RoleClientComponent {
  registerForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterUserClientService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator // Validador customizado
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
        // Suponha que o redirecionamento seja para uma página de login
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = 'Registro falhou. Verifique os dados e tente novamente.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
