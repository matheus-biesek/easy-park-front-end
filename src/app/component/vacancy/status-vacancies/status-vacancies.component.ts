import { Component, OnInit } from '@angular/core';
import { StatusVacanciesService } from '../../../service/vacancy/status-vacancy/status-vacancies.service';
import { Vacancy } from '../../../interface/vacancy.model';

@Component({
  selector: 'app-status-vacancies',
  templateUrl: './status-vacancies.component.html',
  styleUrl: './status-vacancies.component.css'
})

export class StatusVacanciesComponent implements OnInit {

  constructor(private StatusVacanciesService: StatusVacanciesService) {}

  vacancies: Vacancy[] = [];

  ngOnInit(): void {
    this.StatusVacanciesService.statusVacancies().subscribe({
      next: (response: Vacancy[]) => {
        this.vacancies = response;
      },
      error: (err) => {
        console.error('Erro ao carregar status das vagas', err);
      }
    });
  }
}
