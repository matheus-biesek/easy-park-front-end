import { HttpInterceptorFn } from '@angular/common/http';
//trocar nome dos arquivos pois não remete a sua função - interceptador - nome do arquivo auth.service
export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
