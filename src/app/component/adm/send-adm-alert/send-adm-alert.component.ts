import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParkingLotService } from '../../../service/parking-lot.service';

@Component({
  selector: 'app-adm-alert',
  templateUrl: './send-adm-alert.component.html',
  styleUrl: './send-adm-alert.component.css'
})
export class AdmAlertComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private parkingLotService: ParkingLotService
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
  
    // Extraindo o valor da propriedade 'admAlert'
    const alertMessage = this.loginForm.get('admAlert')?.value;
  
    // Enviando o valor para o serviço
    this.parkingLotService.sendAdmAlert(alertMessage).subscribe({
      next: (response) => {
        window.alert(response);
      },
      error: (error) => {
        console.error('Erro ao enviar o alerta!', error);
        window.alert('Erro ao enviar o alerta!');
      }
    });
  }
}
