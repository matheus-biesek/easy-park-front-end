import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Ocorreu um erro:', error.message);
    
    let errorMessage = 'Algo deu errado; por favor, tente novamente mais tarde.';

    if (error.status === 0) {
      errorMessage = 'Erro de conexão: verifique sua rede.';
    } else if (error.status >= 500) {
      errorMessage = 'Erro no servidor; por favor, tente mais tarde.';
    } else if (error.status === 404) {
      errorMessage = 'Recurso não encontrado.';
    } else if (error.status === 400) {
      errorMessage = 'Requisição inválida. Verifique os dados e tente novamente.';
    }

    return throwError(() => new Error(errorMessage));
  }
}
