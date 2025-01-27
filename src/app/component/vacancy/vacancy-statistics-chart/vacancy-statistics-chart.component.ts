import { Component, AfterViewInit } from '@angular/core';
import { VacancyStatisticsService } from '../../../service/vacancy-statistics.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-vacancy-statistics-chart',
  templateUrl: './vacancy-statistics-chart.component.html',
  styleUrl: './vacancy-statistics-chart.component.css'
})
export class VacancyStatisticsChartComponent implements AfterViewInit {
  weeklyVacancyOccupied: number[][] = [];
  turnoverRates: number[][] = [];
  averageDuration: number[][] = [];
  vacancyOccupiedWeek: number[][] = [];
  averageDurationWeek: number[][] = [];

  constructor(private vacancyStatisticsService: VacancyStatisticsService) {}

  ngAfterViewInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.vacancyStatisticsService.getWeeklyVacancyOccupied().subscribe(data => {
      this.weeklyVacancyOccupied = data;
      this.createChart('vacancyOccupiedChart', this.weeklyVacancyOccupied, "Taxa de Ocupação Diária de Vagas no Estacionamento - Un");
    });

    this.vacancyStatisticsService.getWeeklyTurnoverRate().subscribe(data => {
      this.turnoverRates = data;
      this.createChart('turnoverRateChart', this.turnoverRates, "Taxa de Rotatividade Diária de Vagas no Estacionamento - Un");
    });
  }

  createChart(chartId: string, data: number[][], title: string, isWeekly: boolean = false): void {
    const canvasElement = document.getElementById(chartId) as HTMLCanvasElement | null;
    const ctx = canvasElement?.getContext('2d');
  
    if (ctx) {
      const datasets = data.map((row, index) => ({
        label: `Vaga ${index + 1}`, // Nome da vaga (ou outra identificação)
        data: row,
        backgroundColor: `rgba(${75 + index * 30}, ${192 - index * 30}, 192, 0.2)`,
        borderColor: `rgba(${75 + index * 30}, ${192 - index * 30}, 192, 1)`,
        borderWidth: 1
      }));

      const labels = isWeekly ? ['Semana atual'] : ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  
      new Chart(ctx, {
        type: 'bar', // ou 'line', 'pie', etc.
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 20, // Aumenta o tamanho das letras da legenda
                }
              }
            },
            title: {
              display: true,
              text: title,
              font: {
                size: 30, // Aumenta o tamanho do título
              }
            },
            tooltip: {  // Adiciona a configuração de tooltip
              bodyFont: {
                size: 16,  // Aumenta o tamanho do texto na tooltip
              },
              titleFont: {
                size: 18,  // Aumenta o tamanho do título da tooltip
              },
              padding: 10,  // Espaçamento interno da tooltip
              boxPadding: 10,  // Espaçamento em torno do conteúdo da tooltip
            }
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 20, // Aumenta o tamanho das letras no eixo X
                }
              }
            },
            y: {
              ticks: {
                font: {
                  size: 20, // Aumenta o tamanho das letras no eixo Y
                }
              }
            }
          }
        }
      });
    } else {
      console.error(`Não foi possível obter o contexto do canvas: ${chartId}`);
    }
  }
}  
