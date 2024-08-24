import { Component, OnInit } from '@angular/core';
import { StatusVacanciesService } from '../../../service/vacancy/status-vacancies.service';
import { Vacancy } from '../../../interface/vacancy.model';

@Component({
  selector: 'app-status-vacancies',
  templateUrl: './status-vacancies.component.html',
  styleUrls: ['./status-vacancies.component.css']
})
export class StatusVacanciesComponent implements OnInit {

  constructor(private statusVacanciesService: StatusVacanciesService) {}

  vacancies: Vacancy[] = [];

  ngOnInit(): void {
    this.statusVacanciesService.statusVacancies().subscribe({
      next: (response: Vacancy[]) => {
        this.vacancies = response;
      },
      error: (err) => {
        console.error('Erro ao carregar status das vagas', err);
      }
    });
  }

  // Retorna a classe CSS com base no status
  getStatusClass(status: string): string {
    switch (status) {
      case 'reserved':
        return 'status-reserved';
      case 'available':
        return 'status-available';
      case 'busy':
        return 'status-busy'; // Adiciona a classe para o status busy
      default:
        return 'status-unknown'; // Adiciona uma classe para status desconhecido
    }
  }

  // Traduz o status para português
  translateStatus(status: string): string {
    switch (status) {
      case 'reserved':
        return 'Reservada';
      case 'available':
        return 'Disponível';
      case 'busy':
        return 'Ocupada'; // Ajusta para o status correto ou mantém como 'Ocupada'
      default:
        return 'Desconhecido';
    }
  }
}
