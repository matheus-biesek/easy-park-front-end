import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateRoleService } from '../../../service/update-role/update-role.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-role-update',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css'] // Corrigido para 'styleUrls'
})
export class UpdateRoleComponent implements OnInit {
  updateForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private updateRoleService: UpdateRoleService,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      username: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Initialize if needed
  }

  onSubmit(): void {
    if (this.updateForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;
    this.successMessage = null;

    this.updateRoleService.updateRole(this.updateForm.value).subscribe({
      next: () => {
        this.successMessage = 'Role updated successfully.';
        setTimeout(() => this.router.navigate(['/dashboard']), 2000); // Redireciona após 2 segundos
      },
      error: (error) => {
        this.errorMessage = 'Failed to update role. Please try again.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
