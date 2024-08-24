import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateRoleUserService } from '../../../service/auth/update-role-user.service';

@Component({
  selector: 'app-role-update',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  updateForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private updateRoleUserService: UpdateRoleUserService,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      username: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.updateForm.invalid) {
      return;
    }

    this.errorMessage = null;
    this.successMessage = null;

    this.updateRoleUserService.updateRole(this.updateForm.value).subscribe({
      next: () => {
        this.successMessage = 'Role do usuário atualizada com sucesso!';
      },
      error: (error) => {
        this.errorMessage = 'Falha ao atualizar a role do usuário!';
        console.error('Error:', error); // Adicione mais detalhes para depuração
      },
    });
    
  }
}