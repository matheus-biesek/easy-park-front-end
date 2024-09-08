import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmAlertService } from '../../../service/adm/adm-alert.service';

@Component({
  selector: 'app-adm-alert',
  templateUrl: './adm-alert.component.html',
  styleUrl: './adm-alert.component.css'
})
export class AdmAlertComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private admAlertService: AdmAlertService,// criar serviço para adicionar alerta do adm
  ) {
    this.loginForm = this.fb.group({
      admAlert: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.errorMessage = null;

    this.admAlertService.sendAdmAlert(this.loginForm.value).subscribe({

      next: (response) => {
        window.alert(response);
      },
      error: (error) => {
        console.error('Erro ao criar a vaga!', error);
        window.alert('Erro ao criar a vaga!');
      }
    });
  }
}
