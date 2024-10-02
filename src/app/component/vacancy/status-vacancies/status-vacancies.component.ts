import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vacancy } from '../../../interface/vacancy.model';
import { VacancyService } from '../../../service/vacancy.service';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-status-vacancies',
  templateUrl: './status-vacancies.component.html',
  styleUrls: ['./status-vacancies.component.css']
})
export class StatusVacanciesComponent implements OnInit, OnDestroy {

  vacancies: Vacancy[] = [];
  subscription: Subscription | undefined;

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    // Chamada inicial para carregar o status das vagas imediatamente
    this.loadVacanciesStatus();

    // Inicia um loop a cada 3 segundos (3000 ms)
    this.subscription = interval(3000).pipe(
      // Faz a requisição a cada 3 segundos
      switchMap(() => this.vacancyService.statusVacancies())
    ).subscribe({
      next: (response: Vacancy[]) => {
        this.vacancies = response.sort((a, b) => a.position - b.position);
      },
      error: (err) => {
        console.error('Erro ao carregar status das vagas', err);
      }
    });
  }

  // Método para carregar o status das vagas
  private loadVacanciesStatus(): void {
    this.vacancyService.statusVacancies().subscribe({
      next: (response: Vacancy[]) => {
        this.vacancies = response.sort((a, b) => a.position - b.position);
      },
      error: (err) => {
        console.error('Erro ao carregar status das vagas', err);
      }
    });
  }

  ngOnDestroy(): void {
    // Cancela a assinatura quando o componente for destruído para evitar vazamentos de memória
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Retorna a classe CSS com base no status
  getStatusClass(status: string): string {
    switch (status) {
      case 'reserved':
        return 'status-reserved';
      case 'available':
        return 'status-available';
      case 'busy':
        return 'status-busy';
      default:
        return 'status-unknown';
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
        return 'Ocupada';
      default:
        return 'Desconhecido';
    }
  }
}
