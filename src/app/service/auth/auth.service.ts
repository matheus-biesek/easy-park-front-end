import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserRole(): string | null {
    const token = localStorage.getItem('authToken');

    if (!token) {
      return null;
    }

    try {
      const payload = this.parseJwt(token);
      console.log('Payload decodificado:', payload);

      // Mapeamento das roles: supondo que 0 seja ADMIN e 1 seja USER, por exemplo
      switch (payload.role) {
        case 0:
          return 'ADMIN';
        case 1:
          return 'USER';
        default:
          return null;
      }
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }

  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c: string) =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

    return JSON.parse(jsonPayload);
  }
}
