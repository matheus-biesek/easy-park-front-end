import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-role-user',
  templateUrl: './role-user.component.html',
  styleUrls: ['./role-user.component.css']
})
export class RoleUserComponent {
  registerForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator // Mantenha a referência correta ao validador
    } as AbstractControlOptions); // Adicione isso
    
  }

  // Validador customizado para verificar se as senhas coincidem
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { 'mismatch': true };
    }
    return null;
  }  

  onSubmit(): void {
    console.log('Submit button clicked');
    if (this.registerForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;

    this.authService.registerUserClient(this.registerForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        this.authService.login(response.token);
        this.router.navigate(['/status-vacancies']);
      },
      error: (error) => {
        console.error('Error occurred:', error);
        this.errorMessage = 'Registro falhou. Verifique os dados e tente novamente.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}

