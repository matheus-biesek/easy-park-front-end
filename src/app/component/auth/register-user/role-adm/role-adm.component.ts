import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../service/auth.service';

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
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      role: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    } as AbstractControlOptions); // Adicione esta linha
    
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
    if (this.registerForm.invalid) {
      return;
    }

    this.errorMessage = null;
    
    //Criar o serviço para fazer a requisição que o ADM faz para criar usuários
    this.authService.registerUserAdmin(this.registerForm.value).subscribe({
      next: (response) => {
        alert("Usuário criado com sucesso!\nFaça logout para acessar a nova conta.");
      },
      error: (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
      },
    });
  }
}
