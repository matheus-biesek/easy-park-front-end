import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserAdmService } from '../../../../service/auth/register-user-adm.service';

@Component({
  selector: 'app-role-adm',
  templateUrl: './role-adm.component.html',
  styleUrls: ['./role-adm.component.css']
})
export class RoleAdmComponent {
  registerForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterUserAdmService,
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

    this.errorMessage = null;
    
    //Criar o serviço para fazer a requisição que o ADM faz para criar usuários
    this.registerService.registerUserAdmin(this.registerForm.value).subscribe({
      next: (response) => {
        alert("Usuário criado com sucesso!\nFaça logout para acessar a nova conta.");
      },
      error: (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
      },
    });
  }
}
