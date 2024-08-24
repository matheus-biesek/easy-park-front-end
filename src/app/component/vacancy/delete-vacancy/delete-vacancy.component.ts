import { Component } from '@angular/core';
import { DeleteVacancyService } from '../../../service/vacancy/delete-vacancy.service'; 

@Component({
  selector: 'app-delete-vacancy',
  templateUrl: './delete-vacancy.component.html',
  styleUrl: './delete-vacancy.component.css'
})
export class DeleteVacancyComponent {

  constructor(private deleteVacancyService: DeleteVacancyService) {}

  position: number | null = null;
  message: string | null = null;
  error: string | null = null;

  deleteVacancy(): void {
    if (this.position !== null) {
      this.deleteVacancyService.deleteVacancy(this.position).subscribe({
        next: (response) => {
          this.message = response;
          this.error = null;
        },
        error: (err) => {
          this.error = 'Failed to delete the vacancy. Please try again.';
          this.message = null;
        }
      });
    } else {
      this.error = 'Position is required.';
    }
  }
}
