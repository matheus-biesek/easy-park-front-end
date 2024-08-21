import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeleteUserService } from '../../service/delete-user.service'; 

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  deleteForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private deleteUserService: DeleteUserService
  ) {
    this.deleteForm = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.deleteForm.invalid) {
      return;
    }

    this.errorMessage = null;
    this.successMessage = null;

    this.deleteUserService.deleteUser(this.deleteForm.value.username).subscribe({
      next: () => {
        this.successMessage = 'Usuário deletado com sucesso!';
      },
      error: (error) => {
        this.errorMessage = 'Falha ao deletar o usuário!';
        console.error('Error:', error);
      },
    });
  }
}
